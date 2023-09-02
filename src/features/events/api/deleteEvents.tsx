import { axios } from 'lib/axios';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
// import { useNotification } from 'stores/notification';

export const useDeleteEvents = () => {
  const navigate = useNavigate();
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
    onSuccess: () => {
      navigate(0);
    },
    mutationFn: deleteEvents,
  });
};

export const deleteEvents = async (ids: string[]): Promise<any> => {
  const events = await axios.delete(`/api/events/many`, {
    params: {
      ids,
    },
  });
  return events;
};
