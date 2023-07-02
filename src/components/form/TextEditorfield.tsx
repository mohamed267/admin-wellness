import React, { PropsWithChildren } from 'react'
import PropTypes from 'prop-types'
import FieldWrapper, { FieldWrapperPassThroughProps } from './FieldWrapper'
import { Box, Icon, Input, InputGroup, InputLeftAddon, InputLeftElement, InputRightAddon, InputRightElement, useDisclosure } from '@chakra-ui/react'
import { FiEye } from "react-icons/fi"
import {UseFormRegisterReturn} from "react-hook-form"
import If from 'common/If'
import { useIntl } from 'react-intl'
import Switcher from 'common/Switcher'
import Editor from "components/Editor/Editor"


type TextEditorfieldProps = FieldWrapperPassThroughProps  & {
    registration : Partial<UseFormRegisterReturn> , 
    inputStyle?: any , 
    defaultValue?:any,
    type?:string,
    inputLeftAddon?:any,
    placeholder?:string,
    outlet?:any,
    [rest:string]: any
}


const TextEditorfield = (
   {
    registration , 
    error , 
    label  , 
    defaultValue,
    placeholder="",
    type="text",
    inputStyle={},
    inputLeftAddon=null ,
    children,
    ...rest
   }:PropsWithChildren<TextEditorfieldProps>

) => {
  const {isOpen: isShowPasswrd ,onToggle: OnToogleShowPassword  } =  useDisclosure()
  const int1 =  useIntl()
  return (
    <FieldWrapper
      error={error}
      label={label}
    >
       <Box   border="1px solid" borderColor="gray.300"   bg="white"  {...rest} borderRadius="30px" px='30px' py="10px" >

          <Editor data={undefined} onChange={()=>{return 0}} holder="editorjs-container" />

       </Box>
      


    </FieldWrapper>
  )
}


export default TextEditorfield