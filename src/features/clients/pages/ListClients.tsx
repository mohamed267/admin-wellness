import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Breadcrumb, BreadcrumbItem, HStack, Stack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import CustomBreadcrumb from 'components/CustomBreadcrumb/CustomBreadcrumb'
import { useClients } from '../api/getClients'
import TableComponent from 'components/table/Table'
import { Client } from '../types'
import { clientsColumns } from '../variables/table'

const ListClients = () => {
  const  [ pageIndex, setPageIndex ] = useState(1)
  const { data: clients } = useClients({})




  const breadItems = [
    {
      name:  <FormattedMessage id="users" />
    },
    {
      name:   <FormattedMessage id="clients" />
    }
  ]


  return (
    <Stack py='15px'  spacing="10px" >
      <HStack justifyContent="space-between" >
        <CustomBreadcrumb  items={breadItems} />
        {/* <HStack>
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

        </HStack> */}
      </HStack>
      <TableComponent<Client>
          name="events"
          // name="users"
          // selectRow={navigateOrderDetails}
          data={clients?.clients ?? []}
          tableColumns={clientsColumns}
          setPageIndex={setPageIndex}
          pageIndex={pageIndex}
          pageCount={clients?.meta?.totalPages ?? 1}
          // 
          // searching={setSearch}
          // detailsIcon={true}
        /> 
    </Stack>
  )
}

ListClients.propTypes = {}

export default ListClients