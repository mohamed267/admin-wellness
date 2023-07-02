import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import FieldWrapper, { FieldWrapperPassThroughProps } from './FieldWrapper'
import { SocialLinks } from 'social-links';
import { Box, Button, Center, Flex, Input, InputGroup, InputLeftAddon, InputLeftElement, InputRightElement, Text, useDisclosure } from '@chakra-ui/react'
import { FiEye } from "react-icons/fi"
import {UseFormRegisterReturn} from "react-hook-form"
import If from 'common/If'
import { FormattedMessage, useIntl } from 'react-intl'
import Switcher from 'common/Switcher'

import { AiOutlineClose } from "react-icons/ai"
import SocialMediaAccount from 'components/SocialMedia/SocialMediaAccount';
import { getSocialMediaName } from 'utils/functions';


const socialLinks = new SocialLinks();


type SocialLinkFieldProps = FieldWrapperPassThroughProps  & {
    registration : Partial<UseFormRegisterReturn> , 
    inputStyle?: any , 
    defaultValue?:any,
    type?:string,
    inputLeftAddon?:any,
    placeholder?:string,
    name?: string, 
    setValue?: any
}





const SocialLinkField = (
   {
    registration , 
    error , 
    label  , 
    defaultValue=[],
    placeholder="",
    type="text",
    inputStyle={},
    inputLeftAddon=null,
    name="", 
    setValue=()=>{}
   } : SocialLinkFieldProps
) => {
  const [links , setLinks  ] = useState<any>([])
  const inputRef  = useRef<any>(null)

  
  useEffect(()=>{
    if(name){
        setValue(name , links)
    }
  } , [links])

//   useEffect(()=>{
//     if(defaultValue){
//         setValue(defaultValue)
//     }
//   } , [defaultValue])


  const int1 =  useIntl()
  const addLink = () => {
    let  url = inputRef?.current?.value
    if(url.includes("web.")){
        url = url.replace("web.", "");
    }
    const account  = url && socialLinks.detectProfile(url)

    if(account){
        setLinks([
            ...links , {
            url, 
            name: account
        }])

    }

    inputRef.current.value = ""

  }

  const deleteLink = (index: any) => {

    const snapLinks  = links.filter((link:any , key:any)=>{
        return ( key !== index)
    })  

    setLinks(snapLinks)

  }





  return (
    <FieldWrapper
      error={error}
      label={label}
    >
        <Box dir="ltr" maxW="100%" >
            <InputGroup
                {...inputStyle} 
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
                    <Button
                        variant={"primaryFill"}
                        size="sm"
                        onClick={addLink}
                    >
                        <FormattedMessage id="addLink" />
                    </Button>
                    
                </Switcher>
                <Input
                    ref={inputRef}
                    pl={130}
                    variant="auth"
                    placeholder={"https://"}
                    py={2}
                    fontSize="sm"
                />
            </InputGroup>
            <Flex py={5} gap={3} flexWrap="wrap" maxW={{base: "100%", md: "500px"}} >
                {
                    links?.map((link: any, key: any)=>{
                        return (
                            <SocialMediaAccount type={link?.name} account={getSocialMediaName(link?.url) }>
                                <Center 
                                    bg="red.500" 
                                    position="absolute"
                                    borderRadius="full"
                                    top={"-8px"}
                                    left="-8px"
                                    fontSize="md"
                                    p={1}
                                    onClick={()=>deleteLink(key)}
                                >
                                    <AiOutlineClose  fill='#fff'  />
                                </Center>
                                

                            </SocialMediaAccount>
                           
                            // <HStack
                            //     bg={"gray.200"}
                            //     w={"65px"}
                            //     p={1}
                            //     borderRadius="xl"
                            //     justifyContent={"space-between"}
                            // >
                            //     <Icon cursor={"pointer"} fontSize="lg" 
                            //         onClick={()=>deleteLink(key)}
                            //     >
                            //         <AiOutlineClose />
                            //     </Icon>
                            //     <Icon fontSize={"22px"}  color="primary.500">
                            //         {icons[link?.name]}
                            //     </Icon>
                            
                            // </HStack>
                        )
                    })
                }
            </Flex>

        </Box>


    </FieldWrapper>
  )
}


export default SocialLinkField


