import { defineStore } from 'pinia';
import {
	StrapiData,
	StrapiResponse,
} from '~~/models/api/strapi-response.model';
import { Category } from '~~/models/category.model';

interface CategoriesState {
	categories: Category[] | null;
}

export const useCategoriesStore = defineStore({
	id: 'categories-store',
	state: (): CategoriesState => ({ categories: null }),
	actions: {
		async fetchCategories() {
			this.categories = await useHttp<StrapiResponse<Category>>(
				'/api/categories',
			).then((response: StrapiResponse<Category>): Category[] | null => {
				if (!response) {
					throw Error('[API][ERROR] Categories: response is empty');
				}

				if (!Array.isArray(response.data)) return null;

				return response.data.map((response: StrapiData<Category>): Category => {
					return new Category({
						id: response.id,
						name: response.attributes.name as string,
					});
				});
			});
		},
		setCategories(categories: Category[]) {
			this.categories = categories;
		},
	},
});
