import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { z } from 'zod';
import { Media } from 'features/global';
import { Button, Stack, Text } from '@chakra-ui/react';
import InputField from 'components/form/InputField';
import Form from 'components/form/Form';
import { FormattedMessage } from 'react-intl';
import SingleImageField from 'components/form/SingleImageField';
import { useCreateCategory } from '../api/createCategory';
import { useNavigate } from 'react-router-dom';


const schemaEvent = z.object({
    name: z.string(),
    image: z.any()
});

type IEventForm  = {
    name: string,
    image: Media
}

const EventCategoryForm = () => {
    const navigate =  useNavigate()
    const { mutate: createCategory , isLoading: isCreatingCategory , isSuccess: isCategoryCreated } = useCreateCategory()


    const handleAddCategory = (categoryData: any) =>{
        const {  image , ...data } =  categoryData
        createCategory(
            {
                ...data , 
                image:  image?.url ??  ""
            }
        )

    }

    useEffect(()=>{
        if(isCategoryCreated){
            navigate("/events/category")
        }
    } , [isCategoryCreated, navigate])


    return (
        <Form<
            IEventForm  ,
            typeof schemaEvent 
        >
                schema={schemaEvent}
                onSubmit={handleAddCategory}>
                {({register , formState, setValue, watch})=>(
                    <Stack  
                        spacing="20px"
                    >

                        <InputField
                            registration={register('name')}
                            error={formState.errors['name']}     
                            label={"categoryName"}
                            placeholder=""
                            inputStyle={{
                                variant : "primary" , 
                                fontSize : "xs" , 
                                size : "lg",
                                fontWeight : "normal",
                                w: "600px"
                            }}                          
                        /> 

                        <SingleImageField 
                            registration={register('image')}
                            setValue={setValue}
                            name={"image"}
                            imageType={"events"}  
                            label={"categoryIcon"}
                            inputStyle={{
                                variant : "primary" , 
                                fontSize : "sm" , 
                                size : "lg",
                                fontWeight : 600,
                            }}        
                        />

                        

                    
                    

                    


                        <Button
                            variant="primaryFill"
                            w="150px"
                            borderRadius="xl"
                            lineHeight="21px"
                            fontWeight="500"
                            fontSize="18px"
                            type="submit"
                            isLoading={isCreatingCategory}
                            
                        >
                            <Text  
                                _firstLetter={{
                                    textTransform:"capitalize"
                                }}
                            >
                                <FormattedMessage id="add" />
                            </Text>

                        </Button>
                        
                        

                    </Stack>
                )}

            </Form>
    )
}

EventCategoryForm.propTypes = {}

export default EventCategoryForm