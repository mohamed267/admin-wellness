import { Stack } from '@chakra-ui/react';
import StatisticsBoxes from '../components/StatisticsBoxes';
import ProfitChart from '../components/ProfitChart';

const Home = () => {
  return (
    <>
      <Stack spacing="30px" py="30px">
        <StatisticsBoxes />
        <ProfitChart />
      </Stack>
    </>
  );
};

export default Home;
