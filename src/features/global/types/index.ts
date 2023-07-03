export type Meta  ={
    totalItems: number,
    itemCount: number,
    itemsPerPage: number,
    totalPages: number,
    currentPage: number
}



export type Media = {
    type: string;
    url: string;
}


export type BaseEntity  ={
    id: string
}

export type EventCategory = {
    id: string,
    name: string
}