import { PRODUCT_STATE_ENUM } from '~/enums/product-state.enum';

export type ProductStateItem = {
	color: string;
	shadowColor: string;
	label: string;
};

export const PRODUCT_STATE: Record<PRODUCT_STATE_ENUM, ProductStateItem> = {
	[PRODUCT_STATE_ENUM.PLANNED]: {
		color: 'bg-accent-third-500',
		shadowColor: 'shadow-accent-third-500',
		label: 'Planned',
	},

	[PRODUCT_STATE_ENUM.IN_PROGRESS]: {
		color: 'bg-accent-primary-500',
		shadowColor: 'shadow-accent-primary-500',
		label: 'In-Progress',
	},
	[PRODUCT_STATE_ENUM.LIVE]: {
		color: 'bg-light-blue',
		shadowColor: 'shadow-light-blue',
		label: 'Live',
	},
};
