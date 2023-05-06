import { Badge, Flex } from '@chakra-ui/react'


// icons




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