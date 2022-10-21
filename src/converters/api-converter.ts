export type ApiConverter<T, U, V, Z> = {
	toModel: (apiModel: T) => U;
	toRequestModel: (model: U, opts: Z) => V;
};
