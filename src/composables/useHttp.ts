import { AsyncData } from 'nuxt/dist/app/composables';
import {
	KeyOfRes,
	PickFrom,
	_Transform,
} from 'nuxt/dist/app/composables/asyncData';
import type { FetchOptions } from 'ohmyfetch';

export const useHttp = <T>(
	key: string,
	url: string,
	opts?: FetchOptions,
): AsyncData<PickFrom<T, KeyOfRes<_Transform<T, T>>>, true | Error | null> => {
	const { $http } = useNuxtApp();
	// if you want, you can also make this
	// support selector strings as target
	const request = useAsyncData<T>(key, () => $http(url, opts));

	return request;
};
