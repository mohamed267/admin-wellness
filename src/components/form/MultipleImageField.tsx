import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import FieldWrapper, { FieldWrapperPassThroughProps } from './FieldWrapper'
import { Avatar, Box, Center, Circle, Flex, Icon, Image, Input, Stack, Text, useToken } from '@chakra-ui/react'
import {UseFormRegisterReturn} from "react-hook-form"


import {AiOutlinePlus} from "react-icons/ai"
import {RiDeleteBin7Fill } from "react-icons/ri"
import { FormattedMessage } from 'react-intl'
import FileUploadBox from './FileUploadBox'
import ImageUploadIcon from 'assets/icons/uploads/imageUploadIcon'

type InputFieldProps = FieldWrapperPassThroughProps  & {
    registration : Partial<UseFormRegisterReturn> , 
    inputStyle?: any,
    setValue?: any,
    defaultValue?: any,
    name?: string,
    imageType: string
}


const MultipleImageField = (
   {
    registration , 
    error , 
    label  , 
    inputStyle={},
    setValue=()=>{},
    defaultValue=[],
    name="media",
    imageType
   }:InputFieldProps

) => {
    const [ primaryColor , black200 ] =  useToken( "colors"  , ["primary.500" , "black.200" ])
    const addRef = useRef<any>(null);
    const [images , setImages] =useState<any>(defaultValue)

    const [files, setFiles] = useState<any>([]);

    const addFiles = (e: any) => {
        const fileInput = addRef?.current;
        const inputFiles = fileInput?.files ?? [];
        inputFiles && setFiles([...files, ...inputFiles]);
    }; 
    const handleImageUploaded = (url: string) =>{
        setImages([
            ...images , 
            {url , type: "image"}
        ])
    }
    const deleteImage = (index:any) =>{
        setImages(images.filter((image:any , key:any)=>(index!==key)))
    }

    useEffect(()=>{
        setValue(name, images)
    } , [images])



    return (
        <FieldWrapper
            error={error}
            label={label}
        >
            <Flex
                py={5}
                columnGap={{base : 2 , lg : 10}}
                rowGap={{base : 5 , lg : 30}}
                flexWrap="wrap"
                >
                    {
                        images.map((image : any , key:any)=>{
                            return(
                                <Center
                                    key={key}
                                    w={{base : 120 , lg : 150}}
                                    h={{base : 120 , lg : 130}}
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
                                        onClick={()=>{deleteImage(key)}}
                                    >
                                        <RiDeleteBin7Fill />

                                    </Circle>

                                </Center>

                            )

                        })
                    } 

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
                            onChange={addFiles}
                            multiple={true}
                            ref={addRef}
                        />
                            <Stack alignItems="center" spacing="5" >
                                <Icon  fill="none"   width="53px" height="53px"  viewBox='0 0 53 53' >
                                    <ImageUploadIcon />
                                </Icon>

                            </Stack>
                    </Center>

            </Flex>
            <Box>
                {files.map((file: any, key: any) => (
                    <FileUploadBox
                        file={file} 
                        key={key} 
                        imageType={imageType}
                        uploaded={handleImageUploaded}
                    />
                ))}
            </Box>
        </FieldWrapper>
    )
}


export default MultipleImageField