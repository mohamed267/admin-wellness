import { Stack, Text, Box } from '@chakra-ui/react';
import { FormattedMessage } from 'react-intl';
import LineCharts from 'components/charts/LineCharts';

const ProfitChart = () => {
  return (
    <Stack spacing="15px">
      <Text color="primary.500" textTransform="capitalize" fontWeight="medium">
        <FormattedMessage id="profitschart" />
      </Text>

      <Box bg="white" borderRadius={'xl'}>
        <LineCharts
          categories={[
            '1',
            '2',
            '4',
            '6',
            '8',
            '10',
            '12',
            '14',
            '16',
            '18',
            '20',
            '24',
          ]}
          data={[
            {
              name: 'High - 2013',
              data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 90, 110, 130],
            },
          ]}
        />
      </Box>
    </Stack>
  );
};

export default ProfitChart;
