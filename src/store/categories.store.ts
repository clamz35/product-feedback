import { _AsyncData } from 'nuxt/dist/app/composables/asyncData';
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
				'categories',
				'/api/categories',
			).then(
				(
					value: _AsyncData<StrapiResponse<Category>, unknown>,
				): Category[] | null => {
					const response = value.data.value;

					if (!response) {
						throw Error('[API][ERROR] Categories: response is empty');
					}

					if (!Array.isArray(response.data)) return null;

					return response.data.map(
						(response: StrapiData<Category>): Category => {
							return new Category({
								id: response.id,
								name: response.attributes.name as string,
							});
						},
					);
				},
			);
		},
		setCategories(categories: Category[]) {
			this.categories = categories;
		},
	},
});
