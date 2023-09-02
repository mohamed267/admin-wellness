import { SubscriptionPlan, SubscriptionPlanResponse } from '../types';

export const extractPlans = (
  plans: SubscriptionPlanResponse[],
): SubscriptionPlan[] => {
  return (
    plans?.map((plan: SubscriptionPlanResponse) => ({
      id: plan?.id,
      title: plan?.title ?? '',
      for: plan.for,
      price: plan?.price ?? 0,
      permissions: plan?.permissions ?? [],
      consultData: {
        id: plan?.id ?? '',
      },
    })) ?? []
  );
};
