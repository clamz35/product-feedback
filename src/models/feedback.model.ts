import { PRODUCT_STATE_ENUM } from '~~/enums/product-state.enum';
import { Category } from './category.model';

export interface FeedbackInterface {
	id?: number;
	name: string;
	detail: string;
	state: PRODUCT_STATE_ENUM;
	category?: number;
}

export class Feedback implements FeedbackInterface {
	id?: number;
	name!: string;
	detail!: string;
	state!: PRODUCT_STATE_ENUM;
	category?: number;
	constructor({ id, name, detail, state, category }: FeedbackInterface) {
		this.id = id;
		this.name = name;
		this.detail = detail;
		this.state = state;
		this.category = category;
	}

	toJSON(): this {
		return { ...this }; // here I make a POJO's copy of the class instance
	}
}

export interface FeedbackFilter {
	category?: Partial<Category>;
	state?: string;
}
