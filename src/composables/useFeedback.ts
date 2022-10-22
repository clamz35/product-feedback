import { Ref } from 'nuxt/dist/app/compat/capi';
import { storeToRefs } from 'pinia';
import { FeedbackApiInterface } from '~~/models/api/feedback-api.model';
import { StrapiResponse } from '~~/models/api/strapi-response.model';
import { CategoryInterface } from '~~/models/category.model';
import { CommentInterface } from '~~/models/comment.model';
import { FeedbackInterface } from '~~/models/feedback.model';
import { useAccountStore } from '~~/store/account.store';
import { useFeedbackStore } from '~~/store/feedback.store';

interface UseFeedbackOutput {
	feedbacks: Ref<FeedbackInterface[] | null>;
	feedback: Ref<FeedbackInterface | null>;
	categorySelected: Ref<CategoryInterface | null>;
	fetchFeedback: (id: number) => Promise<void>;
	fetchFeedbacks: () => Promise<void>;
	createFeedback: (feedback: FeedbackInterface) => void;
	updateFeedback: (feedback: FeedbackInterface) => void;
	addComment: (comment: CommentInterface) => void;
	addReply: (
		commentParent: CommentInterface,
		newComment: CommentInterface,
	) => void;
	selectCategory: (category: CategoryInterface | null) => void;
	getNbComments: (feedback: FeedbackInterface) => number;
}

export const useFeedback = (): UseFeedbackOutput => {
	const feedbackStore = useFeedbackStore();
	const accountStore = useAccountStore();

	const { feedbacks, feedback, categorySelected } = storeToRefs(feedbackStore);

	const fetchFeedbacks = (): Promise<void> => {
		return feedbackStore.fetchFeedbacks();
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
		selectCategory,
		getNbComments,
	};
};
