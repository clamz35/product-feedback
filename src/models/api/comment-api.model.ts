import { AccoutApiInterface } from './account-api.model';
import {
	StrapiCollectionResponse,
	StrapiResponse,
} from './strapi-response.model';

export interface CommentApiInterface {
	message: string;
	account?: StrapiResponse<AccoutApiInterface>;
	comments: StrapiCollectionResponse<CommentApiInterface>;
}
