import { Ref } from 'nuxt/dist/app/compat/capi';
import { AsyncData } from 'nuxt/dist/app/composables';
import { storeToRefs } from 'pinia';
import { FeedbackApiInterface } from '~~/models/api/feedback-api.model';
import { StrapiResponse } from '~~/models/api/strapi-response.model';
import { Category } from '~~/models/category.model';
import { CommentInterface } from '~~/models/comment.model';
import { FeedbackInterface } from '~~/models/feedback.model';
import { FeedbackRequestInterface } from '~~/models/request/feedback-request.model';
import { useFeedbackStore } from '~~/store/feedback.store';
import { useCommentApi } from './api/useCommentApi';

interface UseFeedbackOutput {
	feedbacks: Ref<FeedbackInterface[] | null>;
	feedback: Ref<FeedbackInterface | null>;
	fetchFeedback: (id: number) => void;
	fetchFeedbacks: () => void;
	createFeedback: (feedback: FeedbackInterface) => void;
	updateFeedback: (feedback: FeedbackRequestInterface) => void;
	categorySelected: Ref<Category | null>;
	addComment: (comment: CommentInterface) => void;
	selectCategory: (category: Category | null) => void;
	getNbComments: (feedback: FeedbackInterface) => number;
}

export const useFeedback = (): UseFeedbackOutput => {
	const feedbackStore = useFeedbackStore();

	const { feedbacks, feedback, categorySelected } = storeToRefs(feedbackStore);

	const { addComment: addCommentApi } = useCommentApi();

	const fetchFeedbacks = (): void => {
		feedbackStore.fetchFeedbacks();
	};

	const fetchFeedback = (id: number): void => {
		feedbackStore.fetchFeedback(id);
	};

	const createFeedback = (feedback: FeedbackInterface): void => {
		feedbackStore.createFeedback(feedback);
	};
	const updateFeedback = (
		feedback: FeedbackRequestInterface,
	): Promise<
		AsyncData<StrapiResponse<FeedbackApiInterface>, true | Error | null>
	> => {
		return feedbackStore.updateFeedback(feedback);
	};

	const selectCategory = (category: Category | null): void => {
		feedbackStore.selectCategory(category);
	};

	const getNbComments = (feedback: FeedbackInterface): number =>
		feedback.comments?.length ?? 0;

	const addComment = async (comment: CommentInterface): void => {
		addCommentApi(comment).then(async (commentApi) => {
			if (!feedback.value) {
				throw Error('[ERROR] feedback is undefined');
			}
			feedbackStore.addComment(commentApi);
			const feedbackRequest: FeedbackRequestInterface = {
				id: feedback.value.id,
				detail: feedback.value.detail,
				name: feedback.value.name,
				state: feedback.value.state,
				category: feedback.value.category,
				comments:
					feedback.value.comments?.map((comment) => comment.id as number) ?? [],
			};

			feedbackRequest.comments?.push(commentApi.id as number);

			await updateFeedback(feedbackRequest);
			// todo handle errors
		});
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
		selectCategory,
		getNbComments,
	};
};
