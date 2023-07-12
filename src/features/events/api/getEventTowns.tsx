import { ExtractFnReturnType, QueryConfig } from 'lib/react-query';
import { useQuery } from '@tanstack/react-query';
import { EventTown } from '../types';
import { axios } from 'lib/axios';

import { extactEventTowns } from '../utils/extactData';

type getEventTownsQueryType = {
  get?: string;
};

export const getEventTowns = async (
  query: getEventTownsQueryType = {},
): Promise<EventTown[]> => {
  const towns = (await axios.get('/api/stores/towns', {
    params: {
      ...query,
    },
  })) as any;

  return extactEventTowns(towns);
};

type QueryFnType = typeof getEventTowns;

export type UseUsersOptions = {
  config?: QueryConfig<QueryFnType>;
  query?: getEventTownsQueryType;
};

export const useTowns = ({ config, query }: UseUsersOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ['/eventTowns'],
    queryFn: () => getEventTowns(query),
    ...config,
  });
};
