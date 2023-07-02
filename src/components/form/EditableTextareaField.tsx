import React, { PropsWithChildren } from 'react'
import PropTypes from 'prop-types'
import FieldWrapper, { FieldWrapperPassThroughProps } from './FieldWrapper'
import { Editable, EditableInput, EditablePreview, EditableTextarea, Icon, Input, InputGroup, InputLeftAddon, InputLeftElement, InputRightAddon, InputRightElement, Stack, useDisclosure } from '@chakra-ui/react'
import { FiEye } from "react-icons/fi"
import {UseFormRegisterReturn} from "react-hook-form"
import If from 'common/If'
import { useIntl } from 'react-intl'
import { debounce } from 'lodash'
import { defaultFn } from 'utils/functions'


type InputFieldProps = FieldWrapperPassThroughProps  & {
    registration : Partial<UseFormRegisterReturn> , 
    inputStyle?: any , 
    defaultValue?:any,
    type?:string,
    onChange?:any,
    inputLeftAddon?:any,
    placeholder?:string,
    outlet?:any,
    textStyle?: any,
    [rest:string]: any
}


const EditableTextareaField = (
   {
    registration , 
    error , 
    label  , 
    defaultValue="",
    placeholder="",
    onChange=defaultFn,
    type="text",
    inputStyle={},
    textStyle={},
    inputLeftAddon=null ,
    children,
    ...rest
   }:PropsWithChildren<InputFieldProps>

) => {
  const {isOpen: isShowPasswrd ,onToggle: OnToogleShowPassword  } =  useDisclosure()
  const int1 =  useIntl()

  const handleChange = (value: string) =>{
    debounce(
      onChange({
         [registration.name as any]: value
        })
      ,
      400
    )
  }
  return (
    <FieldWrapper
        error={error}
        label={label}
    >

        <Editable          
            placeholder={
                placeholder ? int1.formatMessage({id: placeholder}) : ""
            }
            py={2}
            fontSize="sm"
            {...rest}
            onChange={handleChange}
            defaultValue={defaultValue}
        >
            <EditableTextarea   {...registration}  />
            <EditablePreview  fontSize="3xl" {...textStyle}  />
        </Editable>
    </FieldWrapper>

  )
}


export default EditableTextareaField