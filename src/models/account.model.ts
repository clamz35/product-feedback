export interface AccountInterface {
	id: number;
	lastname: string;
	firstname: string;
	avatarUrl: string;
}

export class Account implements AccountInterface {
	id: number;
	lastname: string;
	firstname: string;
	avatarUrl: string;

	constructor({ id, lastname, firstname, avatarUrl }: AccountInterface) {
		this.id = id;
		this.lastname = lastname;
		this.firstname = firstname;
		this.avatarUrl = avatarUrl;
	}
}
