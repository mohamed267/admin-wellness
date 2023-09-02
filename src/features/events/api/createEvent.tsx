import { axios } from 'lib/axios';
import { useMutation } from '@tanstack/react-query';
import { EventTimesPeriod } from '../types';
import moment from 'moment';
// import { useNotification } from 'stores/notification';

export const useCreateEvent = () => {
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
    mutationFn: createEvent,
  });
};

export const createEvent = async (data: any): Promise<any> => {
  // adding 12 ours to timing to  gurantee  thet date is correcte
  const eventData = {
    ...data,
    periods:
      data?.periods?.map((period: EventTimesPeriod) => ({
        ...period,
        beginsIn: moment(period?.beginsIn)
          .startOf('day')
          .add(12, 'hour')
          .toDate(),
        endsIn: moment(period?.endsIn)
          .add(12, 'hour')
          .toDate(),
      })) ?? [],
  };
  const event = await axios.post(`/api/events`, eventData);
  return event;
};
