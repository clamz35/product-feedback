import { commentApiConverter } from '~~/converters/comment.converter';
import { CommentApiInterface } from '~~/models/api/comment-api.model';
import { StrapiResponse } from '~~/models/api/strapi-response.model';
import { CommentInterface } from '~~/models/comment.model';
import { CommentRequestInterface } from '~~/models/request/comment-request.model';

interface UseCommentsAPiOutput {
	addComment: (comment: CommentRequestInterface) => Promise<CommentInterface>;
}

const API_PREFIX = '/api/comments';

export const useCommentApi = (): UseCommentsAPiOutput => {
	const addComment = (
		comment: CommentRequestInterface,
	): Promise<CommentInterface> => {
		return useHttp<StrapiResponse<CommentApiInterface>>(API_PREFIX, {
			method: 'POST',
			body: { data: comment },
		}).then(
			(commentsApi: StrapiResponse<CommentApiInterface>): CommentInterface => {
				return commentApiConverter.toModel(commentsApi.data);
			},
		);
	};
	return { addComment };
};
