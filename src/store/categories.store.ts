import { _AsyncData } from 'nuxt/dist/app/composables/asyncData';
import { defineStore } from 'pinia';
import { Category } from '~~/models/category.model';
import { StrapiResponse } from '~~/models/strapi-response.model';

interface CategoriesState {
	categories: Category[] | null;
}

export const useCategoriesStore = defineStore({
	id: 'categories-store',
	state: (): CategoriesState => ({ categories: null }),
	actions: {
		async fetchCategories() {
			this.categories = await useHttp<{ data: StrapiResponse[] }>(
				'categories',
				'/api/categories',
			).then((value: _AsyncData<{ data: StrapiResponse[] }, unknown>) => {
				const response = value.data.value;

				if (!response) {
					throw Error('[API][ERROR] Categories: response is empty');
				}
				return response.data.map((response: StrapiResponse): Category => {
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
