
import { Flex, Spinner } from "@chakra-ui/react";
import { AdminLoginCredentialsDto, adminLogin, fetchUser, handleUserResponse } from "features/authAdmin";

import { configureAuth  } from "react-query-auth";
import storage from "utils/storage";







const loadUser =  async ()=>{
    if(storage.getToken()){
        const data = await fetchUser();
        return data
    }
    return null
}
const loginFn  = async(data : AdminLoginCredentialsDto )=>{
    const loginResponse  =  await  adminLogin(data)

    const user =  await handleUserResponse(loginResponse)


    return user

}


const registerFn =  async (data : AdminLoginCredentialsDto )=>{

    const user =  await handleUserResponse(data)

    return user
}

const logoutFn = async  ()=>{
    storage.clearToken()
}




export const { useUser, useLogin, useRegister, useLogout } = configureAuth({
    userFn: loadUser,
    loginFn,
    registerFn,
    logoutFn,
});



