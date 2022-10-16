import { PRODUCT_STATE_ENUM } from '~~/enums/product-state.enum';

export interface FeedbackRequestInterface {
	id?: number;
	name: string;
	detail: string;
	state: PRODUCT_STATE_ENUM;
	category?: number;
	comments?: number[];
}
