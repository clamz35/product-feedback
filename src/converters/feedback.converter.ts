import { FeedbackApiInterface } from '~~/models/api/feedback-api.model';
import { StrapiData } from '~~/models/api/strapi-response.model';
import { CommentInterface } from '~~/models/comment.model';
import { Feedback, FeedbackInterface } from '~~/models/feedback.model';
import { FeedbackRequestInterface } from '~~/models/request/feedback-request.model';
import { ApiConverter } from './api-converter';
import { commentApiConverter } from './comment.converter';

export const feedbackApiConverter: ApiConverter<
	StrapiData<FeedbackApiInterface>,
	FeedbackInterface,
	FeedbackRequestInterface,
	null
> = {
	toModel: (
		feedbackApi: StrapiData<FeedbackApiInterface>,
	): FeedbackInterface => {
		const commentsData = feedbackApi.attributes.comments?.data;
		return new Feedback({
			id: feedbackApi.id,
			detail: feedbackApi.attributes.detail,
			name: feedbackApi.attributes.name,
			state: feedbackApi.attributes.state,
			comments:
				commentsData &&
				commentsData.map((comment): CommentInterface => {
					return commentApiConverter.toModel(comment);
				}),
		});
	},
	toRequestModel: function ({
		id,
		detail,
		name,
		state,
		category,
		comments,
	}: FeedbackInterface): FeedbackRequestInterface {
		return {
			id,
			detail,
			name,
			state,
			category: category?.id,
			comments: comments && comments?.map((comment) => comment.id as number),
		};
	},
};
