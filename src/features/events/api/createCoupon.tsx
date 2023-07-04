import { axios } from "lib/axios"
import { useMutation } from "@tanstack/react-query"
import { useNotification } from "stores/notification"



export const useCreateCoupon = ()=>{
    const {addNotification} = useNotification()


    
    return useMutation({
        onMutate: async () => {
            
            // const reparationReq = new FormRequestBuilder(newReparation).getFormData()

            // // const reparation = await deleteReparation(reparationReq);

            // const reparation = await queryClient.setQueryData()


            // return reparation

            


        
        },
        onError: (err: any, __, context: any) => {
            console.log("error => ", err)
        // if (context?.previousComments) {
        //     queryClient.setQueryData(
        //     ["comments", discussionId],
        //     context.previousComments
        //     );
        // }
        },
        onSuccess: () => {

        } , 
        mutationFn : createCoupon
    });
}




export const createCoupon  =async (data :any ):Promise<any>  =>{
   
    const coupon =  await   axios.post(
        `/api/event-coupons`,
        data
    )
    return coupon
    
}