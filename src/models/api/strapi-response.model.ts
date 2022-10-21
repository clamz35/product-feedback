export interface StrapiResponse<T> {
	data: StrapiData<T>;
}

export interface StrapiCollectionResponse<T> {
	data: StrapiData<T>[];
}

export interface StrapiData<T> {
	id: number;
	attributes: T & { createdAt: Date; updatedAt: Date; publishedAt: Date };
}
