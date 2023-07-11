import { ExtractFnReturnType, QueryConfig } from "lib/react-query"
import { useQuery } from "@tanstack/react-query"
import { EventCategory } from "../types"
import { axios } from "lib/axios"
import { Meta } from "features/global"

import { extactEventCategories } from "../utils/extactData"



type getEventCategoriesQueryType = {
    get?: string
}

export const getEventCategories = async  (query: getEventCategoriesQueryType ={}): Promise<EventCategory[]> =>{
     
    const categories = await axios.get("/api/events/categories" , {
        params:{
            ...query
        }
    }) as any ;


    return extactEventCategories(categories)

}

type QueryFnType = typeof getEventCategories;



export type UseUsersOptions = {
    config?: QueryConfig<QueryFnType>,
    query?: getEventCategoriesQueryType,
}


export const useCategories = ( {config , query}: UseUsersOptions ) =>{
    return  useQuery<ExtractFnReturnType<QueryFnType>>({
        queryKey: ["/eventCategories"],
        queryFn: ()=> getEventCategories(query),
        ...config
    })
}