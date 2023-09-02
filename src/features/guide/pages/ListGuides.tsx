import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  HStack,
  Icon,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Link, useSearchParams } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import AddCategoryIcon from 'assets/icons/category/AddCategoryIcon';
import AddCityIcon from 'assets/icons/city/AddCityIcon';
import NewGuideIcon from 'assets/icons/guide/NewGuideIcon';
import { guidesColumns } from '../variables/table';
import { useEffect, useState } from 'react';
import { useGuides } from '../apis/getGuides';
import TableComponent from 'components/table/Table';
import { GuideListEntity } from '../types';
import ExpendedGuideRow from '../components/table/ExpendedGuideRow';

const ListGuides = () => {
  const [pageIndex, setPageIndex] = useState<number>(1);
  const [searchParams] = useSearchParams();
  const { data: guides, refetch: refetchGuides } = useGuides({
    query: {
      page: Number(searchParams?.get('page') ?? 1),
      limit: 8,
    },
  });

  useEffect(() => {
    if (guides?.meta) {
      setPageIndex(guides.meta.currentPage);
    }
  }, [guides]);

  useEffect(() => {
    refetchGuides();
  }, [searchParams]);

  return (
    <Stack py="15px" spacing="10px">
      <HStack justifyContent="space-between">
        <Breadcrumb>
          <BreadcrumbItem color="primary.500">
            <Link to="/guides">Guides</Link>
          </BreadcrumbItem>
        </Breadcrumb>
        <HStack>
          <Link to="/guides/new">
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
                <Icon
                  viewBox="0 0 17 15"
                  width="17"
                  height="15"
                  fill="primary.500"
                >
                  <NewGuideIcon />
                </Icon>
              }
            >
              <Text
                _firstLetter={{
                  textTransform: 'capitalize',
                }}
                fontSize="14px"
              >
                <FormattedMessage id="newGuide" />
              </Text>
            </Button>
          </Link>
          <Link to="/guides/categories">
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
                <Icon
                  viewBox="0 0 17 15"
                  width="17"
                  height="15"
                  fill="primary.500"
                >
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
                <FormattedMessage id="allCategories" />
              </Text>
            </Button>
          </Link>
          <Link to="/guides/towns">
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
                <Icon
                  viewBox="0 0 17 15"
                  width="17"
                  height="15"
                  fill="primary.500"
                >
                  <AddCityIcon />
                </Icon>
              }
            >
              <Text
                _firstLetter={{
                  textTransform: 'capitalize',
                }}
                fontSize="14px"
              >
                <FormattedMessage id="allCities" />
              </Text>
            </Button>
          </Link>
        </HStack>
      </HStack>

      <TableComponent<GuideListEntity>
        name="guides"
        // name="users"
        // selectRow={navigateOrderDetails}
        data={guides?.guides ?? []}
        tableColumns={guidesColumns}
        pageIndex={pageIndex}
        pageCount={guides?.meta?.totalPages ?? 1}
        paginated={true}
        ExpendedRow={ExpendedGuideRow}
        //
        // searching={setSearch}
        // detailsIcon={true}
      />
    </Stack>
  );
};

export default ListGuides;
