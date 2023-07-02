import React, { PropsWithChildren, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import FieldWrapper, { FieldWrapperPassThroughProps } from './FieldWrapper'
import { Checkbox, Icon, Input, InputGroup, InputLeftAddon, InputLeftElement, InputRightAddon, InputRightElement, Text, useDisclosure } from '@chakra-ui/react'
import { FiEye } from "react-icons/fi"
import {UseFormRegisterReturn} from "react-hook-form"
import If from 'common/If'
import { FormattedMessage, useIntl } from 'react-intl'


type CheckboxFieldProps = FieldWrapperPassThroughProps  & {
    registration : Partial<UseFormRegisterReturn> , 
    inputStyle?: any , 
    defaultValue?:any,
    setValue?:any,
    name?:string,
    checkboxLabel?:string,
    inputLeftAddon?:any,
    placeholder?:string,
    outlet?:any,
    onChange?:any,
    [rest:string]: any
}


const CheckboxField = (
   {
    registration , 
    error , 
    label  ,
    defaultValue,
    checkboxLabel="",
    setValue=()=>{},
    name="",
    placeholder="",
    type="text",
    inputStyle={},
    inputLeftAddon=null ,
    onChange=()=>{},
    children,
    ...rest
   }:PropsWithChildren<CheckboxFieldProps>

) => {
  const [checked, setChecked ] = useState(false)




  const handleToogleCheckox = () =>{
    const newChecked = !checked
    setChecked(newChecked)
    setValue(name , newChecked )
    onChange(newChecked)
  }


  

  return (
    <FieldWrapper
      error={error}
      label={label}
    >
         <Checkbox  
            onChange={handleToogleCheckox}
            borderColor={ error ? "red.500"  : "gray.500"}
            spacing={3} size="lg" colorScheme={ error ? 'red' : 'green'} 
            checked={checked}
            borderRadius="xl"
            // defaultValue={defaultValue}
          >
            {children}
        </Checkbox>
    </FieldWrapper>
  )
}


export default CheckboxField