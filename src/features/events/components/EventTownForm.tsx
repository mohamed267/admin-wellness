import React from 'react'
import PropTypes from 'prop-types'
import { z } from 'zod';
import { Media } from 'features/global';
import { Button, Stack, Text } from '@chakra-ui/react';
import InputField from 'components/form/InputField';
import Form from 'components/form/Form';
import { FormattedMessage } from 'react-intl';
import SingleImageField from 'components/form/SingleImageField';
import { useCreateTown } from '../api/createTown';


const schemaEvent = z.object({
    name: z.any(),
    image: z.any()
});

type IEventForm  = {
    name: string,
    image: Media
}

const EventTownForm = () => {
    const { mutate: createTown , isLoading: isCreatingTown } = useCreateTown()




    const handleAddTown = (townData: any) =>{
        const {  image , ...data } =  townData
        createTown(
            {
                ...data , 
                image:  image?.url ??  ""
            }
        )

    }


    return (
        <Form<
            IEventForm  ,
            typeof schemaEvent 
        >
                schema={schemaEvent}
                onSubmit={handleAddTown}>
                {({register , formState, setValue, watch})=>(
                    <Stack  
                        spacing="20px"
                    >

                        <InputField
                            registration={register('name')}
                            error={formState.errors['name']}     
                            label={"cityName"}
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
                            imageType={"city"}  
                            label={"cityCover"}
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
                            type='submit'
                            
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


export default EventTownForm