import { Media } from 'features/global';
import { User } from 'features/users/types';
import { EventTimesPeriod } from './timeInterval';

export type ACTIVE = 'active';
export type PENDING = 'pending';

export type EventType = ACTIVE | PENDING;

export type EventListEntity = {
  id: string;
  title: string;
  createdAt: any;
  category: string;
  price: number;
  // score: number,
  status: EventType;
  consultData: {
    id: string;
    eventTitle: string;
    status: EventType;
  };
};

export type EventDetails = {
  id: string;
  title: string;
  createdAt: any;
  category: Category;
  price: number;
  latitude: string;
  longtitude: string;
  description: any;
  // score: number,
  status: 'pending' | 'active';
  town: EventTown;
  medias: Media[];
  periods: EventTimesPeriod[];
};

// event categores
export type EventCategory = {
  id: string;
  name: string;
  image: string;
  createdAt: string;
};

export type EventCategoryListItem = {
  id: string;
  name: string;
  image: string;
  createdAt: string;
  consultData: {
    id: string;
  };
};

// evrnt towns

export type EventTown = {
  id: string;
  name: string;
  image: string | null;
  createdAt: string;
};

export type EventTownListItem = {
  id: string;
  name: string;
  image: string | null;
  createdAt: string;
  consultData: {
    id: string;
  };
};

export type EventResponse = {
  id: string;
  title: string;
  createdAt: any;
  category: EventCategory | null;
  price: number;
  owner: User;
  // score: number,
  status: 'pending' | 'active';
};

///category

export type Category = {
  id: string;
  name: number;
  cretedAt: string;
  image: string;
};

///coupon

export type CouponResponse = {
  id: string;
  percentage: number;
  promoCode: string;
  eventId: string;
};

export type Coupon = {
  id: string;
  percentage: number;
  promoCode: string;
  eventId: string;
};

export * from './timeInterval';
