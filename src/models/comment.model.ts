import { AccountInterface } from './account.model';

export interface CommentInterface {
	id?: number | undefined;
	message: string;
	account?: AccountInterface | null;
}

export class Comment implements CommentInterface {
	id?: number | undefined;
	message: string;
	account?: AccountInterface | null;

	constructor({ message, account }: CommentInterface) {
		this.message = message;
		this.account = account;
	}
}
