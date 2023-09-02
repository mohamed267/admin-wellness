import moment from 'moment';
import {
  Coupon,
  CouponResponse,
  EventCategory,
  EventCategoryListItem,
  EventDetails,
  EventListEntity,
  EventResponse,
  EventTimesPeriod,
  EventTown,
  EventTownListItem,
} from '../types';
import { Media } from 'features/global';
import { joinEventImage } from 'utils/images';

export const extractEvents = (
  eventRespose: EventResponse[],
): EventListEntity[] => {
  return (
    eventRespose?.map((event: EventResponse) => ({
      id: event?.id,
      title: event?.title ?? '',
      createdAt: event?.createdAt ?? '',
      category: event?.category?.name ?? '',
      price: event?.price ?? 0.0,
      status: event.status,
      publisher: event?.owner?.displayName,
      consultData: {
        id: event?.id ?? '',
        eventTitle: event?.title ?? '',
        status: event?.status,
      },
    })) ?? []
  );
};

export const extractEvent = (eventRespose: EventDetails): EventDetails => {
  return {
    ...eventRespose,
    medias:
      eventRespose?.medias?.map((media: Media) => ({
        ...media,
        url: joinEventImage(media?.url),
      })) ?? [],
    periods:
      eventRespose?.periods?.map((period: EventTimesPeriod) => ({
        ...period,
        beginsIn: moment(period?.beginsIn).toDate(),
        endsIn: moment(period?.endsIn).toDate(),
      })) ?? [],
  };
};

export const extactEventCategories = (
  eventCategoriesRespose: EventCategory[],
): EventCategoryListItem[] => {
  return (
    eventCategoriesRespose?.map((eventCategory: EventCategory) => ({
      id: eventCategory?.id,
      name: eventCategory?.name,
      createdAt: eventCategory?.createdAt,
      image: eventCategory?.image,
      consultData: {
        id: eventCategory?.id,
      },
    })) ?? []
  );
};

export const extactEventTowns = (
  eventTownsRespose: EventTown[],
): EventTownListItem[] => {
  return (
    eventTownsRespose?.map((eventTown: EventTown) => ({
      id: eventTown?.id,
      name: eventTown?.name,
      createdAt: eventTown?.createdAt,
      image: eventTown?.image,
      consultData: {
        id: eventTown?.id,
      },
    })) ?? []
  );
};

export const extractCoupons = (couponsRespose: CouponResponse[]): Coupon[] => {
  return (
    couponsRespose?.map((coupon: CouponResponse) => ({
      id: coupon?.id,
      promoCode: coupon?.promoCode,
      percentage: coupon?.percentage,
      eventId: coupon?.eventId,
    })) ?? []
  );
};
