import { PropsWithChildren } from 'react'
import FieldWrapper, { FieldWrapperPassThroughProps } from './FieldWrapper'
import { Icon, Input, InputGroup, InputLeftAddon, InputRightElement, useDisclosure } from '@chakra-ui/react'
import { FiEye } from "react-icons/fi"
import { UseFormRegisterReturn } from "react-hook-form"
import If from 'common/If'
import { useIntl } from 'react-intl'


type InputFieldProps = FieldWrapperPassThroughProps  & {
    registration : Partial<UseFormRegisterReturn> , 
    inputStyle?: any , 
    defaultValue?:any,
    type?:string,
    inputLeftAddon?:any,
    placeholder?:string,
    outlet?:any,
    [rest:string]: any
}


const InputField = (
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
   }:PropsWithChildren<InputFieldProps>

) => {
  const {isOpen: isShowPasswrd ,onToggle: OnToogleShowPassword  } =  useDisclosure()
  const int1 =  useIntl()
  return (
    <FieldWrapper
      error={error}
      label={label}
    >
       <InputGroup
         {...inputStyle}
         type="password"
       >
        <If condition={inputLeftAddon}>
          <InputLeftAddon children={inputLeftAddon?.children ??""}/>
        </If>
        <If condition={type=="password"}>
          <InputRightElement 
            cursor={"pointer"}
            onClick={OnToogleShowPassword}
          >
            <Icon 
            fontSize={"sm"}
              as={FiEye}
            />
          
          </InputRightElement>

        </If>


        {
          children
        }

        
        
          

        <Input
          {...registration}
          defaultValue={defaultValue ??  ""}
          type={isShowPasswrd ? "text" : type}
          placeholder={
            placeholder ? int1.formatMessage({id: placeholder}) : ""
          }
          py={2}
          fontSize="sm"
          {...rest}
        />
       </InputGroup>
    </FieldWrapper>
  )
}

InputField.propTypes = {}

export default InputField