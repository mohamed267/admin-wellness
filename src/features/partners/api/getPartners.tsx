import { ExtractFnReturnType, QueryConfig } from 'lib/react-query';
import { Partner, PartnerResponse } from '../types';
import { axios } from 'lib/axios';
import { Meta } from 'features/global';
import { useQuery } from '@tanstack/react-query';
import { extractPartners } from '../utils/extactData';

type PartnerResponseProps = { meta: Meta; users: PartnerResponse[] };
type PartnerProps = { meta: Meta; partners: Partner[] };

type getPartnersQueryType = {
  filterBy?: 'all' | 'seller' | 'organizer';
};

export const getPartners = async ({
  filterBy = 'all',
  ...query
}: getPartnersQueryType): Promise<PartnerProps> => {
  const partnersResponse = (await axios.get('/api/users/admin/parteners', {
    params: {
      filterBy,
      ...query,
    },
  })) as PartnerResponseProps;
  const partners = extractPartners(
    partnersResponse?.users as PartnerResponse[],
  );

  return { meta: partnersResponse?.meta, partners };
};

type QueryFnType = typeof getPartners;

export type UseUsersOptions = {
  config?: QueryConfig<QueryFnType>;
  query?: getPartnersQueryType;
};

export const usePartners = ({ config, query }: UseUsersOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ['partners'],
    queryFn: () => getPartners(query ?? {}),
    ...config,
  });
};
