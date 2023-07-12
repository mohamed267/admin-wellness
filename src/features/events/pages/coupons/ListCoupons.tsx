import { useEffect, useState } from 'react';
import { Button, HStack, Icon, Stack, Text } from '@chakra-ui/react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import CustomBreadcrumb from 'components/CustomBreadcrumb/CustomBreadcrumb';
import { useEventCoupons } from 'features/events/api/getEventCoupons';
import TableComponent from 'components/table/Table';
import { Coupon } from 'features/events/types';
import { couponsColumns } from 'features/events/variables/table';
import CouponsIcon from 'assets/icons/event/CouponsIcon';
// import { useCoupons } from '../api/getCoupons'
// import TableComponent from 'components/table/Table'
// import { Coupon } from '../types'
// import { couponsColumns } from '../variables/table'

const ListCoupons = () => {
  const { state } = useLocation();
  const { eventId } = useParams();
  const [pageIndex, setPageIndex] = useState(1);

  // const  [ pageIndex, setPageIndex ] = useState(1)
  const { data: coupons } = useEventCoupons({
    query: {
      eventId,
    },
  });

  useEffect(() => {
    if (coupons?.meta) {
      setPageIndex(coupons.meta.currentPage);
    }
  }, [coupons]);

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
    },
  ];

  return (
    <Stack py="15px" spacing="10px">
      <HStack justifyContent="space-between">
        <CustomBreadcrumb items={breadItems} />
        <HStack>
          <Link to={`/events/${eventId}/coupons/new`} state={state}>
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
                <Icon viewBox="0 0 20 15" fill="primary.500">
                  <CouponsIcon />
                </Icon>
              }
            >
              <Text
                _firstLetter={{
                  textTransform: 'capitalize',
                }}
                fontSize="14px"
              >
                <FormattedMessage id="addCoupon" />
              </Text>
            </Button>
          </Link>
        </HStack>
      </HStack>
      <TableComponent<Coupon>
        name="events"
        // name="users"
        // selectRow={navigateOrderDetails}
        data={coupons?.coupons ?? []}
        tableColumns={couponsColumns}
        setPageIndex={setPageIndex}
        pageIndex={pageIndex}
        pageCount={coupons?.meta?.totalPages ?? 1}
        hideSelection={true}
        //
        // searching={setSearch}
        // detailsIcon={true}
      />
    </Stack>
  );
};

ListCoupons.propTypes = {};

export default ListCoupons;
