import React, { PropsWithChildren, useEffect, useState } from 'react'
import FieldWrapper, { FieldWrapperPassThroughProps } from './FieldWrapper'
import {  Flex, useDisclosure, useToken } from '@chakra-ui/react'

import { DateRangePicker  } from 'react-date-range';
import {UseFormRegisterReturn} from "react-hook-form"
import { useIntl } from 'react-intl'

import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import "assets/css/CalendarRange.css";
import { defaultFn } from 'utils/functions';

type InputFieldProps = FieldWrapperPassThroughProps  & {
    registration : Partial<UseFormRegisterReturn> , 
    inputStyle?: any , 
    defaultValue?:any,
    type?:string,
    inputLeftAddon?:any,
    placeholder?:string,
    setValue?: any,
    outlet?:any,
    [rest:string]: any
}


const CalandarRangeField = (
   {
    registration , 
    error , 
    label  , 
    defaultValue,
    placeholder="",
    type="text",
    setValue= defaultFn,
    inputStyle={},
    inputLeftAddon=null ,
    children,
    ...rest
   }:PropsWithChildren<InputFieldProps>

) => {
  const  [primary500 ]  = useToken("colors" , ["primary.500"])
  const [selectionRange,  setSelectionRange ] = useState<any>([{
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  }])
  const int1 =  useIntl()

  const handleChangeRange = (range: any)=>{
    setSelectionRange([range?.selection])
  }

  useEffect(()=>{
    if(registration?.name){
        setValue(registration?.name , selectionRange)
    }
  } , [selectionRange, setValue, registration])

  return (
    <FieldWrapper
      error={error}
      label={label}
    >
        <Flex
            alignItems='center'
            direction='column'
            w='100%'
            maxW='max-content'
            p='20px 15px'
            h='max-content'
            //   {...rest}
        > 

            <DateRangePicker 
                ranges={selectionRange}
                onChange={handleChangeRange}
                rangeColors={[primary500]}
                color={primary500}
            />

        </Flex>

      
    </FieldWrapper>
  )
}


export default CalandarRangeField