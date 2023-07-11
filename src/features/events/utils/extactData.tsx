import { Coupon, CouponResponse, Event, EventCategory, EventCategoryListItem, EventResponse, EventTown, EventTownListItem } from "../types";

export const extractEvents = (eventRespose: EventResponse[] ):Event[]=>{

    return (eventRespose?.map((event:EventResponse)=>(
        {
            id: event?.id,
            title: event?.title ?? "",
            createdAt: event?.createdAt ?? "",
            category: event?.category?.name ?? "",
            price: event?.price ?? 0.0,
            status: "pending",
            consultData: {
                id: event?.id ?? "", 
                eventTitle: event?.title ?? ""
            }
        }
    )) ??[])

}



export const extactEventCategories = (eventCategoriesRespose: EventCategory[] ):EventCategoryListItem[]=>{

    return (eventCategoriesRespose?.map((eventCategory:EventCategory)=>(
        {
            id: eventCategory?.id,
            name: eventCategory?.name,
            createdAt: eventCategory?.createdAt,
            image: eventCategory?.image,
            consultData:{
                id: eventCategory?.id
            }
        }
    )) ??[])

}


export const extactEventTowns = (eventTownsRespose: EventTown[] ):EventTownListItem[]=>{

    return (eventTownsRespose?.map((eventTown:EventTown)=>(
        {
            id: eventTown?.id,
            name: eventTown?.name,
            createdAt: eventTown?.createdAt,
            image: eventTown?.image,
            consultData:{
                id: eventTown?.id
            }
        }
    )) ??[])

}


export const extractCoupons = (couponsRespose: CouponResponse[] ):Coupon[]=>{

    return (couponsRespose?.map((coupon:CouponResponse)=>(
        {
            id: coupon?.id,
            promoCode: coupon?.promoCode,
            percentage: coupon?.percentage,
            eventId: coupon?.eventId,
        }
    )) ??[])

}