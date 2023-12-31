import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useDirection } from 'hooks/useDirection';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { Link, useParams } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { useEventCategory } from 'features/events/api/categories/getEventCategory';
import { useEffect } from 'react';
import UpdateEventCatrgory from 'features/events/components/category/UpdateCategoryForm';
import uuid from 'react-uuid';

const EditCategory = () => {
  const { dir } = useDirection();
  const { categoryId } = useParams();
  const { data: eventCategoryData } = useEventCategory({
    query: { categoryId },
  });
  useEffect(() => {
    console.log('our event data is ', eventCategoryData);
  }, [eventCategoryData]);

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
            <Link to="/events/category">
              <FormattedMessage id="allCategories" />
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem
          key={eventCategoryData?.id ?? uuid()}
          isCurrentPage
          color="primary.500"
        >
          <Text>{eventCategoryData?.name}</Text>
        </BreadcrumbItem>
      </Breadcrumb>

      {/* form event creation  */}
      <UpdateEventCatrgory key={uuid()} eventCategory={eventCategoryData} />
    </Stack>
  );
};

export default EditCategory;
