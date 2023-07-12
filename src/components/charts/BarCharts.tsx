import ReactApexChart from 'react-apexcharts';
import { Box } from '@chakra-ui/react';

const BarCharts = ({ categories, data }: { categories: any[]; data: any }) => {
  return (
    <Box h="100%">
      <ReactApexChart
        options={{
          xaxis: {
            categories,
            labels: {
              show: true,
              style: {
                colors: '#A3AED0',
                fontSize: '14px',
                fontWeight: '500',
              },
            },
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
          },
          chart: {
            stacked: true,
            toolbar: {
              show: false,
            },
          },
          tooltip: {
            style: {
              fontSize: '12px',
            },
            theme: 'dark',
          },

          yaxis: {
            show: false,
            labels: {
              show: false,
              style: {
                colors: '#A3AED0',
                fontSize: '14px',
                fontWeight: '500',
              },
            },
          },
          grid: {
            borderColor: 'rgba(163, 174, 208, 0.3)',
            show: false,
            yaxis: {
              lines: {
                show: true,
              },
            },
            xaxis: {
              lines: {
                show: false,
              },
            },
          },
          fill: {
            type: 'solid',
            colors: ['#5E37FF', '#6AD2FF'],
          },
          legend: {
            show: false,
          },
          colors: ['#5E37FF', '#6AD2FF'],
          dataLabels: {
            enabled: false,
          },
          plotOptions: {
            bar: {
              borderRadius: 10,
              columnWidth: '30px',
            },
          },
        }}
        series={data}
        // type='line'
        type="bar"
        width={'100%'}
        height={320}
      />
    </Box>
  );
};

export default BarCharts;
