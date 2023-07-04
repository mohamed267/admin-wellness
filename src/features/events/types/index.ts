
export type  Event ={
    id: string,
    title : string,
    createdAt: any,
    category: string,
    price: number,
    // score: number,
    status: "pending" | "active",
    consultData: {
        id: string, 
        eventTitle: string
    }
}

export type  EventCategory = {
    id: string,
    name : string
} 

export type  EventResponse ={
    id: string,
    title : string,
    createdAt: any,
    category: EventCategory | null,
    price: number,
    // score: number,
    status: "pending" | "active"
}


///coupon 


export type CouponResponse = {
    id: string, 
    percentage: number,
    promoCode: string,
    eventId: string
}


export type Coupon = {
    id: string, 
    percentage: number,
    promoCode: string,
    eventId: string
}

