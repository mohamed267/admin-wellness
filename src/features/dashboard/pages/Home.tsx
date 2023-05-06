import { HStack, Icon, Stack, Text } from "@chakra-ui/react"
import Sec from "assets/icons/navbar/Sec"
import SearchBar from "components/SearchBar"
import StatisticsBoxes from "../components/StatisticsBoxes"
import ProfitChart from "../components/ProfitChart"

const Home = () => {
  return (
    <>
      <Stack spacing="30px" py="30px" >
        <StatisticsBoxes />
        <ProfitChart />
      </Stack>
    
    </>
      



  )
}


export default Home