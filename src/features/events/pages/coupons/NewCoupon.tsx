import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Breadcrumb, BreadcrumbItem, Button, HStack, Icon, Stack, Text } from '@chakra-ui/react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import CustomBreadcrumb from 'components/CustomBreadcrumb/CustomBreadcrumb'
import { useEventCoupons } from 'features/events/api/getEventCoupons'
import TableComponent from 'components/table/Table'
import { Coupon } from 'features/events/types'
import { couponsColumns } from 'features/events/variables/table'
import CouponsIcon from 'assets/icons/event/CouponsIcon'
import CouponForm from 'features/events/components/coupon/CouponForm'
// import { useCoupons } from '../api/getCoupons'
// import TableComponent from 'components/table/Table'
// import { Coupon } from '../types'
// import { couponsColumns } from '../variables/table'

const NewCoupon = () => {
  const { state } = useLocation()
  const { eventId } = useParams()


  // const  [ pageIndex, setPageIndex ] = useState(1)
//   const { data: coupons } = useEventCoupons({
//     query:{
//       eventId
//     }
//   })





  


  const breadItems = [
    {
      name:  <FormattedMessage id="events" />,
      link: "/events"
    },
    {
      name: state?.eventTitle ?? "event" ,
      link: `/events/${eventId}`,
    },
    {
      name:   <FormattedMessage id="coupons" />,
      link: `/events/${eventId}/coupons`,
      state: state
    },
    {
        name:   <FormattedMessage id="new" />
    }
  ]


  return (
    <Stack py='15px'  spacing="30px"   >
      <HStack justifyContent="space-between" >
        <CustomBreadcrumb  items={breadItems} />
      </HStack>
      <CouponForm />
    </Stack>
  )
}


export default NewCoupon