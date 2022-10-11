export interface CategoryInterface {
	id: number;
	name: string;
}

export class Category implements CategoryInterface {
	id!: number;
	name!: string;

	constructor({ id, name }: CategoryInterface) {
		this.id = id;
		this.name = name;
	}

	toJSON(): this {
		return { ...this }; // here I make a POJO's copy of the class instance
	}
}
