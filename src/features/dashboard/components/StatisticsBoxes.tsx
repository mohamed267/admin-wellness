import { Flex, Stack, Stat, StatLabel, StatNumber, Text, StatHelpText, StatArrow, Box } from '@chakra-ui/react'
import { FormattedMessage, FormattedNumber } from 'react-intl'
import Checkout from 'assets/icons/stats/checkout'
import Stocks from 'assets/icons/stats/Stocks'
import ServiceProvider from 'assets/icons/stats/ServiceProvider'
import Clients from 'assets/icons/stats/Clients'

const StatisticsBoxes = () => {
  return (
    <Stack spacing="15px" >
      <Text color="primary.500" textTransform="capitalize" fontWeight="medium" >
        <FormattedMessage  id="overview" />
      </Text>

      <Flex gap="30px" justifyContent="space-between"  >

        {/* tickets solds */}
        <Stat
          bg="white"
          maxW="20%"
          p="20px"
          borderRadius="xl"
          boxShadow="md"
        >
          <Flex 
            alignItems="start"
            gap="20px"
            justifyContent="space-between"
          >
            <Stack spacing={"3px"} >
              <StatLabel color="gray.600" >
                <FormattedMessage id="soldtikets"  />
              </StatLabel>
              <StatNumber color="blue.900"  fontSize="40px" >
                <FormattedNumber notation="compact"  value={2000000} />
              </StatNumber>
              <StatHelpText>
                <StatArrow type='increase' />
                23.36%
              </StatHelpText>
            </Stack>
            <Box mt="10px" >
                <Checkout />
            </Box>
            
          </Flex>
        </Stat>

        {/* all profit */}
        <Stat
          bg="white"
          maxW="20%"
          p="20px"
          borderRadius="xl"
          boxShadow="md"
        >
          <Flex 
            alignItems="start"
            gap="20px"
            justifyContent="space-between"
          >
            <Stack spacing={"3px"} >
              <StatLabel color="gray.600" >
                <FormattedMessage id="totalprofit"  />
              </StatLabel>
              <StatNumber color="blue.900"  fontSize="40px" >
                <FormattedNumber 
                
                // eslint-disable-next-line react/style-prop-object
                style='currency' currency="USD" notation="compact"  value={2000000} />
              </StatNumber>
              <StatHelpText>
                <StatArrow type='decrease' />
                23.36%
              </StatHelpText>
            </Stack>
            <Box mt="10px" >
                <Stocks />
            </Box>
            
          </Flex>
        </Stat>

        {/* new service providers */}

        <Stat
          bg="white"
          maxW="20%"
          p="20px"
          borderRadius="xl"
          boxShadow="md"
        >
          <Flex 
            alignItems="start"
            gap="20px"
            justifyContent="space-between"
          >
            <Stack spacing={"3px"} >
              <StatLabel color="gray.600" >
                <FormattedMessage id="newServiceProviders"  />
              </StatLabel>
              <StatNumber color="blue.900"  fontSize="40px" >
                <FormattedNumber  notation="compact"  value={20000} />
              </StatNumber>
              <StatHelpText>
                <StatArrow type='decrease' />
                23.36%
              </StatHelpText>
            </Stack>
            <Box mt="10px" >
                <ServiceProvider />
            </Box>
            
          </Flex>
        </Stat>

          {/* Clients */}

          <Stat
          bg="white"
          maxW="20%"
          p="20px"
          borderRadius="xl"
          boxShadow="md"
        >
          <Flex 
            alignItems="start"
            gap="20px"
            justifyContent="space-between"
          >
            <Stack spacing={"3px"} >
              <StatLabel color="gray.600" >
                <FormattedMessage id="newclients"  />
              </StatLabel>
              <StatNumber color="blue.900"  fontSize="40px" >
                <FormattedNumber  notation="compact"  value={20000} />
              </StatNumber>
              <StatHelpText>
                <StatArrow type='decrease' />
                23.36%
              </StatHelpText>
            </Stack>
            <Box mt="10px" >
                <Clients />
            </Box>
            
          </Flex>
        </Stat>

      </Flex>

    </Stack>
  )
}


export default StatisticsBoxes