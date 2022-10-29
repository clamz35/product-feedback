import { PRODUCT_STATE_ENUM } from '~~/enums/product-state.enum';
import { FeedbackInterface } from '~~/models/feedback.model';

export const filterFeedbackByState = (
	filters: FeedbackInterface[],
	state: PRODUCT_STATE_ENUM,
): FeedbackInterface[] => {
	return filters.filter((feedback) => feedback.state === state);
};
