import { Button, Flex, Heading, PinInputField, Stack } from "@chakra-ui/react"
import { z } from "zod";
import InputField from "components/form/InputField";
import Form from "components/form/Form";
import PhoneNumberInputField from "components/form/PhoneNumberField";
import { useLogin } from "lib/auth";

 
const schemaAdminLogin = z.object({
    phoneNumber: z.any(),
    password: z.string()
});

type IAdminLoginForm  = {
    phoneNumber: string,
    password: string
}



const AdminLoginForm = () => {
    
    
    const { mutate: loginAdmin }  =  useLogin()
  

    
    const handleAdminLogin = async (loginData: any)=>{
        loginAdmin(loginData)
    }


    return (
        <Form<
            IAdminLoginForm  ,
            typeof schemaAdminLogin 
        >
            schema={schemaAdminLogin}
            onSubmit={handleAdminLogin}>
            {({register , formState, setValue, watch})=>(
                <Flex  
                    rowGap="30px"
                    bg="white"
                    w="500px"
                    px="40px"
                    py="50px"
                    boxShadow="md"
                    borderRadius="3xl"
                    dir="ltr"
                    flexDirection="column"
                >

                    <Heading fontSize="3xl" >Welcome back!  </Heading>
                    <PhoneNumberInputField 
                        registration={register('phoneNumber')}
                        error={formState.errors['phoneNumber']}    
                        name='phone'
                        setValue={setValue}
                        label={"phone number"}
                        inputStyle={{
                            variant : "auth" , 
                            fontSize : "sm" , 
                            size : "lg",
                            fontWeight : 500
                        }}   
                
                    />
                    
                    <InputField
                        registration={register('password')}
                        error={formState.errors['password']}     
                        label={"Password"}
                        placeholder=""
                        type="password"
                        inputStyle={{
                            variant : "auth" , 
                            fontSize : "xs" , 
                            size : "lg",
                            fontWeight : "normal"
                        }}                          
                    /> 


                    <Button type='submit' variant="primaryFill"  mt="30px" h="50px" fontSize="sm" >
                        Login
                    </Button>
                    
    
                </Flex>
            )}

        </Form>
        
    )
}


export default AdminLoginForm