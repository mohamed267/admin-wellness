import React, { useEffect  , useState} from 'react'
import PropTypes from 'prop-types'
import { Flex, Icon, Text } from '@chakra-ui/react'


// icons
import {BsCheck} from "react-icons/bs"
import {SiStatuspal} from "react-icons/si"
import {VscClose} from "react-icons/vsc"
import {TiMediaPause} from "react-icons/ti"
import {BsArrowClockwise} from "react-icons/bs"


const icons:any = {
    active : BsCheck,
    rejected : VscClose,
    pending : TiMediaPause,
    essay : BsArrowClockwise
}

const colors:any ={
    active : "green.500",
    rejected : "red.500" , 
    pending : "orange.500",
    essay : "blue.500"
}


type StatusType = {
    value : any
}



const Status = (
    {
        value
    }:StatusType
) => {


    const icon = icons[value] ?  icons[value] : SiStatuspal
    const color =  colors[value] ? colors[value] : "black"
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
                color="gray.900"
                px={2}
            >
                {value}
            </Text>
        </Flex>
    )
}

Status.propTypes = {}

export default Status