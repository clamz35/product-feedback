import { CommentApiInterface } from '~~/models/api/comment-api.model';
import { StrapiData } from '~~/models/api/strapi-response.model';
import { Comment, CommentInterface } from '~~/models/comment.model';
import { CommentRequestInterface } from '~~/models/request/comment-request.model';
import { accountApiConverter } from './account.converter';
import { ApiConverter } from './api-converter';

type CommentApiConverterFromRequestOptions = {
	feedbackId?: number;
	parentCommentId?: number;
};

export const commentApiConverter: ApiConverter<
	StrapiData<CommentApiInterface>,
	CommentInterface,
	CommentRequestInterface,
	CommentApiConverterFromRequestOptions
> = {
	toModel: (apiModel) => {
		return new Comment({
			id: apiModel.id,
			message: apiModel.attributes.message,
			account:
				apiModel.attributes.account?.data &&
				accountApiConverter.toModel(apiModel.attributes.account?.data),
			comments: apiModel.attributes.comments?.data?.map((commentApi) =>
				commentApiConverter.toModel(commentApi),
			),
		});
	},

	toRequestModel: (
		model: CommentInterface,
		{ feedbackId, parentCommentId }: CommentApiConverterFromRequestOptions,
	): CommentRequestInterface => {
		return {
			feedback: feedbackId,
			message: model.message,
			account: model.account?.id,
			comment: parentCommentId,
		};
	},
};
