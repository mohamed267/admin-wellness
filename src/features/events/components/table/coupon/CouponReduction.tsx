import { Text } from '@chakra-ui/react'
import React from 'react'
import { CellProps } from 'types'

const CouponReductionCell = (
    {
        value
    }:CellProps
) => {
    
  return (
    <Text 
        fontSize='14px' 
        lineHeight="21px"
        color="gray.800"
        maxW="200px"
    >
        {(Number(value) ?? 0)*100}%
    </Text>
  )
}


export default CouponReductionCell