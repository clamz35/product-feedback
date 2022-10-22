import { Ref } from 'nuxt/dist/app/compat/capi';
import { storeToRefs } from 'pinia';
import { Category } from '~~/models/category.model';
import { useCategoriesStore } from '~~/store/categories.store';

interface UseCategoryOuput {
	fetchCategories: () => Promise<void>;
	categories: Ref<Category[] | null>;
}

export const useCategory = (): UseCategoryOuput => {
	const categoryStore = useCategoriesStore();

	const { categories } = storeToRefs(categoryStore);

	const fetchCategories = (): Promise<void> => {
		return categoryStore.fetchCategories();
	};

	return {
		fetchCategories,
		categories,
	};
};
