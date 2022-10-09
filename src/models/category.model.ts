export class Category {
	id!: number;
	name!: string;

	constructor({ id, name }: Category) {
		this.id = id;
		this.name = name;
	}
}
