import { axios } from 'lib/axios';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
// import { useNotification } from 'stores/notification';

export const useActivateEvents = () => {
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
    mutationFn: activateEvents,
  });
};

export const activateEvents = async (ids: string[]): Promise<any> => {
  const events = await axios.patch(`/api/events/many`, {
    events:
      ids?.map((id: string) => ({
        id,
        data: {
          status: 'active',
        },
      })) ?? [],
  } as any);
  return events;
};
