import { AccountInterface } from './account.model';

export interface CommentInterface {
	id?: number | undefined;
	message: string;
	account?: AccountInterface | null;
	comments?: CommentInterface[];
}

export class Comment implements CommentInterface {
	id?: number | undefined;
	message: string;
	account?: AccountInterface | null;
	comments?: CommentInterface[];

	constructor({ id, message, account, comments }: CommentInterface) {
		this.id = id;
		this.message = message;
		this.account = account;
		this.comments = comments;
	}
}
