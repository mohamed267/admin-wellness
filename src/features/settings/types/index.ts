export interface SubscriptionPlanResponse {
  id: 'string';
  title: string;
  for: 'seller' | 'organizer';
  price: number;
  permissions: PlanPermission[];
}

export interface SubscriptionPlan {
  id: 'string';
  for: 'seller' | 'organizer';
  price: number;
  title: string;
  permissions: PlanPermission[];
  consultData: {
    id: string;
  };
}

export interface PlanPermission {
  name: string;
  id: string;
}
