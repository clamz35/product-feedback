import { Ref } from 'nuxt/dist/app/compat/capi';
import { storeToRefs } from 'pinia';
import { Category } from '~~/models/category.model';
import { Feedback } from '~~/models/feedback.model';
import { useFeedbackStore } from '~~/store/feedback.store';

interface UseFeedbackOutput {
	feedbacks: Ref<Feedback[] | null>;
	fetchFeedbacks: () => void;
	categorySelected: Ref<Category | null>;
	selectCategory: (category: Category | null) => void;
}

export const useFeedback = (): UseFeedbackOutput => {
	const feedbackStore = useFeedbackStore();

	const { feedbacks, categorySelected } = storeToRefs(feedbackStore);

	const fetchFeedbacks = (): void => {
		feedbackStore.fetchFeedbacks();
	};

	const selectCategory = (category: Category | null): void => {
		feedbackStore.selectCategory(category);
	};

	return {
		feedbacks,
		fetchFeedbacks,
		selectCategory,
		categorySelected,
	};
};
