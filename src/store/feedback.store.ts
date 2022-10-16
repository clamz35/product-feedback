import { AsyncData, _AsyncData } from 'nuxt/dist/app/composables/asyncData';
import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';
import { AccoutApiInterface } from '~~/models/api/account-api.model';
import { CommentApiInterface } from '~~/models/api/comment-api.model';
import { FeedbackApiInterface } from '~~/models/api/feedback-api.model';
import {
	StrapiData,
	StrapiResponse,
} from '~~/models/api/strapi-response.model';
import { Category } from '~~/models/category.model';
import { CommentInterface } from '~~/models/comment.model';
import { Feedback, FeedbackInterface } from '~~/models/feedback.model';
import { FeedbackRequestInterface } from '~~/models/request/feedback-request.model';
import { isStrapiDataArray } from '~~/utils/strapi.utils';

interface FeedbackState {
	feedbacks: Feedback[] | null;
	feedback: Feedback | null;
	categorySelected: Category | null;
}

type FeedbacksEndpointResponse = StrapiResponse<FeedbackApiInterface>;

export const useFeedbackStore = defineStore({
	id: 'feedbacks-store',
	state: (): FeedbackState => ({
		feedbacks: null,
		categorySelected: null,
		feedback: null,
	}),
	getters: {},
	actions: {
		async fetchFeedbacks(): Promise<void> {
			let endpointCacheKey = 'feedbacks';
			const params: Record<string, unknown> = {};
			params.populate = 'comments.account, category';

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
				if (!isStrapiDataArray(val.data.value.data)) {
					return null;
				}
				return val.data.value?.data.map((feedbackApi): Feedback => {
					return convertFeedbackApiToFeedback(feedbackApi);
				});
			});
		},

		async fetchFeedback(id: number): Promise<void> {
			const params: Record<string, unknown> = {};
			params.populate = 'comments.account, category';
			this.feedback = await useHttp<StrapiResponse<FeedbackApiInterface>>(
				`feedback-${id}`,
				`/api/feedbacks/${id}`,
				{ params },
			).then(
				(
					response: _AsyncData<StrapiResponse<FeedbackApiInterface>, unknown>,
				) => {
					if (!response.data.value) {
						throw Error('[API][ERROR]Feedback response is empty');
					}
					const feedbackData = response.data.value
						.data as StrapiData<FeedbackApiInterface>;
					return convertFeedbackApiToFeedback(feedbackData);
				},
			);
		},

		async createFeedback(
			feedback: FeedbackInterface,
		): Promise<AsyncData<FeedbackInterface, true | Error | null>> {
			return useHttp<FeedbackInterface>('create-feedback', '/api/feedbacks', {
				method: 'POST',
				body: { data: { ...feedback } },
			});
		},

		async updateFeedback(
			feedback: FeedbackRequestInterface,
		): Promise<
			AsyncData<StrapiResponse<FeedbackApiInterface>, true | Error | null>
		> {
			const params: Record<string, unknown> = {};
			return useHttp<StrapiResponse<FeedbackApiInterface>>(
				uuidv4(),
				`/api/feedbacks/${feedback.id}`,
				{
					method: 'PUT',
					params,
					body: { data: { ...feedback } },
				},
			);
		},

		selectCategory(category: Category | null) {
			this.categorySelected = category;

			this.fetchFeedbacks();
		},

		addComment(comment: CommentInterface) {
			if (!this.feedback) {
				throw Error('[ERROR] this.feedback is undefined');
			}
			if (!this.feedback.comments) {
				this.feedback.comments = [];
			}
			this.feedback?.comments?.push(comment);
		},
	},
});
const convertFeedbackApiToFeedback = (
	feedbackApi: StrapiData<FeedbackApiInterface>,
): Feedback => {
	const commentsApi = feedbackApi.attributes.comments;

	const commentsData = commentsApi?.data as
		| StrapiData<CommentApiInterface>[]
		| undefined;

	return new Feedback({
		id: feedbackApi.id,
		detail: feedbackApi.attributes.detail,
		name: feedbackApi.attributes.name,
		state: feedbackApi.attributes.state,
		comments:
			commentsData &&
			commentsData.map((comment): CommentInterface => {
				const account = comment.attributes.account;
				let accountData: StrapiData<AccoutApiInterface> | null = null;
				if (account) {
					accountData = account.data as StrapiData<AccoutApiInterface>;
				}
				return {
					id: comment.id,
					message: comment.attributes.message as string,
					account: accountData && {
						id: accountData.id,
						...accountData.attributes,
					},
				};
			}),
	});
};
