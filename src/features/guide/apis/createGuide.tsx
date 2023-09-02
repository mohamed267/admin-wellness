import { axios } from 'lib/axios';
import { useMutation } from '@tanstack/react-query';
// import { useNotification } from 'stores/notification';

export const useCreateGuide = () => {
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
    mutationFn: createGuide,
  });
};

export const createGuide = async (guideData: any): Promise<any> => {
  // adding 12 ours to timing to  gurantee  thet date is correcte
  const guide = await axios.post(`/api/guides`, guideData);
  return guide;
};
