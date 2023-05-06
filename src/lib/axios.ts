import Axios, { AxiosRequestConfig } from "axios"
import { Api_URL } from "config"
import storage from "utils/storage"


export const axiosApiInstance  = Axios.create({
    baseURL : Api_URL,
    // maxBodyLength: Infinity,
    withCredentials: true
    // xsrfCookieName:"XSRF-TOKEN",
    // xsrfHeaderName: "X-XSRF-TOKEN"
      
})



function authRequestInterceptor(config: AxiosRequestConfig): any {
    if(config){
        config.headers = {
            ...config.headers , 
            Accept : 'application/json' ,    
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true
        }


        if(storage.getToken()){
            config.headers.authorization = `Bearer ${storage.getToken()}`
        }
    }
    return config;
}

axiosApiInstance.interceptors.request.use(authRequestInterceptor)




axiosApiInstance.interceptors.response.use(
    (response) => {
        return response.data;
    },
    async (error: Error) => {
        // const originalRequest = error.config;

        // if (error?.response?.status === 401 && !originalRequest._retry) {
        //     originalRequest._retry = true;
        //     console.log("org resuest " ,originalRequest)
        //     const data = await refreshAccessToken();
        //     handleUserResponse(data)   
            
        //     originalRequest["headers"]["Authorization"] = 'Bearer ' + data?.accessToken;
            
        //     return axiosApiInstance(originalRequest)
        // } else {
        // }
        return Promise.reject(error);
    }
    
);

export const axios = axiosApiInstance;