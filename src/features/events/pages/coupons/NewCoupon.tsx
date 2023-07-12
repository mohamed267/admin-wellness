import { HStack, Stack } from '@chakra-ui/react';
import { useLocation, useParams } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import CustomBreadcrumb from 'components/CustomBreadcrumb/CustomBreadcrumb';
import CouponForm from 'features/events/components/coupon/CouponForm';
// import { useCoupons } from '../api/getCoupons'
// import TableComponent from 'components/table/Table'
// import { Coupon } from '../types'
// import { couponsColumns } from '../variables/table'

const NewCoupon = () => {
  const { state } = useLocation();
  const { eventId } = useParams();

  // const  [ pageIndex, setPageIndex ] = useState(1)
  //   const { data: coupons } = useEventCoupons({
  //     query:{
  //       eventId
  //     }
  //   })

  const breadItems = [
    {
      name: <FormattedMessage id="events" />,
      link: '/events',
    },
    {
      name: state?.eventTitle ?? 'event',
      link: `/events/${eventId}`,
    },
    {
      name: <FormattedMessage id="coupons" />,
      link: `/events/${eventId}/coupons`,
      state: state,
    },
    {
      name: <FormattedMessage id="new" />,
    },
  ];

  return (
    <Stack py="15px" spacing="30px">
      <HStack justifyContent="space-between">
        <CustomBreadcrumb items={breadItems} />
      </HStack>
      <CouponForm />
    </Stack>
  );
};

export default NewCoupon;
