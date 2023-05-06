import ReactApexChart from 'react-apexcharts';
import { Box } from '@chakra-ui/react';



const LineCharts = ({categories, data}: { categories: any[]; data: any }) => {



    return (
        <Box  h='100%' >
            <ReactApexChart 
                options={{
                    chart: {
                        toolbar: {
                            show: false
                        },
                        dropShadow: {
                            enabled: true,
                            top: 13,
                            left: 0,
                            blur: 10,
                            opacity: 0.1,
                            color: '#4318FF'
                        }
                    },
                    colors: [ '#00A18E', '#39B8FF' ],
                    markers: {
                        size: 0,
                        colors: 'white',
                        strokeColors: '#00A18E',
                        strokeWidth: 3,
                        strokeOpacity: 0.9,
                        strokeDashArray: 0,
                        fillOpacity: 1,
                        discrete: [],
                        shape: 'circle',
                        radius: 2,
                        offsetX: 0,
                        offsetY: 0,
                        showNullDataPoints: true
                    },               
                    tooltip: {
                        theme: 'dark'
                    },
                    dataLabels: {
                        enabled: false
                    },      
                    stroke: {
                        curve: 'smooth',
                    }, 
                    series: [{
                        name: 'sales',
                        data: [30,40,35,50,49,60,70,91,125]
                    }],
                    xaxis: {
                        // type: 'numeric',
                        categories,
                        labels: {
                            style: {
                                colors: '#A3AED0',
                                fontSize: '12px',
                                fontWeight: '500'
                            }
                        },
                        axisBorder: {
                            show: false
                        },
                        axisTicks: {
                            show: false
                        }
                    },
                    yaxis: {
                        show: true
                    },
                    grid: {
                        show: false,
                    },

                }}
                series={data}
                type='line'
                width={"100%"} height={320}
            />
        </Box>
    )
}


export default LineCharts


