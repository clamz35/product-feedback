export interface CommentRequestInterface {
	id?: number | undefined;
	message: string;
	account?: number;
	comments?: number[];
	comment?: number;
	feedback?: number;
}
