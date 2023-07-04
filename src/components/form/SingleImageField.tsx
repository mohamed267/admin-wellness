import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import FieldWrapper, { FieldWrapperPassThroughProps } from './FieldWrapper'
import { Avatar, Center, Circle, Flex, Icon, Image, Input, Stack, Text, useToken } from '@chakra-ui/react'
import {UseFormRegisterReturn} from "react-hook-form"


import {AiOutlinePlus} from "react-icons/ai"
import {RiDeleteBin7Fill } from "react-icons/ri"
import { FormattedMessage } from 'react-intl'
import PhotoUploadBox from './PhotoUploadBox'
import If from 'common/If'
import ImageUploadIcon from 'assets/icons/uploads/imageUploadIcon'

type InputFieldProps = FieldWrapperPassThroughProps  & {
    registration : Partial<UseFormRegisterReturn> , 
    inputStyle?: any,
    setValue?: any,
    name?: string,
    imageType: string
}


const SingleImageField = (
   {
    registration , 
    error , 
    label  , 
    inputStyle={},
    setValue=()=>{},
    name="media",
    imageType
   }:InputFieldProps

) => {
    const [ primaryColor , black200 ] =  useToken( "colors"  , ["primary.500" , "black.200" ])
    const addRef = useRef<any>(null);
    const [image , setImage] =useState<any>(null)

    const [file, setFile] = useState<any>(null);

    const addFile = (e: any) => {
        const fileInput = addRef?.current;
        const inputFile = fileInput?.files?.[0] ?? null;
        inputFile && setFile(inputFile);
    }; 
    const handleImageUploaded = (url: string) =>{
        setImage({url})
    }
    const deleteImage = (index:any) =>{
        setImage(null)
    }

    useEffect(()=>{
        setValue(name, image)
    } , [image])



    return (
        <FieldWrapper
            error={error}
            label={label}
        >
            <Flex
                columnGap={{base : 2 , lg : 10}}
                rowGap={{base : 5 , lg : 30}}
                flexWrap="wrap"
                >
                    <If condition={file} >
                        <PhotoUploadBox 
                            file={file} 
                            uploaded={handleImageUploaded}
                            imageType={imageType}
                        />
                    </If>

                    <If condition={image} >
                        <Center
                            w={{base : 50 , lg : 150}}
                            h={{base : 50 , lg : 130}}
                            cursor="pointer"
                            borderRadius="3xl"
                            position={"relative"}
                            
                        >
                            <Image 
                                src={image?.url?? null}
                                h="100%"
                                w="100%"
                                objectFit={"cover"}
                                borderRadius={"xl"}
                            />
                            <Circle position={"absolute"} top={3} left={3}  bg="red.500" borderRadius={"full"}
                                fontSize="xl"
                                color="white"
                                size={8}
                                _hover={{
                                    filter: "brightness(.85)",
                                }}
                                onClick={deleteImage}
                            >
                                <RiDeleteBin7Fill />

                            </Circle>

                        </Center>
                    </If>

                    <If condition={!image} >
                        <Center
                            border="2px solid"
                            borderColor={`${black200} !important`}
                            w={{base : 120 , lg : 150}}
                            h={{base : 120 , lg : 130}}
                            bg="white"
                            borderRadius="xl"
                            cursor={"pointer"}
                            position="relative"
                        >
                            <Input 
                                type={"file"}
                                position="absolute"
                                h="100%"
                                w="100%"
                                opacity={0}
                                cursor="pointer"
                                {...registration}
                                onChange={addFile}
                                multiple={true}
                                ref={addRef}
                            />
                                <Stack alignItems="center" spacing="5" >
                                    <Icon  fill="none"   width="53px" height="53px"  viewBox='0 0 53 53' >
                                        <ImageUploadIcon />
                                    </Icon>

                                </Stack>
                        </Center>

                    </If>

                        


            </Flex>
        </FieldWrapper>
    )
}


export default SingleImageField