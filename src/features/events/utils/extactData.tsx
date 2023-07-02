import { Event, EventResponse } from "../types";

export const extractEvents = (eventRespose: EventResponse[] ):Event[]=>{

    return (eventRespose?.map((event:EventResponse)=>(
        {
            id: event?.id,
            title: event?.title ?? "",
            createdAt: event?.createdAt ?? "",
            category: event?.category?.name ?? "",
            price: event?.price ?? 0.0,
            status: "pending"
        }
    )) ??[])

}