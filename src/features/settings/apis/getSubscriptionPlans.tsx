import { ExtractFnReturnType, QueryConfig } from 'lib/react-query';
import { useQuery } from '@tanstack/react-query';
import { axios } from 'lib/axios';
import { Meta } from 'features/global';
// import { GetSubscriptionPlansDto } from '../dtos/getSubscriptionPlans.dto';
import { SubscriptionPlan } from '../types';
import { extractPlans } from '../utils/extactData';

export const getSubcriptionPlans = async (): Promise<{
  meta: Meta;
  plans: SubscriptionPlan[];
}> => {
  const { meta, plans } = (await axios.get('/api/partener-plan')) as any;
  return {
    meta,
    plans: extractPlans(plans),
  };
};

type QueryFnType = typeof getSubcriptionPlans;

export type UseSuscriptionPlansOptions = {
  config?: QueryConfig<QueryFnType>;
  // query: GetSubscriptionPlansDto;
};

export const useSubcriptionPlans = ({ config }: UseSuscriptionPlansOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ['/partener-plans'],
    queryFn: () => getSubcriptionPlans(),
    ...config,
  });
};
