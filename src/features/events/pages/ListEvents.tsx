import { Breadcrumb, BreadcrumbItem, Button, HStack, Icon, Stack, Text } from "@chakra-ui/react"
import TableComponent from "components/table/Table"
import { Link } from "react-router-dom"
import { Event } from "../types"

import { eventsColumns } from "../variables/table"
import NewEvent from "assets/icons/event/newEvent"
import { FormattedMessage } from "react-intl"
import StartedTable from "components/startedTable/StartedTable"
import { useEvents } from "../api/getEvents"
import { useEffect, useState } from "react"
import AddCategoryIcon from "assets/icons/category/AddCategoryIcon"
import DefaultButton from "common/Button/DefaultButton"
import AddCityIcon from "assets/icons/city/AddCityIcon"

const ListEvents = () => {
  const  [ pageIndex, setPageIndex ] = useState(1)
  const { data: events } = useEvents({})

  useEffect(()=>{
      if(events?.meta){
        setPageIndex(events.meta.currentPage)
      }
  } , [events])



  return (
    <Stack py='15px'  spacing="10px" >
        <HStack justifyContent="space-between" >
          <Breadcrumb>
            <BreadcrumbItem color="primary.500" >
              <Link to="/events" >
                Events
              </Link>
            </BreadcrumbItem>
          </Breadcrumb>
          <HStack>
            <Link to="/events/new">
                <Button 
                  color="primary.500"
                  borderRadius="31px"
                  fontSize="14px" 
                  py="5px" 
                  bg="white"
                  fontWeight="500"
                  h="31px"
                  iconSpacing="5px"
                  leftIcon={
                    <Icon viewBox="0 0 17 15" width="17" height="15" fill="primary.500" >
                      <NewEvent />
                    </Icon>
                  }
                >
                   <Text           
                      _firstLetter={
                        {
                          textTransform: "capitalize"
                        }
                      }
                      fontSize="14px"
                    >
                      <FormattedMessage  id="newEvent" />
                    </Text>
                </Button>
            </Link>
            <Link to="/events/category/new">
                <Button 
                  color="primary.500"
                  borderRadius="31px"
                  fontSize="14px" 
                  py="5px" 
                  bg="white"
                  fontWeight="500"
                  h="31px"
                  iconSpacing="5px"
                  leftIcon={<Icon viewBox="0 0 17 15" width="17" height="15" fill="primary.500" >
                  <AddCategoryIcon />
                </Icon>}
                >
                  <Text               
                    _firstLetter={
                      {
                        textTransform: "capitalize"
                      }
                    }
                    fontSize="14px"
                  >
                    <FormattedMessage  id="newCategory" />
                  </Text>
                </Button>
            </Link>
            <Link to="/events/city/new">
                <Button 
                  color="primary.500"
                  borderRadius="31px"
                  fontSize="14px" 
                  py="5px" 
                  bg="white"
                  fontWeight="500"
                  h="31px"
                  iconSpacing="5px"
                  leftIcon={<Icon viewBox="0 0 17 15" width="17" height="15" fill="primary.500" >
                  <AddCityIcon />
                </Icon>}
                >
                  <Text               
                    _firstLetter={
                      {
                        textTransform: "capitalize"
                      }
                    }
                    fontSize="14px"
                  >
                    <FormattedMessage  id="newCity" />
                  </Text>
                </Button>
            </Link>

          </HStack>
        </HStack>

       
          
        <TableComponent<Event>
          name="events"
          // name="users"
          // selectRow={navigateOrderDetails}
          data={events?.events ?? []}
          tableColumns={eventsColumns}
          setPageIndex={setPageIndex}
          pageIndex={pageIndex}
          pageCount={events?.meta?.totalPages ?? 1}
          // 
          // searching={setSearch}
          // detailsIcon={true}
        /> 


    </Stack>
  )
}


export default ListEvents