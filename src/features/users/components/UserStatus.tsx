import React, { useEffect  , useState} from 'react'
import PropTypes from 'prop-types'
import { Badge, Flex, Icon, Text } from '@chakra-ui/react'


// icons
import {BsCheck} from "react-icons/bs"
import {SiStatuspal} from "react-icons/si"
import {VscClose} from "react-icons/vsc"
import {TiMediaPause} from "react-icons/ti"
import {BsArrowClockwise} from "react-icons/bs"




const colors:any ={
    active : "green",
    banned : "red" , 
}

const colorSchemas:any ={
    active : "green.500",
    banned : "red.500" , 
}


type StatusType = {
    value : any
}



const UserStatus = (
    {
        value
    }:StatusType
) => {


    const color =  colors[value] ? colors[value] : "white"
    const colorSchema = colorSchemas[value] ? colors[value] : "gray.800"
    return (
        <Flex align='center'>
            <Badge 
                p={"3px"}
                textTransform={"capitalize"}
                fontSize='sm'
                borderRadius="xl"
                colorScheme={colorSchema}
                // fontWeight='700'
                color={color}
                px={2}
            >
                {value}
            </Badge>
        </Flex>
    )
}


export default UserStatus