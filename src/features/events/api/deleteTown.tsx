import { axios } from "lib/axios"
import { useMutation } from "@tanstack/react-query"
import { useNotification } from "stores/notification"



export const useDeleteTown= ()=>{
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
        mutationFn : deleteTown
    });
}




export const deleteTown  =async (data :any ):Promise<any>  =>{
   
    const town =  await   axios.delete(
        `/api/stores/delete-town/${data?.townId}`
    )
    return town
    
}