import {
	StrapiData,
	StrapiResponse,
} from '~~/models/api/strapi-response.model';
import { Category } from '~~/models/category.model';

interface UseCategoryApiOutput {
	fetchCategories: () => Promise<Category[] | null>;
}

const API_PREFIX = '/api/categories';

export const useCategoryApi = (): UseCategoryApiOutput => {
	const fetchCategories = async (): Promise<Category[] | null> => {
		return useHttp<StrapiResponse<Category>>(API_PREFIX).then(
			(response: StrapiResponse<Category>): Category[] | null => {
				if (!response) {
					throw Error('[API][ERROR] Categories: response is empty');
				}

				if (!Array.isArray(response.data)) return null;

				return response.data.map((response: StrapiData<Category>): Category => {
					return new Category({
						id: response.id,
						name: response.attributes.name,
					});
				});
			},
		);
	};

	return {
		fetchCategories,
	};
};
