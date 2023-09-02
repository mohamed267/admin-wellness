import { axios } from 'lib/axios';
import { useMutation } from '@tanstack/react-query';
// import { useNotification } from 'stores/notification';

export const useCreateBlog = () => {
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
    mutationFn: createBlog,
  });
};

export const createBlog = async (data: any): Promise<any> => {
  console.log('Blog data add is ', data);
  const Blog = await axios.post(`/api/blogs`, data);
  return Blog;
};
