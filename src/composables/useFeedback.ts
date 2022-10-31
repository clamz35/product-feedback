import { Ref } from 'nuxt/dist/app/compat/capi';
import { storeToRefs } from 'pinia';
import { SORT_ENUM } from '~~/enums/sort.enum';
import { FeedbackApiInterface } from '~~/models/api/feedback-api.model';
import { StrapiResponse } from '~~/models/api/strapi-response.model';
import { CategoryInterface } from '~~/models/category.model';
import { CommentInterface } from '~~/models/comment.model';
import { FeedbackInterface } from '~~/models/feedback.model';
import { useAccountStore } from '~~/store/account.store';
import { useFeedbackStore } from '~~/store/feedback.store';

export type FetchFeedbacksParams = {
	category?: number | null;
	sort?: {
		name: string;
		direction?: SORT_ENUM | null;
	};
};
interface UseFeedbackOutput {
	feedbacks: Ref<FeedbackInterface[] | null>;
	feedback: Ref<FeedbackInterface | null>;
	categorySelected: Ref<CategoryInterface | null>;
	fetchFeedback: (id: number) => Promise<void>;
	fetchFeedbacks: (params: FetchFeedbacksParams) => Promise<void>;
	createFeedback: (feedback: FeedbackInterface) => void;
	updateFeedback: (feedback: FeedbackInterface) => void;
	addComment: (comment: CommentInterface) => void;
	addReply: (
		commentParent: CommentInterface,
		newComment: CommentInterface,
	) => void;
	addUpVote: (feedbackId: number, nbVote: number) => void;
	selectCategory: (category: CategoryInterface | null) => void;
	getNbComments: (feedback: FeedbackInterface) => number;
	getPlannedFeedbacks: () => FeedbackInterface[] | null;
	getInProgressFeedbacks: () => FeedbackInterface[] | null;
	getLiveFeedbacks: () => FeedbackInterface[] | null;
}

export const useFeedback = (): UseFeedbackOutput => {
	const feedbackStore = useFeedbackStore();
	const accountStore = useAccountStore();
	const { categories } = useCategory();

	const { feedbacks, feedback, categorySelected } = storeToRefs(feedbackStore);

	const fetchFeedbacks = ({
		category: categoryId,
		sort,
	}: FetchFeedbacksParams): Promise<void> => {
		let category: CategoryInterface | null | undefined = null;

		if (categories.value && categoryId) {
			category = categories.value.find(({ id }) => id === categoryId);

			if (!category) {
				throw new Error(`Category with ${categoryId} was not found`);
			}
		}

		return feedbackStore.fetchFeedbacks({
			category,
			sort,
		});
	};

	const fetchFeedback = async (id: number): Promise<void> => {
		await feedbackStore.fetchFeedback(id);
	};

	const createFeedback = (feedback: FeedbackInterface): void => {
		feedbackStore.createFeedback(feedback);
	};
	const updateFeedback = (
		feedback: FeedbackInterface,
	): Promise<StrapiResponse<FeedbackApiInterface>> => {
		return feedbackStore.updateFeedback(feedback);
	};

	const selectCategory = (category: CategoryInterface | null): void => {
		feedbackStore.selectCategory(category);
	};

	const getNbComments = (feedback: FeedbackInterface): number =>
		feedback.comments?.length ?? 0;

	const addComment = async (
		comment: CommentInterface,
	): Promise<CommentInterface> => {
		comment.account = accountStore.account;
		feedbackStore.addComment({
			...comment,
			account: accountStore.account,
		});

		return comment;
	};

	const getPlannedFeedbacks = (): FeedbackInterface[] | null => {
		return feedbackStore.plannedFeedbacks;
	};

	const getInProgressFeedbacks = (): FeedbackInterface[] | null => {
		return feedbackStore.inProgressFeedbacks;
	};

	const getLiveFeedbacks = (): FeedbackInterface[] | null => {
		return feedbackStore.liveFeedbacks;
	};

	const addReply = (
		commentParent: CommentInterface,
		newComment: CommentInterface,
	): void => {
		newComment.account = accountStore.account;
		feedbackStore.addReply(commentParent, {
			...newComment,
			account: accountStore.account,
		});
	};

	const addUpVote = (feedbackId: number, nbVotes: number): void => {
		feedbackStore.addUpVote(feedbackId, nbVotes);
	};

	return {
		feedbacks,
		feedback,
		fetchFeedbacks,
		fetchFeedback,
		categorySelected,
		createFeedback,
		updateFeedback,
		addComment,
		addReply,
		addUpVote,
		selectCategory,
		getNbComments,
		getPlannedFeedbacks,
		getInProgressFeedbacks,
		getLiveFeedbacks,
	};
};
