import React, { PropsWithChildren, lazy } from 'react'
import PropTypes from 'prop-types'
import FieldWrapper, { FieldWrapperPassThroughProps } from './FieldWrapper'
import { Box} from '@chakra-ui/react'
import { FiEye } from "react-icons/fi"
import {UseFormRegisterReturn} from "react-hook-form"
import If from 'common/If'
import { useIntl } from 'react-intl'
import Editor from "components/Editor/Editor"
import { defaultFn } from 'utils/functions'

// // import ReactScrollbar from "react-scrollbar"
// const ScrollArea = lazy(() => import('react-scrollbar'));


type TextEditorfieldProps = FieldWrapperPassThroughProps  & {
    registration : Partial<UseFormRegisterReturn> , 
    inputStyle?: any , 
    defaultValue?:any,
    type?:string,
    inputLeftAddon?:any,
    placeholder?:string,
    outlet?:any,
    setValue?: any,
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
    setValue= defaultFn,
    inputStyle={},
    

    inputLeftAddon=null ,
    children,
    ...rest
   }:PropsWithChildren<TextEditorfieldProps>

) => {
  const handleChangeEditorContent = (content: any)=>{
    if(registration?.name){
      setValue(registration.name , JSON.stringify(content) )
    }
  }
  return (
    <FieldWrapper
      error={error}
      label={label}
    >
       <Box   border="1px solid" borderColor="gray.300"   bg="white"  overflowY="scroll" {...rest} borderRadius="30px" px='30px' py="10px" >
          {/* <ReactScrollbar 
            speed={0.8}
            horizontal={false}
            style={{
                height:"100%",
            }}
          > */}
            <Editor data={undefined} onChange={handleChangeEditorContent} holder="editorjs-container" />
          {/* </ReactScrollbar> */}
          
       </Box>
      


    </FieldWrapper>
  )
}


export default TextEditorfield