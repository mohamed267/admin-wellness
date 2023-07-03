import React from 'react'
import PropTypes from 'prop-types'
import { z } from 'zod';
import { Button, Flex, HStack, Stack, Text } from '@chakra-ui/react';
import Form from 'components/form/Form';
import InputField from 'components/form/InputField';
import TextEditorfield from 'components/form/TextEditorfield';
import SelectAsyncFieldComponent from 'components/form/SelectAsyncFieldComponent';
import { searchEventCategories } from 'features/global/api/searchEventCategories';
import { searchTowns } from 'features/global/api/searchTowns';
import NumberInputFieldComponent from 'components/form/NumberInputField';
import MultipleImageField from 'components/form/MultipleImageField';
import { Media } from 'features/global';
import MultipleVideoField from 'components/form/MultipleVideoField';
import { FormattedMessage } from 'react-intl';

const schemaEvent = z.object({
    title: z.any(),
    description: z.any(),
    category: z.string(),
    town: z.string(),
    price: z.string(),
    images: z.any() ,
    videos: z.any(),
});

type IEventForm  = {
    title: string,
    description: any,
    category: string,
    town: string,
    price: string,
    images: Media[],
    videos: Media[]
    
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

                    <HStack
                        justifyContent="space-between"
                        columnGap="10px"
                    >
                        <SelectAsyncFieldComponent     
                            registration={register("category")}
                            error={formState.errors["category"] as any}
                            label={"category"}
                            loadOptions={(search: string)=>searchEventCategories(search ? {search} : {})}
                            optionValue={"id"}
                            optionLabel={"name"}
                            name={"category"}
                            setValue={setValue}
                            controlStyles={{
                                minH: "50px",
                                bg: "white",
                                borderRadius: "xl",
                                borderColor: "gray.500",
                            }}                            
                        />

                        <SelectAsyncFieldComponent     
                            registration={register("town")}
                            error={formState.errors["town"] as any}
                            label={"city"}
                            loadOptions={(town: string)=>searchTowns(town ? {town} : {})}
                            optionValue={"id"}
                            optionLabel={"name"}
                            name={"town"}
                            setValue={setValue}
                            controlStyles={{
                                minH: "50px",
                                bg: "white",
                                borderRadius: "xl",
                                borderColor: "gray.500",
                            }}                            
                        />

                        <NumberInputFieldComponent 
                            registration={register('price')}
                            error={formState.errors['price']}     
                            label={"price"}
                            placeholder=""
                            inputStyle={{
                                variant : "primary" , 
                                fontSize : "xs" , 
                                size : "lg",
                                fontWeight : "normal"
                            }}                          
                        />  



                    </HStack>

                    <MultipleImageField 
                        registration={register('images')}
                        setValue={setValue}
                        defaultValue={[]}
                        name={"images"}
                        imageType={"events"}  
                        label={"images"}
                        inputStyle={{
                            variant : "auth" , 
                            fontSize : "sm" , 
                            size : "lg",
                            fontWeight : 600,
                        }}        
                    />

                    <MultipleVideoField 
                        registration={register('videos')}
                        setValue={setValue}
                        defaultValue={[]}
                        name={"videos"}
                        videoType={"events"}  
                        label={"videos"}
                        inputStyle={{
                            variant : "auth" , 
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

EventForm.propTypes = {}

export default EventForm