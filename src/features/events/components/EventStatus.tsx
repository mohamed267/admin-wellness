import React, { useEffect  , useState} from 'react'
import PropTypes from 'prop-types'
import { Badge, Flex, Icon, Text } from '@chakra-ui/react'




const colors:any ={
    active : "green",
    pending : "orange" , 
}

const colorSchemas:any ={
    active : "green.500",
    pending : "orange.500" , 
}


type StatusType = {
    value : any
}



const EventStatus = (
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


export default EventStatus