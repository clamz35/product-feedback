import { AsyncData } from 'nuxt/dist/app/composables';
import {
	KeyOfRes,
	PickFrom,
	_Transform,
} from 'nuxt/dist/app/composables/asyncData';
import type { FetchOptions } from 'ohmyfetch';

export const useHttp = <T>(
	key: string | null,
	url: string,
	opts?: FetchOptions,
): AsyncData<PickFrom<T, KeyOfRes<_Transform<T, T>>>, true | Error | null> => {
	const { $http } = useNuxtApp();
	// if you want, you can also make this
	// support selector strings as target
	let request = null;
	if (!key) {
		request = useAsyncData<T>(() => $http(url, opts));
	} else {
		request = useAsyncData<T>(key, () => $http(url, opts));
	}
	return request;
};
