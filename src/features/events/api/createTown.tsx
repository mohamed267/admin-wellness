import { axios } from 'lib/axios';
import { useMutation } from '@tanstack/react-query';
// import { useNotification } from 'stores/notification';

export const useCreateTown = () => {
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
    mutationFn: createTown,
  });
};

export const createTown = async (data: any): Promise<any> => {
  const town = await axios.post(`/api/stores/add-town`, data);
  return town;
};
