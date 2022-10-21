import { PRODUCT_STATE_ENUM } from '~~/enums/product-state.enum';
import { Category, CategoryInterface } from './category.model';
import { CommentInterface } from './comment.model';

export interface FeedbackInterface {
	id?: number;
	name: string;
	detail: string;
	state: PRODUCT_STATE_ENUM;
	category?: CategoryInterface;
	comments?: CommentInterface[];
}

export class Feedback implements FeedbackInterface {
	id?: number;
	name!: string;
	detail!: string;
	state!: PRODUCT_STATE_ENUM;
	category?: CategoryInterface;
	comments?: CommentInterface[];
	constructor({
		id,
		name,
		detail,
		state,
		category,
		comments,
	}: FeedbackInterface) {
		this.id = id;
		this.name = name;
		this.detail = detail;
		this.state = state;
		this.category = category;
		this.comments = comments;
	}

	toJSON(): this {
		return { ...this }; // here I make a POJO's copy of the class instance
	}
}

export interface FeedbackFilter {
	category?: Partial<Category>;
	state?: string;
}
