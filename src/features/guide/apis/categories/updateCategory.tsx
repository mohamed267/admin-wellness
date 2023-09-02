import { axios } from 'lib/axios';
import { useMutation } from '@tanstack/react-query';
import { UpdateCategoryDto } from 'features/events/dtos/categories';
// import { useNotification } from 'stores/notification';

export const useUpdateCategory = () => {
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
    mutationFn: updateCategory,
  });
};

type UpdateCategoryProps = {
  categoryId: string;
  categoryData: UpdateCategoryDto;
};

export const updateCategory = async ({
  categoryId,
  categoryData,
}: UpdateCategoryProps): Promise<any> => {
  console.log('our data singularity => ', categoryId, categoryData);
  const category = await axios.patch(
    `/api/events/category/${categoryId}`,
    categoryData,
  );
  return category;
};
