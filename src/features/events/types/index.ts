
export type  Event ={
    id: string,
    title : string,
    createdAt: any,
    category: string,
    price: number,
    // score: number,
    status: "pending" | "active"
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

