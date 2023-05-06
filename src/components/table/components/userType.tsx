import React, { useEffect  , useState} from 'react'
import PropTypes from 'prop-types'
import { Flex, Icon, Text, useColorModeValue } from '@chakra-ui/react'


// icons
import {FaRegUser} from "react-icons/fa"
import {SiStatuspal} from "react-icons/si"
import {MdStorefront} from "react-icons/md"
import {TiMediaPause} from "react-icons/ti"
import {BsArrowClockwise} from "react-icons/bs"


const icons:any = {
  store : MdStorefront  , 
  client : FaRegUser
}

const colors:any ={
    store : "primary.500",
    client : "primary.500"
}


type UserTypeProps = {
    value : "store" | "client"
}



const UserType = (
    {
        value
    }:UserTypeProps
) => {


    const icon = icons[value] ?  icons[value] : SiStatuspal
    const color =   colors[value] ? colors[value] : "black"
    const textColor = useColorModeValue("gray.700" , "white")
    return (
        <Flex align='center'>
            <Icon
                w='24px'
                h='24px'
                me='5px'
                as={
                    icon
                }
                bg={color}
                color='white'
                borderRadius={"full"}
                p={1}
            />
            <Text 
                textTransform={"capitalize"}
                fontSize='sm' 
                fontWeight='700'
                color={textColor}
                px={2}
            >
                {value}
            </Text>
        </Flex>
    )
}


export default UserType