import React from 'react'
import PropTypes from 'prop-types'
import { HStack, Text, useColorModeValue } from '@chakra-ui/react'
import { FormattedDate, FormattedMessage, FormattedNumber, FormattedTime } from 'react-intl'
import If from 'common/If'

type PriceProps = {
    value : number
}


const Price = ({value} : PriceProps) => {
    return (
      <Text 
        textTransform={"capitalize"}
        fontSize='sm' 
        color="gray.600"
      >
        <FormattedNumber 
            style="currency"
            currency='SAR'
            value={value}
        />
      </Text>
    )
}


export default Price