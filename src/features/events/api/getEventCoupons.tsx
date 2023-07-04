import { ExtractFnReturnType, QueryConfig } from "lib/react-query"
import { Coupon, CouponResponse } from "../types"
import { axios } from "lib/axios"
import { Meta } from "features/global"
import { useQuery } from "@tanstack/react-query"
import { extractCoupons } from "../utils/extactData"


type EventCouponResponseProps = {meta: Meta , coupons: CouponResponse[]}
type EventCouponProps = {meta: Meta , coupons: Coupon[]}
type getEventCouponsQueryType = {
    eventId?: string
}



export const getEventCoupons = async (query:getEventCouponsQueryType ): Promise<EventCouponProps> => {
  
  
  const eventCouponsResponse = await axios.get(
    "/api/event-coupons" , 
    {
      params:{
            // ...query
        }
    }
  
  ) as EventCouponResponseProps
  const coupons  = extractCoupons(eventCouponsResponse?.coupons as CouponResponse[])


  return {meta :eventCouponsResponse?.meta ,  coupons};
}

type QueryFnType = typeof getEventCoupons;

export type UseUsersOptions = {
  config?: QueryConfig<QueryFnType>,
  query?:getEventCouponsQueryType
}

export const useEventCoupons = ({ config , query }: UseUsersOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ['eventCoupons'],
    queryFn: () => getEventCoupons(query ?? {}),
    ...config
  })
}
