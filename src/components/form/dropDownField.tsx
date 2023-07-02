import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import FieldWrapper, { FieldWrapperPassThroughProps } from './FieldWrapper'
import { Box, Button, Flex, Menu, MenuButton, MenuItem, MenuList, Stack, Text, useDisclosure } from '@chakra-ui/react'
import { FiEye } from "react-icons/fi"
import {UseFormRegisterReturn} from "react-hook-form"
import If from 'common/If'
import { BsChevronDown } from 'react-icons/bs'
import { FormattedMessage, useIntl } from 'react-intl'

type InputFieldProps = FieldWrapperPassThroughProps  & {
    registration : Partial<UseFormRegisterReturn> , 
    buttonStyle?: any , 
    name: string,
    items?: any,
    setValue?:any,
    defaultValue?:any,
    onChange?: any,
    type?:string
}


const DropDownField = (
   {
    registration , 
    error , 
    label  , 
    items,
    name,
    defaultValue,
    onChange=()=>{},
    setValue=()=>{},
    type="text",
    buttonStyle={} 
   }:InputFieldProps

) => {
  const [ minWidth, setMinWidth ] =  useState<number>(0)
  const buttonRef = useRef<any>(null)
  const toogleButtonRef = useRef<any>(null)
  const int1=  useIntl()
  const [showedValue , setShowValue] = useState("");
  const {isOpen: isShowPasswrd ,onToggle: OnToogleShowPassword  } =  useDisclosure()



  useEffect(()=>{
    const transItem = int1.formatMessage({id: defaultValue});
    buttonRef.current.innerText =  transItem
  } , [defaultValue])


  const handleValueChange = (item: string)=>{
    const transItem = int1.formatMessage({id: item});
    buttonRef.current.innerText =  transItem;
    setValue(name , item)
    onChange({
      [registration.name  as string] : item
    })
  }

  useEffect(()=>{
    if(buttonRef?.current){
      setMinWidth(toogleButtonRef.current.clientWidth)
    }
  } ,  [toogleButtonRef])

  return (
    <FieldWrapper
      error={error}
      label={label}
    >

        <Menu >
            <MenuButton ref={toogleButtonRef}   {...buttonStyle} as={Button} rightIcon={<BsChevronDown />}
             
             >
              <div
              
              ref={buttonRef}
              >
              </div>
              {/* {showedValue} */}

            </MenuButton>
              <MenuList   position="relative" >
                
                {
                  items?.map((item:string , key:any)=>(
                    <MenuItem 
                    minW={minWidth}
                      key={key} 
                      onClick={()=>handleValueChange(item)}
                    >{
                      <FormattedMessage 
                          id={item}
                      />
                      }</MenuItem>

                  ))
                }

              </MenuList>

        </Menu>
      
    </FieldWrapper>
  )
}

export default DropDownField