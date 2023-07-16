import { axios } from 'lib/axios';
import { useMutation } from '@tanstack/react-query';
import { UpdateTownDto } from 'features/events/dtos/towns';
// import { useNotification } from 'stores/notification';

export const useUpdateTown = () => {
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
    mutationFn: updateTown,
  });
};

type UpdateTownProp = {
  townId: string;
  eventTownData: UpdateTownDto;
};

export const updateTown = async ({
  townId,
  eventTownData,
}: UpdateTownProp): Promise<any> => {
  console.log('updating her  ', townId, eventTownData);
  const town = await axios.patch(`/api/stores/towns/${townId}`, eventTownData);
  return town;
};
