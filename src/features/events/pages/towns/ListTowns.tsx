import { Button, HStack, Icon, Stack, Text } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import CustomBreadcrumb from 'components/CustomBreadcrumb/CustomBreadcrumb';

import CouponsIcon from 'assets/icons/event/CouponsIcon';
import TownsList from 'features/events/components/town/TownsList';
// import { useCoupons } from '../api/getCoupons'
// import TableComponent from 'components/table/Table'
// import { Coupon } from '../types'
// import { couponsColumns } from '../variables/table'

const ListTowns = () => {
  const { state } = useLocation();

  //   useEffect(()=>{
  //     if(coupons?.meta){
  //       setPageIndex(coupons.meta.currentPage)
  //     }
  //   } , [towns])

  const breadItems = [
    {
      name: <FormattedMessage id="events" />,
      link: '/events',
    },
    {
      name: <FormattedMessage id="allTowns" />,
    },
  ];

  return (
    <Stack py="15px" spacing="10px">
      <HStack justifyContent="space-between">
        <CustomBreadcrumb items={breadItems} />
        <HStack>
          <Link to={`/events/city/new`} state={state}>
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
                <FormattedMessage id="newTown" />
              </Text>
            </Button>
          </Link>
        </HStack>
      </HStack>
      <TownsList />
    </Stack>
  );
};

export default ListTowns;
