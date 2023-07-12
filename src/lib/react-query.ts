import { QueryClient, DefaultOptions } from '@tanstack/react-query';
import { UseQueryOptions } from '@tanstack/react-query';
import { AsyncReturnType } from 'type-fest';

const queryConfig: DefaultOptions = {
  queries: {
    useErrorBoundary: true,
    // refetchOnWindowFocus: false,
    // retry: false
  },
};

export const queryClient = new QueryClient({
  defaultOptions: queryConfig,
});

export type QueryConfig<QueryFnType extends (...args: any) => any> = Omit<
  UseQueryOptions<ExtractFnReturnType<QueryFnType>>,
  'queryKey' | 'queryFn'
>;

export type ExtractFnReturnType<FnType extends (...args: any) => any> =
  AsyncReturnType<FnType>;
