import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Breadcrumb, BreadcrumbItem, Button, HStack, Icon, Stack, Text } from '@chakra-ui/react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import CustomBreadcrumb from 'components/CustomBreadcrumb/CustomBreadcrumb'
import { useEventCoupons } from 'features/events/api/getEventCoupons'
import TableComponent from 'components/table/Table'
import { Coupon, EventTown } from 'features/events/types'
import { townColumn, couponsColumns } from 'features/events/variables/table'
import CouponsIcon from 'assets/icons/event/CouponsIcon'
import { useTowns } from 'features/events/api/getEventTowns'
// import { useCoupons } from '../api/getCoupons'
// import TableComponent from 'components/table/Table'
// import { Coupon } from '../types'
// import { couponsColumns } from '../variables/table'

const ListTowns = () => {
  const { state } = useLocation()
  const { eventId } = useParams()
  const  [ pageIndex, setPageIndex ] = useState(1)


  // const  [ pageIndex, setPageIndex ] = useState(1)
  const { data: towns } = useTowns({
    query:{}
  })

  


//   useEffect(()=>{
//     if(coupons?.meta){
//       setPageIndex(coupons.meta.currentPage)
//     }
//   } , [towns])



  


  const breadItems = [
    {
      name:  <FormattedMessage id="events" />,
      link: "/events"
    },
    {
      name:   <FormattedMessage id="allTowns" />
    }
  ]


  return (
    <Stack py='15px'  spacing="10px" >
      <HStack justifyContent="space-between" >
        <CustomBreadcrumb  items={breadItems} />
        <HStack>
            <Link 
                to={`/events/city/new`}
                state={
                  state
                }   
            >
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
                    <Icon viewBox="0 0 20 15"  fill="primary.500" >
                      <CouponsIcon />
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
                      <FormattedMessage  id="newTown" />
                    </Text>
                </Button>
            </Link>
            

          </HStack>
      </HStack>
      <TableComponent<EventTown>
          name="towns"
          // name="users"
          // selectRow={navigateOrderDetails}
          data={towns ?? []}
          tableColumns={townColumn}
          setPageIndex={setPageIndex}
          pageIndex={pageIndex}
          pageCount={1}
          // 
          // searching={setSearch}
          // detailsIcon={true}
        />
    </Stack>
  )
}

export default ListTowns