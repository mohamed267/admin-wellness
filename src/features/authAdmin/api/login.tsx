import { axios } from 'lib/axios';
import { useMutation } from 'react-query';
// import { useNotification } from 'stores/notification';
import storage from 'utils/storage';
import { AuthUser } from '../types';

type AuthResponse = any;

export type LoginCredentialdsDTO = {
  phoneNumber: string;
  password: string;
};

export const useAdminLogin = () => {
  // const { addNotification } = useNotification();

  return useMutation({
    onMutate: async () => {
      // const reparationReq = new FormRequestBuilder(newReparation).getFormData()
      // // const reparation = await createReparation(reparationReq);
      // const reparation = await queryClient.setQueryData()
      // return reparation
    },
    // onError: (_, __, context: any) => {
    // if (context?.previousComments) {
    //     queryClient.setQueryData(
    //     ["comments", discussionId],
    //     context.previousComments
    //     );
    // }
    // },
    onSuccess: () => {},
    mutationFn: adminLogin,
  });
};

export const adminLogin = async (data: any): Promise<any> => {
  let adminLoginResponse = {};
  try {
    adminLoginResponse = await axios.post(`/api/auth/login/admin`, data);
  } catch (e: any) {
    console.log('erroe is ', e);
  }

  return adminLoginResponse;
};

export const fetchUser = (): Promise<AuthUser> => {
  return axios.get('/api/users/connected-user');
};

export const refreshAccessToken = async (): Promise<any> => {
  return axios.get('api/auth/refresh_token', {
    withCredentials: true,
  });
};

export const handleUserResponse = async (data: AuthResponse) => {
  const { accessToken } = data;
  if (accessToken) {
    storage.setToken(accessToken);
  }
  if (storage.getToken()) {
    return await fetchUser();
  }
  return {};
};
