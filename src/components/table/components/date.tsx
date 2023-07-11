import { HStack, Text, useColorModeValue } from '@chakra-ui/react'
import { FormattedDate } from 'react-intl'
import If from 'common/If'

type DateProps = {
    value : "string"
}


const DateCell = ({value} : DateProps) => {
    const textColor = useColorModeValue("gray.700" , "white")
    return (
      <Text 
      textTransform={"capitalize"}
      fontSize='sm' 
      color={textColor}
      >
        <If condition={value}>
          <HStack spacing={3} >
            <FormattedDate
              value={value}
              year="numeric"
              month="long"
              day="numeric"
              weekday="long"
            />
            {/* <FormattedTime 
              value={value}
              hour="numeric"

              /> */}
            </HStack>
        </If>
        {/* {
            value
        } */}
      </Text>
    )
}


export default DateCell