import { ExtractFnReturnType, QueryConfig } from "lib/react-query"
import { useQuery } from "@tanstack/react-query"
import { EventCategory } from "../types"
import { axios } from "lib/axios"
import { Meta } from "features/global"



type searchEventCategoriesQueryType = {
    search?: string
}

export const searchEventCategories = (query: searchEventCategoriesQueryType ={}): Promise<EventCategory> =>{
    return  axios.get("/api/events/categories" , {
        params:{
            ...query
        }
    });

}

type QueryFnType = typeof searchEventCategories;



export type UseUsersOptions = {
    config?: QueryConfig<QueryFnType>,
    query?: searchEventCategoriesQueryType,
}


export const useCategories = ( {config , query}: UseUsersOptions ) =>{
    return  useQuery<ExtractFnReturnType<QueryFnType>>({
        queryKey: ["/eventCategories"],
        queryFn: ()=> searchEventCategories(query),
        ...config
    })
}