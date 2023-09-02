import { axios } from 'lib/axios';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
// import { useNotification } from 'stores/notification';

export const useCreateGuideCategory = () => {
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
      navigate('/guides/categories');
    },
    mutationFn: createGuideCategory,
  });
};

export const createGuideCategory = async (data: any): Promise<any> => {
  const guideCategory = await axios.post(`/api/guides/guide-categories`, data);
  return guideCategory;
};
