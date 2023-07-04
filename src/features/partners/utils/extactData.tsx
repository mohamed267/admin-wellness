import { Partner, PartnerResponse } from "../types";

export const extractPartners = (partnerRespose: PartnerResponse[] ):Partner[]=>{
    let id  = 0
    return (partnerRespose?.map((partner:PartnerResponse , key: any)=>{
        id = id+1
        return(
            {
                id : `id${id}` ,
                fullName: partner?.user ?? "",
                storeName: partner?.storeName ?? "",
                phoneNumber: partner?.phoneNumber ?? "",
            }
        )
    }) ??[])

}