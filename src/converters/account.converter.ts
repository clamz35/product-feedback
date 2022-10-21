import { Account, AccountInterface } from '~~/models/account.model';
import { AccoutApiInterface } from '~~/models/api/account-api.model';
import { StrapiData } from '~~/models/api/strapi-response.model';
import { AccountRequestInterface } from '~~/models/request/account-request.model';
import { ApiConverter } from './api-converter';

export const accountApiConverter: ApiConverter<
	StrapiData<AccoutApiInterface>,
	AccountInterface,
	AccountRequestInterface,
	null
> = {
	toModel: (apiModel) => {
		return new Account({
			id: apiModel.id,
			avatarUrl: apiModel.attributes.avatarUrl,
			firstname: apiModel.attributes.firstname,
			lastname: apiModel.attributes.lastname,
		});
	},
	toRequestModel: function ({
		id,
		avatarUrl,
		firstname,
		lastname,
	}: AccountInterface): AccountRequestInterface {
		return {
			id,
			avatarUrl,
			firstname,
			lastname,
		};
	},
};
