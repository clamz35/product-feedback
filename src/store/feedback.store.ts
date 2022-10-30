import { defineStore } from 'pinia';
import { useCommentApi } from '~~/composables/api/useCommentApi';
import { useFeedbackApi } from '~~/composables/api/useFeedbackApi';
import { commentApiConverter } from '~~/converters/comment.converter';
import { PRODUCT_STATE_ENUM } from '~~/enums/product-state.enum';
import { SORT_ENUM } from '~~/enums/sort.enum';
import { FeedbackApiInterface } from '~~/models/api/feedback-api.model';
import {
	StrapiData,
	StrapiResponse,
} from '~~/models/api/strapi-response.model';
import { CategoryInterface } from '~~/models/category.model';
import { CommentInterface } from '~~/models/comment.model';
import { FeedbackInterface } from '~~/models/feedback.model';
import { filterFeedbackByState } from '~~/utils/feedbacks.utils';

interface FeedbackState {
	feedbacks: FeedbackInterface[] | null;
	feedback: FeedbackInterface | null;
	categorySelected: CategoryInterface | null;
	sort: FeedbackSort | null;
}

type FeedbackSort = {
	name: string;
	direction: SORT_ENUM;
};

type FectFeedbacksParams = {
	category?: CategoryInterface | null;
	sort?: FeedbackSort;
} | null;

export const useFeedbackStore = defineStore({
	id: 'feedbacks-store',
	state: (): FeedbackState => ({
		feedbacks: null,
		categorySelected: null,
		feedback: null,
		sort: null,
	}),
	getters: {
		plannedFeedbacks(): FeedbackInterface[] | null {
			if (!this.feedbacks) return null;
			return filterFeedbackByState(this.feedbacks, PRODUCT_STATE_ENUM.PLANNED);
		},
		inProgressFeedbacks(): FeedbackInterface[] | null {
			if (!this.feedbacks) return null;
			return filterFeedbackByState(
				this.feedbacks,
				PRODUCT_STATE_ENUM.IN_PROGRESS,
			);
		},
		liveFeedbacks(): FeedbackInterface[] | null {
			if (!this.feedbacks) return null;
			return filterFeedbackByState(this.feedbacks, PRODUCT_STATE_ENUM.LIVE);
		},
	},
	actions: {
		async fetchFeedbacks(params: FectFeedbacksParams = null): Promise<void> {
			this.categorySelected = params?.category ?? this.categorySelected;
			this.sort = params?.sort ?? this.sort;
			this.feedbacks = await useFeedbackApi().fetchFeedbacks({
				category: this.categorySelected,
				sort: this.sort,
			});
		},

		async fetchFeedback(id: number): Promise<void> {
			this.feedback = await useFeedbackApi().fetchFeedback(id);
		},

		async createFeedback(
			feedback: FeedbackInterface,
		): Promise<StrapiData<FeedbackApiInterface>> {
			return useFeedbackApi().createFeedback(feedback);
		},

		async updateFeedback(
			feedback: FeedbackInterface,
		): Promise<StrapiResponse<FeedbackApiInterface>> {
			return useFeedbackApi().updateFeedback(feedback);
		},

		selectCategory(category: CategoryInterface | null) {
			this.categorySelected = category;

			this.fetchFeedbacks();
		},

		async addComment(comment: CommentInterface) {
			if (!this.feedback?.id) {
				throw Error('[ERROR] this.feedback is undefined');
			}
			const { addComment: addCommentApi } = useCommentApi();

			await addCommentApi(
				commentApiConverter.toRequestModel(comment, {
					feedbackId: this.feedback.id,
				}),
			);
			if (!this.feedback.comments) {
				this.feedback.comments = [];
			}
			this.feedback?.comments?.push(comment);
		},

		async addReply(
			parentComment: CommentInterface,
			newComment: CommentInterface,
		) {
			if (!parentComment?.id) {
				throw Error('[ERROR] parentComment?.id is undefined');
			}
			const { addComment: addCommentApi } = useCommentApi();

			await addCommentApi(
				commentApiConverter.toRequestModel(newComment, {
					parentCommentId: parentComment.id,
				}),
			);

			if (!parentComment.comments) {
				parentComment.comments = [];
			}
			parentComment.comments?.push(newComment);
		},

		async addUpVote(feedbackId: number, nbVotes: number) {
			const { updateFeedback } = useFeedbackApi();
			const feedback = this.feedbacks?.find((f) => f.id === feedbackId);

			if (!feedback) {
				throw new Error('[addUpVote] feedback was not found');
			}

			feedback.nbVotes = nbVotes;
			await updateFeedback(feedback);
			await this.fetchFeedbacks();
		},
	},
});
