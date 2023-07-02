import React, { PropsWithChildren, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import FieldWrapper, { FieldWrapperPassThroughProps } from './FieldWrapper'
import { Editable, EditableInput, EditablePreview, Icon, Input, InputGroup, InputLeftAddon, InputLeftElement, InputRightAddon, InputRightElement, Stack, useDisclosure } from '@chakra-ui/react'
import { FiEye } from "react-icons/fi"
import {UseFormRegisterReturn} from "react-hook-form"
import If from 'common/If'
import { useIntl } from 'react-intl'
import { TbRubberStamp } from 'react-icons/tb'
import { defaultFn } from 'utils/functions'
import { debounce } from "lodash"

type InputFieldProps = FieldWrapperPassThroughProps  & {
    registration : Partial<UseFormRegisterReturn> , 
    inputStyle?: any , 
    defaultValue?:any,
    type?:string,
    inputLeftAddon?:any,
    placeholder?:string,
    onChange?: any,
    outlet?:any,
    [rest:string]: any
}


const EditableInputField = (
   {
    registration , 
    error , 
    label  , 
    defaultValue="",
    placeholder="",
    type="text",
    inputStyle={},
    inputLeftAddon=null ,
    onChange= defaultFn,
    children,
    ...rest
   }:PropsWithChildren<InputFieldProps>

) => {
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
    <Stack>

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
              <EditableInput   {...registration}  />
              <EditablePreview  fontSize="3xl"  />
          </Editable>
      </FieldWrapper>

    </Stack>
  )
}


export default EditableInputField