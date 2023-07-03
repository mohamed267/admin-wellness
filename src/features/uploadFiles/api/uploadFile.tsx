import { axios } from "lib/axios"
import { useMutation } from "@tanstack/react-query"
import { useNotification } from "stores/notification"





export const useUploadFile= ()=>{
    const {addNotification} = useNotification()


    
    return useMutation({
        onMutate: async () => {
            
            // const reparationReq = new FormRequestBuilder(newReparation).getFormData()

            // // const reparation = await createReparation(reparationReq);

            // const reparation = await queryClient.setQueryData()


            // return reparation

            


        
        },
        // onError: (_, __, context: any) => {
        // if (context?.previousComments) {
        //     queryClient.setQueryData(
        //     ["comments", discussionId],
        //     context.previousComments
        //     );
        // }
        // },
        onSuccess: () => {

        } , 
        mutationFn : UploadFile
    });
}




export const UploadFile  =async (data :any ):Promise<any>  =>{
    const profile =  await   axios.post(
        `/api/images/upload/${data.fileType}`, 
        data.data, 
        {
            onUploadProgress: function (progressEvent) {
                const percentCompleted = Math.round(
                    (progressEvent.loaded * 100) / (progressEvent?.total ?? 10000)
                    );
              data.setCompleteProgress(percentCompleted);
            },
        })

    
    return profile
    
}