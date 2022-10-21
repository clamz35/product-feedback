import { defineStore } from 'pinia';
import { AccountInterface } from '~~/models/account.model';

interface AccountState {
	account: AccountInterface;
}

export const useAccountStore = defineStore({
	id: 'account-store',
	state: (): AccountState => ({
		account: {
			id: 1,
			avatarUrl:
				'https://robohash.org/4f02299accca91c0f6ad085d7846d2b3?set=set4&bgset=bg2&size=200x200',
			firstname: 'Harry',
			lastname: 'Dupond',
		},
	}),
});
