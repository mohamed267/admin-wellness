import { Text } from '@chakra-ui/react'
import { FormattedNumber } from 'react-intl'

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
            // eslint-disable-next-line react/style-prop-object
            style='currency'
            currency='SAR'
            value={value}
        />
      </Text>
    )
}


export default Price