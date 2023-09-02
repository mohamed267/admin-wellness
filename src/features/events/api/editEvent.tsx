import { axios } from 'lib/axios';
import { useMutation } from '@tanstack/react-query';
import { EventTimesPeriod } from '../types';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
// import { useNotification } from 'stores/notification';

export const useEditEvent = () => {
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
      navigate('/events');
    },
    mutationFn: editEvent,
  });
};

type EditEventProps = {
  data: any;
  eventId: string;
};

export const editEvent = async ({
  data,
  eventId,
}: EditEventProps): Promise<any> => {
  const eventData = {
    ...data,
    periods:
      data?.periods?.map((period: EventTimesPeriod) => ({
        ...period,
        beginsIn: moment(period?.beginsIn)
          .add(12, 'hour')
          .toDate(),
        endsIn: moment(period?.endsIn)
          .add(12, 'hour')
          .toDate(),
      })) ?? [],
  };

  console.log('our periods are ', eventData?.periods);
  const event = await axios.patch(`/api/events/${eventId}`, eventData);
  return event;
};
