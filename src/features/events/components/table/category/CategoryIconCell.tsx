import { Image, Text } from '@chakra-ui/react'
import React from 'react'
import { CellProps } from 'types'

const CategoryIconCell = (
    {
        value
    }:CellProps
) => {
    
  return (
    <Image
        src={value ?? ""} 
        width="50px"
        h="50px"
    />
  )
}


export default CategoryIconCell