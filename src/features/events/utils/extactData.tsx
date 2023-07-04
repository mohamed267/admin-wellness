import { Coupon, CouponResponse, Event, EventResponse } from "../types";

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