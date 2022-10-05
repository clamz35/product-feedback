import type { FetchOptions } from 'ohmyfetch';

export function useHttp(url: string, opts?: FetchOptions) {
  const { $http } = useNuxtApp();
  // if you want, you can also make this
  // support selector strings as target
  const request = useAsyncData('feedbacks', () => $http(url, opts));

  return request;
}
