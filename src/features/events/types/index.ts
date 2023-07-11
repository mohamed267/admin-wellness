
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

// event categores
export type  EventCategory = {
    id: string,
    name : string,
    image: string, 
    createdAt: string
}



export type  EventCategoryListItem = {
    id: string,
    name : string,
    image: string, 
    createdAt: string,
    consultData: {
        id: string
    }
} 


// evrnt towns 

export type EventTown = {
    id: string,
    name : string,
    image: string, 
    createdAt: string
}



export type  EventTownListItem = {
    id: string,
    name : string,
    image: string, 
    createdAt: string,
    consultData: {
        id: string
    }
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



///category 





export type Category = {
    id: string, 
    name: number,
    cretedAt: string,
    image: string
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

