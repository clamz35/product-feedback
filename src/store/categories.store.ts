import { defineStore } from 'pinia';
import { useCategoryApi } from '~~/composables/api/useCategoryApi';
import { Category } from '~~/models/category.model';

interface CategoriesState {
	categories: Category[] | null;
}

export const useCategoriesStore = defineStore({
	id: 'categories-store',
	state: (): CategoriesState => ({ categories: null }),
	actions: {
		async fetchCategories() {
			this.categories = await useCategoryApi().fetchCategories();
		},
		setCategories(categories: Category[]) {
			this.categories = categories;
		},
	},
});
