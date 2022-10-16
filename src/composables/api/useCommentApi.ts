import { AccountInterface } from '~~/models/account.model';
import { CommentApiInterface } from '~~/models/api/comment-api.model';
import {
	StrapiData,
	StrapiResponse,
} from '~~/models/api/strapi-response.model';
import { CommentInterface } from '~~/models/comment.model';

interface UseCommentsAPiOutput {
	addComment: (comment: CommentInterface) => Promise<CommentInterface>;
}

export const useCommentApi = (): UseCommentsAPiOutput => {
	const addComment = (comment: CommentInterface): Promise<CommentInterface> => {
		return useHttp<StrapiResponse<CommentApiInterface>>('/api/comments', {
			method: 'POST',
			body: { data: comment },
		}).then(
			(commentsApi: StrapiResponse<CommentApiInterface>): CommentInterface => {
				const comment = commentsApi.data as StrapiData<CommentApiInterface>;
				const message = comment?.attributes.message;
				const account = comment.attributes.account;

				return {
					id: comment.id,
					message,
					account:
						account &&
						(account.data as StrapiData<AccountInterface>).attributes,
				};
			},
		);
	};
	return { addComment };
};
