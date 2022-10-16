import { AccoutApiInterface } from './account-api.model';
import { StrapiResponse } from './strapi-response.model';

export interface CommentApiInterface {
	message: string;
	account?: StrapiResponse<AccoutApiInterface>;
}
