import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Stack,
} from '@chakra-ui/react';
import { useDirection } from 'hooks/useDirection';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
// import { useEffect } from 'react';
import uuid from 'react-uuid';
// import { useEventTown } from 'features/events/api/town';
import UpdateEventTown from 'features/events/components/town/UpdateTownForm';

const EditTown = () => {
  const { dir } = useDirection();
  //   const { townId } = useParams();
  //   const { data: eventTownData } = useEventTown({
  //     query: { townId },
  //   });
  //   useEffect(() => {
  //     console.log('our event data is ', eventTownData);
  //   }, [eventTownData]);

  return (
    <Stack py="30px">
      <Breadcrumb
        spacing="8px"
        separator={
          dir === 'rtl' ? (
            <BiChevronLeft color="gray.500" />
          ) : (
            <BiChevronRight color="gray.500" />
          )
        }
      >
        <BreadcrumbItem
          color="primary.500"
          textTransform="capitalize"
          fontSize="md"
        >
          <BreadcrumbLink>
            <Link to="/events">
              <FormattedMessage id="events" />
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem
          color="primary.500"
          textTransform="capitalize"
          fontSize="md"
        >
          <BreadcrumbLink>
            <Link to="/events/town">
              <FormattedMessage id="allCities" />
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {/* <BreadcrumbItem isCurrentPage color="primary.500">
          {eventTownData?.name}
        </BreadcrumbItem> */}
      </Breadcrumb>

      {/* form event creation  */}
      {/* <UpdateEventTown key={uuid()} eventTown={eventTownData} /> */}
      <UpdateEventTown
        key={uuid()}
        eventTown={{
          id: '09381e5e-6b65-4177-8c6e-7e54eed5de3a',
          name: 'Alger',
          image: null,
          createdAt: 'dadaz',
        }}
      />
    </Stack>
  );
};

export default EditTown;
