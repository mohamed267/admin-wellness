import { axios } from 'lib/axios';
import { useMutation } from '@tanstack/react-query';
// import { useNotification } from 'stores/notification';

export const useDeletePartner = () => {
  // const { addNotification } = useNotification();

  return useMutation({
    onMutate: async () => {
      // const reparationReq = new FormRequestBuilder(newReparation).getFormData()
      // // const reparation = await deleteReparation(reparationReq);
      // const reparation = await queryPartner.setQueryData()
      // return reparation
    },
    onError: (err: any) => {
      console.log('error => ', err);
      // if (context?.previousComments) {
      //     queryPartner.setQueryData(
      //     ["comments", discussionId],
      //     context.previousComments
      //     );
      // }
    },
    onSuccess: () => {},
    mutationFn: deletePartner,
  });
};

export const deletePartner = async (data: any): Promise<any> => {
  const profile = await axios.delete(`/api/partners/${data?.partnerId}`);
  return profile;
};
