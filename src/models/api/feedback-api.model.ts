import { PRODUCT_STATE_ENUM } from '~~/enums/product-state.enum';
import { CommentApiInterface } from './comment-api.model';
import { StrapiCollectionResponse } from './strapi-response.model';

export interface FeedbackApiInterface {
	id?: number;
	name: string;
	detail: string;
	state: PRODUCT_STATE_ENUM;
	category?: number;
	comments?: StrapiCollectionResponse<CommentApiInterface>;
}
