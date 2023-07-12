import { ExtractFnReturnType, QueryConfig } from 'lib/react-query';
import { useQuery } from '@tanstack/react-query';
import { EventCategory } from '../types';
import { axios } from 'lib/axios';

type searchEventCategoriesQueryType = {
  search?: string;
};

export const searchEventCategories = async (
  query: searchEventCategoriesQueryType = {},
): Promise<EventCategory[]> => {
  const categories = (await axios.get('/api/events/categories', {
    params: {
      ...query,
    },
  })) as any;

  return categories;
};

type QueryFnType = typeof searchEventCategories;

export type UseUsersOptions = {
  config?: QueryConfig<QueryFnType>;
  query?: searchEventCategoriesQueryType;
};

export const useCategories = ({ config, query }: UseUsersOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ['/eventCategories'],
    queryFn: () => searchEventCategories(query),
    ...config,
  });
};
