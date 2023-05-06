import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Stack, Stat, StatLabel, StatNumber, Text, StatHelpText, StatArrow, Box } from '@chakra-ui/react'
import { FormattedMessage, FormattedNumber } from 'react-intl'
import Checkout from 'assets/icons/stats/checkout'
import Stocks from 'assets/icons/stats/Stocks'
import ServiceProvider from 'assets/icons/stats/ServiceProvider'
import Clients from 'assets/icons/stats/Clients'
import LineCharts from 'components/charts/LineCharts'

const ProfitChart = () => {
  return (
    <Stack spacing="15px"  >
      <Text color="primary.500" textTransform="capitalize" fontWeight="medium" >
        <FormattedMessage  id="profitschart" />
      </Text>

      <Box  bg="white"  borderRadius={"xl"} > 
        <LineCharts 
            categories={['1', '2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '24']}
            data={[{
                name: "High - 2013",
                data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 90, 110, 130]
            }]}
        />

      </Box>



    </Stack>
  )
}


export default ProfitChart