import { FetchOptions } from 'ohmyfetch';

export const useHttp = <T>(url: string, opts?: FetchOptions): Promise<T> => {
	const { $http } = useNuxtApp();
	return $http<T>(url, opts);
};
