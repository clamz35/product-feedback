import { StrapiData } from '~~/models/api/strapi-response.model';

export const isStrapiDataArray = (
	strapiData: StrapiData<unknown> | StrapiData<unknown>[],
): strapiData is StrapiData<unknown>[] => {
	return Array.isArray(strapiData);
};
