import { axios } from 'lib/axios';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
// import { useNotification } from 'stores/notification';

export const useUpdpateGuide = () => {
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
      navigate('/guides');
    },
    mutationFn: editGuide,
  });
};

type UpdpateGuideProps = {
  data: any;
  guideId: string;
};

export const editGuide = async ({
  data,
  guideId,
}: UpdpateGuideProps): Promise<any> => {
  const guide = await axios.patch(`/api/guides/${guideId}`, data);
  return guide;
};
