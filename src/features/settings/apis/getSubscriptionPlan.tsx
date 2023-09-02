import { ExtractFnReturnType, QueryConfig } from 'lib/react-query';
import { useQuery } from '@tanstack/react-query';
import { axios } from 'lib/axios';
// import { GetSubscriptionPlansDto } from '../dtos/getSubscriptionPlans.dto';
import { SubscriptionPlan } from '../types';
import { GetSubscriptionPlanDto } from '../dtos/getSubscriptionPlan.dto';

export const getSubcriptionPlan = async (
  id?: string,
): Promise<SubscriptionPlan | null> => {
  return id ? axios.get(`/api/partener-plan/${id}`) : null;
};

type QueryFnType = typeof getSubcriptionPlan;

export type UseSuscriptionPlansOptions = {
  config?: QueryConfig<QueryFnType>;
  query: GetSubscriptionPlanDto;
};

export const useSubcriptionPlan = ({
  config,
  query,
}: UseSuscriptionPlansOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: [`/partener-plan/${query.planId}`],
    queryFn: () => getSubcriptionPlan(query?.planId),
    ...config,
  });
};
