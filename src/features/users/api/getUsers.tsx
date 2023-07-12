import { ExtractFnReturnType, QueryConfig } from 'lib/react-query';
import { useQuery } from '@tanstack/react-query';
import { User } from '../types';
import { axios } from 'lib/axios';
import { Meta } from 'features/global';

export const getUsers = (): Promise<{ meta: Meta; users: User[] }> => {
  return axios.get('/api/users');
};

type QueryFnType = typeof getUsers;

export type UseUsersOptions = {
  config?: QueryConfig<QueryFnType>;
};

export const useUsers = ({ config }: UseUsersOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ['/users'],
    queryFn: () => getUsers(),
    ...config,
  });
};
