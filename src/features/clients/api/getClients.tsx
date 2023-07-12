import { ExtractFnReturnType, QueryConfig } from 'lib/react-query';
import { Client, ClientResponse } from '../types';
import { axios } from 'lib/axios';
import { Meta } from 'features/global';
import { useQuery } from '@tanstack/react-query';
import { extractClients } from '../utils/extactData';

type ClientResponseProps = { meta: Meta; users: ClientResponse[] };
type ClientProps = { meta: Meta; clients: Client[] };

export const getClients = async (): Promise<ClientProps> => {
  const clientsResponse = (await axios.get(
    '/api/users/admin/clients',
  )) as ClientResponseProps;
  const clients = extractClients(clientsResponse?.users as ClientResponse[]);

  return { meta: clientsResponse?.meta, clients };
};

type QueryFnType = typeof getClients;

export type UseUsersOptions = {
  config?: QueryConfig<QueryFnType>;
};

export const useClients = ({ config }: UseUsersOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ['clients'],
    queryFn: () => getClients(),
    ...config,
  });
};
