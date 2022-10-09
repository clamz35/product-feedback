import { PRODUCT_STATE_ENUM } from '~~/enums/product-state.enum';
import { Category } from './category.model';

export class Feedback {
	id!: number;
	name!: string;
	detail!: string;
	state!: PRODUCT_STATE_ENUM;
	constructor({ id, name, detail, state }: Feedback) {
		this.id = id;
		this.name = name;
		this.detail = detail;
		this.state = state;
	}
}

export interface FeedbackFilter {
	category?: Partial<Category>;
	state?: string;
}
