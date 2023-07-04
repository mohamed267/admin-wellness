import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { z } from 'zod';
import { Button, Flex, HStack, Stack, Text } from '@chakra-ui/react';
import Form from 'components/form/Form';
import InputField from 'components/form/InputField';
import TextEditorfield from 'components/form/TextEditorfield';
import SelectAsyncFieldComponent from 'components/form/SelectAsyncFieldComponent';
import NumberInputFieldComponent from 'components/form/NumberInputField';
import MultipleImageField from 'components/form/MultipleImageField';
import { Media } from 'features/global';
import MultipleVideoField from 'components/form/MultipleVideoField';
import { FormattedMessage } from 'react-intl';
import CalendarComponent from 'components/calendar/Calendar';
import CalandarRangeField from 'components/form/CalandarRangeField';

import { useNavigate, useParams } from 'react-router-dom';
import { useCreateCoupon } from 'features/events/api/createCoupon';


const schemaCoupon = z.object({
    promoCode: z.string(),
    percentage: z.number(),
});

type ICouponForm  = {
    promoCode: string,
    percentage: number,
}

const CouponForm = () => {
    const navigate = useNavigate()
    const { eventId  } = useParams()
    const { mutate: createCoupon , isLoading: isCreatingCoupon, isSuccess: isCouponCreated } = useCreateCoupon()


    useEffect( ()=>{
        if(isCouponCreated){
            navigate(`/events/${eventId}/coupons`)
        }

    }, [isCouponCreated, navigate, eventId])

    const handleCreateCoupon = async (couponData: any)=>{
        let { percentage  , ...data } = couponData
        console.log("pourcentage  => ", percentage)

        data  = {
            ...data , 
            percentage: percentage / 100,
            eventId
        }
        createCoupon(data)
    }

    return (
        <Form<
            ICouponForm  ,
            typeof schemaCoupon 
        >
            schema={schemaCoupon}
            onSubmit={handleCreateCoupon}>
            {({register , formState, setValue, watch})=>(
                <Stack  
                    spacing="20px"
                >
                    <HStack>
                        <Stack  w="500px"  spacing="20px" >
                            <InputField
                                registration={register('promoCode')}
                                error={formState.errors['promoCode']}     
                                label={"promoCode"}
                                placeholder=""
                                inputStyle={{
                                    variant : "primary" , 
                                    fontSize : "xs" , 
                                    size : "lg",
                                    fontWeight : "normal",
                                }}                          
                            /> 

                            <NumberInputFieldComponent 
                                registration={register('percentage')}
                                error={formState.errors['percentage']}     
                                label={"reduction"}
                                min={0}
                                max={100}
                                nonDouble={true}
                                placeholder=""
                                setValue={setValue}
                                inputStyle={{
                                    variant : "primary" , 
                                    fontSize : "xs" , 
                                    size : "lg",
                                    fontWeight : "normal"
                                }}                          
                            />  
                        </Stack>



                    
                    

                    </HStack>
                
                  

                  


                    <Button
                        variant="primaryFill"
                        w="150px"
                        borderRadius="xl"
                        lineHeight="21px"
                        fontWeight="500"
                        fontSize="18px"
                        type='submit'
                        isLoading={isCreatingCoupon}
                        
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


export default CouponForm