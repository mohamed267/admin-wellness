import { Breadcrumb, BreadcrumbItem, HStack, Icon, Stack, Text } from "@chakra-ui/react"
import TableComponent from "components/table/Table"
import { Link } from "react-router-dom"
import { Event } from "../types"

import { eventsColumns } from "../variables/table"
import { events } from "../__fakedata/event"
import NewEvent from "assets/icons/event/newEvent"
import { FormattedMessage } from "react-intl"

const ListEvents = () => {
  return (
    <Stack py='15px'  spacing="30px" >
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
                  <HStack py="5px" bg="white" color="primary.500" p="2px" px="15px" borderRadius="3xl"  >
                    <Icon viewBox="0 0 17 15" width="17" height="15" >
                      <NewEvent />

                    </Icon>
                    <Text color="12px"  >
                      <FormattedMessage  id="newEvent" />
                    </Text>
                  </HStack>
              </Link>

          </HStack>
        </HStack>
          

        <Stack 
          bg="white"
          borderRadius="xl"
          spacing={0}
        >

          <HStack
            px="16px"
            py="16px"
            justifyContent="space-between"
          >
            <Text fontSize="14px" color="gray.600" > 1 row selected </Text>

          </HStack>
          <TableComponent<Event>
            // name="users"
            // selectRow={navigateOrderDetails}
            data={events}
            tableColumns={eventsColumns}
            setPageIndex={()=>{}}
            pageIndex={1}
            pageCount={10}
            // searching={setSearch}
            // detailsIcon={true}
          />

        </Stack>

    </Stack>
  )
}


export default ListEvents