import { Button, HStack, Icon, Stack, Text } from '@chakra-ui/react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import CustomBreadcrumb from 'components/CustomBreadcrumb/CustomBreadcrumb';
import TableComponent from 'components/table/Table';
import { useGuideCategories } from 'features/guide/apis/categories/getGuideCategories';
import { GuideCategoryEntity } from 'features/guide/types';
import AddCategoryIcon from 'assets/icons/category/AddCategoryIcon';
import { guidecategoriesColumn } from 'features/guide/variables/table';
import { useEffect } from 'react';
// import { useCoupons } from '../api/getCoupons'
// import TableComponent from 'components/table/Table'
// import { Coupon } from '../types'
// import { couponsColumns } from '../variables/table'

const ListGuideCategories = () => {
  const { state } = useLocation();
  const [searchParams] = useSearchParams();
  const page: number = Number(searchParams?.get('page') ?? '1');

  // const  [ pageIndex, setPageIndex ] = useState(1)
  const { data: categories, refetch: refetchCategories } = useGuideCategories({
    query: {
      page,
      limit: 6,
    },
  });

  useEffect(() => {
    refetchCategories();
  }, [page]);

  //   useEffect(()=>{
  //     if(coupons?.meta){
  //       setPageIndex(coupons.meta.currentPage)
  //     }
  //   } , [categories])

  const breadItems = [
    {
      name: <FormattedMessage id="guides" />,
      link: '/guides',
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
          <Link to={`/guides/categories/new`} state={state}>
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
                  <AddCategoryIcon />
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
      <TableComponent<GuideCategoryEntity>
        name="categories"
        // name="users"
        // selectRow={navigateOrderDetails}
        data={categories?.categories ?? []}
        tableColumns={guidecategoriesColumn}
        pageIndex={page}
        pageCount={categories?.meta?.totalPages ?? 1}
        paginated={true}
        //
        // searching={setSearch}
        // detailsIcon={true}
      />
    </Stack>
  );
};

export default ListGuideCategories;
