import { feedbackApiConverter } from '~~/converters/feedback.converter';
import { FeedbackApiInterface } from '~~/models/api/feedback-api.model';
import {
	StrapiCollectionResponse,
	StrapiData,
	StrapiResponse,
} from '~~/models/api/strapi-response.model';
import { CategoryInterface } from '~~/models/category.model';
import { FeedbackInterface } from '~~/models/feedback.model';
import { isStrapiDataArray } from '~~/utils/strapi.utils';

type FeedbacksEndpointResponse = StrapiCollectionResponse<FeedbackApiInterface>;

interface UseFeedbackApiOutput {
	fetchFeedbacks: (
		categorySelected?: CategoryInterface | null,
	) => Promise<FeedbackInterface[] | null>;

	fetchFeedback: (id: number) => Promise<FeedbackInterface>;

	createFeedback: (
		feedback: FeedbackInterface,
	) => Promise<StrapiData<FeedbackApiInterface>>;

	updateFeedback: (
		feedback: FeedbackInterface,
	) => Promise<StrapiResponse<FeedbackApiInterface>>;
}

const API_PREFIX = '/api/feedbacks';

export const useFeedbackApi = (): UseFeedbackApiOutput => {
	const fetchFeedbacks = (
		categorySelected?: CategoryInterface | null,
	): Promise<FeedbackInterface[] | null> => {
		const params: Record<string, unknown> = {};

		if (categorySelected) {
			params[`filters[category][id]`] = categorySelected.id;
		}

		return useHttp<FeedbacksEndpointResponse>(API_PREFIX, {
			params,
		}).then((val: FeedbacksEndpointResponse) => {
			if (!val?.data) {
				throw Error('[API][ERROR]Feedback response is empty');
			}
			if (!isStrapiDataArray(val.data)) {
				return null;
			}
			return val?.data.map((feedbackApi): FeedbackInterface => {
				return feedbackApiConverter.toModel(feedbackApi);
			});
		});
	};

	const fetchFeedback = async (id: number): Promise<FeedbackInterface> => {
		const params: Record<string, unknown> = {};
		params['populate[comments][populate][account][populate]'] = '*';
		params['populate[comments][populate][comments][populate]'] = '*';
		return useHttp<StrapiResponse<FeedbackApiInterface>>(
			`${API_PREFIX}/${id}`,
			{ params },
		).then((response: StrapiResponse<FeedbackApiInterface>) => {
			if (!response) {
				throw Error('[API][ERROR]Feedback response is empty');
			}
			const feedbackData = response.data;
			return feedbackApiConverter.toModel(feedbackData);
		});
	};

	const createFeedback = async (
		feedback: FeedbackInterface,
	): Promise<StrapiData<FeedbackApiInterface>> => {
		return useHttp<StrapiData<FeedbackApiInterface>>(API_PREFIX, {
			method: 'POST',
			body: {
				data: { ...feedbackApiConverter.toRequestModel(feedback, null) },
			},
		});
	};

	const updateFeedback = async (
		feedback: FeedbackInterface,
	): Promise<StrapiResponse<FeedbackApiInterface>> => {
		const params: Record<string, unknown> = {};
		return useHttp<StrapiResponse<FeedbackApiInterface>>(
			`${API_PREFIX}/${feedback.id}`,
			{
				method: 'PUT',
				params,
				body: {
					data: { ...feedbackApiConverter.toRequestModel(feedback, null) },
				},
			},
		);
	};

	return {
		fetchFeedbacks,
		fetchFeedback,
		createFeedback,
		updateFeedback,
	};
};

// const convertFeedbackApiToFeedback = (
// 	feedbackApi: StrapiData<FeedbackApiInterface>,
// ): FeedbackInterface => {
// 	const commentsApi = feedbackApi.attributes.comments;

// 	const commentsData = commentsApi?.data as
// 		| StrapiData<CommentApiInterface>[]
// 		| undefined;

// 	return new Feedback({
// 		id: feedbackApi.id,
// 		detail: feedbackApi.attributes.detail,
// 		name: feedbackApi.attributes.name,
// 		state: feedbackApi.attributes.state,
// 		comments:
// 			commentsData &&
// 			commentsData.map((comment): CommentInterface => {
// 				const account = comment.attributes.account;
// 				const accountData: StrapiData<AccoutApiInterface> | undefined =
// 					account?.data;

// 				return {
// 					id: comment.id,
// 					message: comment.attributes.message,
// 					account: accountData && {
// 						id: accountData.id,
// 						...accountData.attributes,
// 					},
// 				};
// 			}),
// 	});
// };
