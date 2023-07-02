import React from 'react'
import PropTypes from 'prop-types'
import FieldWrapper, { FieldWrapperPassThroughProps } from './FieldWrapper'
import { Flex, Icon, Input, InputGroup, InputLeftAddon, InputLeftElement, InputRightElement, PinInput, PinInputField, useDisclosure } from '@chakra-ui/react'
import { FiEye } from "react-icons/fi"
import {UseFormRegisterReturn} from "react-hook-form"
import If from 'common/If'

type InputFieldProps = FieldWrapperPassThroughProps  & {
    registration : Partial<UseFormRegisterReturn> , 
    pinStyle?: any , 
    defaultValue?:any,
    type?:string,
    name?:string , 
    setValue: any,
    onChange?: any
}


const PinField = (
   {
    registration , 
    error , 
    label=""  , 
    defaultValue="",
    type="text",
    name= "",
    setValue=()=>{} , 
    pinStyle={},
    onChange= ()=>{}
   }:InputFieldProps

) => {
  const handleChanges = (value:any)=>{
    setValue(name,  value)
    onChange(value)
  }



  return (
    <FieldWrapper
      error={error}
      label={label}
    >
        <Flex
            justifyContent={"center"}
            gap={4}
            py={5}
            mb={10}
            dir="ltr"
        >
            <PinInput                                       // onChange={handleChangePin}
                {...registration}
                onChange={handleChanges}
                // error={formState.errors['phoneNumber']} 

            >
                <PinInputField  {...pinStyle}/>
                <PinInputField  {...pinStyle}/>
                <PinInputField {...pinStyle}/>
                <PinInputField   {...pinStyle}/>
                <PinInputField  {...pinStyle}/>
                <PinInputField  {...pinStyle}/>
            </PinInput>
        </Flex>
            
        
    </FieldWrapper>
  )
}


export default PinField