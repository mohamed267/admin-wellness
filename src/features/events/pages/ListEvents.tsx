import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  HStack,
  Icon,
  Stack,
  Text,
} from '@chakra-ui/react';
import TableComponent from 'components/table/Table';
import { Link, useSearchParams } from 'react-router-dom';
import { EventListEntity } from '../types';

import { eventsColumns } from '../variables/table';
import NewEvent from 'assets/icons/event/newEvent';
import { FormattedMessage } from 'react-intl';
import { useEvents } from '../api/getEvents';
import { useEffect, useState } from 'react';
import AddCategoryIcon from 'assets/icons/category/AddCategoryIcon';
import AddCityIcon from 'assets/icons/city/AddCityIcon';
import EventUtils from '../components/table/EventUtils';

const ListEvents = () => {
  const [pageIndex, setPageIndex] = useState<number>(1);
  const [searchParams] = useSearchParams();
  const { data: events, refetch: refetchEvents } = useEvents({
    query: {
      page: Number(searchParams?.get('page') ?? 1),
      limit: 8,
    },
  });

  useEffect(() => {
    if (events?.meta) {
      setPageIndex(events.meta.currentPage);
    }
  }, [events]);

  useEffect(() => {
    refetchEvents();
  }, [searchParams]);

  return (
    <Stack py="15px" spacing="10px">
      <HStack justifyContent="space-between">
        <Breadcrumb>
          <BreadcrumbItem color="primary.500">
            <Link to="/events">Events</Link>
          </BreadcrumbItem>
        </Breadcrumb>
        <HStack>
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
                <Icon
                  viewBox="0 0 17 15"
                  width="17"
                  height="15"
                  fill="primary.500"
                >
                  <NewEvent />
                </Icon>
              }
            >
              <Text
                _firstLetter={{
                  textTransform: 'capitalize',
                }}
                fontSize="14px"
              >
                <FormattedMessage id="newEvent" />
              </Text>
            </Button>
          </Link>
          <Link to="/events/category">
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
          <Link to="/events/city">
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

      <TableComponent<EventListEntity>
        name="events"
        // name="users"
        // selectRow={navigateOrderDetails}
        data={events?.events ?? []}
        tableColumns={eventsColumns}
        pageIndex={pageIndex}
        pageCount={events?.meta?.totalPages ?? 1}
        paginated={true}
        TableUtils={EventUtils}
        //
        // searching={setSearch}
        // detailsIcon={true}
      />
    </Stack>
  );
};

export default ListEvents;
