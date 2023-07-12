import { useQuery, UseQueryResult } from 'react-query';
import { axios } from 'lib/axios';

type getSearchTownQueryType = {
  town?: string;
};

export const searchTowns = async (
  query: getSearchTownQueryType = {},
): Promise<any> => {
  const response = await axios.get('/api/stores/towns', {
    params: {
      ...query,
    },
  });

  return response;
};

// type FnType = typeof searchTowns;

type useSearchTownsOptions = {
  config?: any;
  query?: getSearchTownQueryType;
};

export const useTowns: ({
  config,
  query,
}: useSearchTownsOptions) => UseQueryResult<any, Error> = ({ query } = {}) => {
  return useQuery(['stores/towns'], () => searchTowns(query));
};
