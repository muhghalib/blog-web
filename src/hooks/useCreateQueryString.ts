import { useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

type UseCreateQueryStringReturnTypes = (arrQuery: Array<{ name: string; value: string }>) => string;

export const useCreateQueryString = (): UseCreateQueryStringReturnTypes => {
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (arrQuery: Parameters<UseCreateQueryStringReturnTypes>[0]) => {
      const params = new URLSearchParams(searchParams);

      for (let i = 0; i < arrQuery.length; i++) {
        params.set(arrQuery[i].name, arrQuery[i].value);
      }

      return params.toString();
    },
    [searchParams],
  );

  return (arrQuery) => createQueryString(arrQuery);
};
