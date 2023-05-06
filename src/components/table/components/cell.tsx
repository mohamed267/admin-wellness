import React from 'react'
import PropTypes from 'prop-types'
import { Text, useColorModeValue } from '@chakra-ui/react'

type CellProps = {
    value : string
}

const Cell = (
    {
        value
    }:CellProps
) => {
    
  return (
    <Text 
    // textTransform={"capitalize"}
    fontSize='sm' 
    px={2}
>
    {value}
</Text>
  )
}


export default Cell