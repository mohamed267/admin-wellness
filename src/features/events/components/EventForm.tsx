import React from 'react'
import PropTypes from 'prop-types'
import { z } from 'zod';
import { Flex, Stack } from '@chakra-ui/react';
import Form from 'components/form/Form';
import InputField from 'components/form/InputField';
import TextEditorfield from 'components/form/TextEditorfield';

const schemaEvent = z.object({
    title: z.any(),
    description: z.any()
});

type IEventForm  = {
    title: string,
    description: any
    
}

const EventForm = () => {

    const handleCreateEvent = async (event: any)=>{
        event.preventDefault()


    }

    return (
        <Form<
            IEventForm  ,
            typeof schemaEvent 
        >
            schema={schemaEvent}
            onSubmit={handleCreateEvent}>
            {({register , formState, setValue, watch})=>(
                <Stack  
                    spacing="20px"
                >

                    <InputField
                        registration={register('title')}
                        error={formState.errors['title']}     
                        label={"eventTilte"}
                        placeholder=""
                        inputStyle={{
                            variant : "primary" , 
                            fontSize : "xs" , 
                            size : "lg",
                            fontWeight : "normal",
                            w: "600px"
                        }}                          
                    /> 

                    <TextEditorfield 
                        registration={register('description')}
                        // error={formState.errors['description']}     
                        label={"description"}
                        placeholder=""
                        w="100%"
                        h="300px"   
                    />
                    

                </Stack>
            )}

        </Form>
    )
}

EventForm.propTypes = {}

export default EventForm