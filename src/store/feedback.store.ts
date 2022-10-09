import { _AsyncData } from 'nuxt/dist/app/composables/asyncData';
import { defineStore } from 'pinia';
import { PRODUCT_STATE_ENUM } from '~~/enums/product-state.enum';
import { Category } from '~~/models/category.model';
import { Feedback } from '~~/models/feedback.model';
import { StrapiResponse } from '~~/models/strapi-response.model';

interface FeedbackState {
	feedbacks: Feedback[] | null;
	categorySelected: Category | null;
}

interface FeedbacksEndpointResponse {
	data: StrapiResponse[];
}

export const useFeedbackStore = defineStore({
	id: 'feedbacks-store',
	state: (): FeedbackState => ({ feedbacks: null, categorySelected: null }),
	actions: {
		async fetchFeedbacks(): Promise<void> {
			const params: Record<string, unknown> = {};
			let endpointCacheKey = 'feedbacks';

			if (this.categorySelected) {
				params[`filters[category][id]`] = this.categorySelected.id;
				endpointCacheKey = `filters[category][id]-${this.categorySelected.id}`;
			}
			this.feedbacks = await useHttp<FeedbacksEndpointResponse>(
				endpointCacheKey,

				'/api/feedbacks',
				{
					params,
				},
			).then((val: _AsyncData<FeedbacksEndpointResponse, unknown>) => {
				if (!val.data.value) {
					throw Error('[API][ERROR]Feedback response is empty');
				}
				return val.data.value?.data.map((feedbackApi): Feedback => {
					return new Feedback({
						id: feedbackApi.id,
						detail: feedbackApi.attributes.detail as string,
						name: feedbackApi.attributes.name as string,
						state: feedbackApi.attributes.state as PRODUCT_STATE_ENUM,
					});
				});
			});
		},

		selectCategory(category: Category | null) {
			this.categorySelected = category;

			this.fetchFeedbacks();
		},
	},
});
