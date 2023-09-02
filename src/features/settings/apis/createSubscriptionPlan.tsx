import { axios } from 'lib/axios';
import { useMutation } from '@tanstack/react-query';
import { CreateSubscriptionPlansDto } from '../dtos/createSubscriptionPlans.dto';
// import { useNotification } from 'stores/notification';

export const useCreatePlan = () => {
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
    mutationFn: createPlan,
  });
};

export const createPlan = async (
  data: CreateSubscriptionPlansDto,
): Promise<any> => {
  console.log('our data is  ', data);
  const Plan = await axios.post(`/api/partener-plan`, data);
  return Plan;
};
