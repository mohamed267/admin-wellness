import { axios } from 'lib/axios';
import { useMutation } from '@tanstack/react-query';
// import { useNotification } from 'stores/notification';

export const useDeleteClient = () => {
  // const { addNotification } = useNotification();

  return useMutation({
    onMutate: async () => {
      // const reparationReq = new FormRequestBuilder(newReparation).getFormData()
      // // const reparation = await deleteReparation(reparationReq);
      // const reparation = await queryClient.setQueryData()
      // return reparation
    },
    onError: (err: any) => {
      console.log('error => ', err);
      // if (context?.previousComments) {
      //     queryClient.setQueryData(
      //     ["comments", discussionId],
      //     context.previousComments
      //     );
      // }
    },
    onSuccess: () => {},
    mutationFn: deleteClient,
  });
};

export const deleteClient = async (data: any): Promise<any> => {
  const profile = await axios.delete(`/api/clients/${data?.clientId}`);
  return profile;
};
