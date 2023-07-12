import { useState } from 'react';
import { Button, HStack, Icon, Stack, Text } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import CustomBreadcrumb from 'components/CustomBreadcrumb/CustomBreadcrumb';
import TableComponent from 'components/table/Table';
import { categoryColumn } from 'features/events/variables/table';
import CouponsIcon from 'assets/icons/event/CouponsIcon';
import { EventCategory } from 'features/global';
import { useCategories } from 'features/events/api/getEventCategories';
// import { useCoupons } from '../api/getCoupons'
// import TableComponent from 'components/table/Table'
// import { Coupon } from '../types'
// import { couponsColumns } from '../variables/table'

const ListCategories = () => {
  const { state } = useLocation();
  const [pageIndex, setPageIndex] = useState(1);

  // const  [ pageIndex, setPageIndex ] = useState(1)
  const { data: categories } = useCategories({
    query: {},
  });

  //   useEffect(()=>{
  //     if(coupons?.meta){
  //       setPageIndex(coupons.meta.currentPage)
  //     }
  //   } , [categories])

  const breadItems = [
    {
      name: <FormattedMessage id="events" />,
      link: '/events',
    },
    {
      name: <FormattedMessage id="allCategories" />,
    },
  ];

  return (
    <Stack py="15px" spacing="10px">
      <HStack justifyContent="space-between">
        <CustomBreadcrumb items={breadItems} />
        <HStack>
          <Link to={`/events/category/new`} state={state}>
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
                <FormattedMessage id="newCategory" />
              </Text>
            </Button>
          </Link>
        </HStack>
      </HStack>
      <TableComponent<EventCategory>
        name="categories"
        // name="users"
        // selectRow={navigateOrderDetails}
        data={categories ?? []}
        tableColumns={categoryColumn}
        setPageIndex={setPageIndex}
        pageIndex={pageIndex}
        pageCount={1}
        //
        // searching={setSearch}
        // detailsIcon={true}
      />
    </Stack>
  );
};

export default ListCategories;
