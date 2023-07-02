import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Icon,
  Input,
  Select,
  InputGroup,
  InputLeftElement,
  Text,
  MenuGroup,
  MenuButton,
  MenuList,
  MenuItem,
  Menu,
  HStack,
  Center,
  InputRightElement
} from "@chakra-ui/react";
import Flag from "react-country-flag"
import {  UseFormRegisterReturn } from "react-hook-form";
import FieldWrapper, { FieldWrapperPassThroughProps } from "./FieldWrapper";
import { inputStyles } from "lib/theme/components/input";
import usePhoneNumber from "hooks/usePhoneNumber";
import Switcher from "common/Switcher";
import { FormattedMessage } from "react-intl";
import If from "common/If";
import { useFormContext } from "contexts/formContext";


type InputFieldProps = FieldWrapperPassThroughProps  & {
  registration : Partial<UseFormRegisterReturn> , 
  inputStyle?: any , 
  defaultValue?:any , 
  options?: any , 
  country?:any,
  size?:string,
  setValue:any , 
  name:string,
}



export default function PhoneNumberInputField({
  size,
  country,
  options , 
  registration , 
  defaultValue,
  setValue , 
  name,
  error,
  label
}: InputFieldProps) {
  const  {
    number , 
    onCountryChange , 
    onPhoneNumberChange , 
    selectedCountry 
  } =  usePhoneNumber({
    options , 
    country ,
    defaultValue
  })


  useEffect( ()=>{
    setValue(name , number)
  }, [number, setValue , name])

  const { isError } = useFormContext()

  
  

  return (
    <FieldWrapper
      error={error}
      label={label}
    >
      
      <InputGroup 
        size={size} 
        zIndex={800}
      
      >
        <Flex
          w="100%"
        >
          <Switcher 
            Left={InputLeftElement} 
            Right={InputRightElement}
            style={{
              width: 130, 
              h: "100%",
              px: 3
            }}
          >
            <Menu>
              <MenuButton
                type="button"
              >
                <HStack
                >
                  <Text
                    textTransform={'capitalize'}
                  >
                    <If condition={selectedCountry?.name}>
                      <FormattedMessage id={selectedCountry?.name} />
                    </If>
                  </Text> 
                  <Flag 
                    countryCode={selectedCountry?.value || ""}
                    svg
                    cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                    cdnSuffix="svg"
                    title={selectedCountry?.value || ""}
                  />

                </HStack>

              </MenuButton>
              <Box
                position={"relative"}
                bg="red"
              >
                <MenuList
                >

                {options.map((option:any , key: any) => (
                    <MenuItem
                      onClick={()=>{onCountryChange(option)}}
                      key={key}
                      zIndex={3000}
                    >
                      <HStack>
                        <Flag 
                          countryCode={option.value || ""}
                          svg
                          cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                          cdnSuffix="svg"
                          title={option.value || ""}
                        />
                        <Text
                          textTransform={'capitalize'}
                        >
                          <If condition={option?.name}>
                            <FormattedMessage id={option?.name} />
                          </If>
                        </Text>

                      </HStack>
                    </MenuItem>
                  )
                )
                }

                </MenuList>

              </Box>
            </Menu>

          </Switcher>
          <Input
            ps={130}
            {...registration}
            // type="tel"
            value={number}
            onChange={onPhoneNumberChange}
            // variant="auth"
            // border="1px solid"
            variant="auth" 
            {...inputStyles}
            isInvalid
            h={50}
          /> 

        </Flex>
      </InputGroup>
    
    </FieldWrapper>
  );
}

PhoneNumberInputField.defaultProps = {
  options: [
    {value :  "DZ"  , name : "algeria"}  ,  
    // { value : "FR" , name : "france" },
    // { value : "US" , name : "usa" },
    { value : "SA" , name : "saudi" },
  ],
  size: "md" , 
  country : {value :  "DZ"  , name : "algeria"}
  
};
