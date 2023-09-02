import { Stack } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { useGuideCategory } from 'features/guide/apis/categories/getGuideCategory';
import CustomBreadcrumb from 'components/CustomBreadcrumb/CustomBreadcrumb';

const EditGuideCategory = () => {
  const intl = useIntl();
  const { guideCategoryId } = useParams();
  const { data: eventCategoryData } = useGuideCategory({
    guideCategoryId,
  });

  const guideBreadcrumbs = [
    {
      name: intl.formatMessage({ id: 'guideCategories' }),
      link: '/guides/categories',
    },
    {
      name: eventCategoryData?.name,
    },
  ];

  return (
    <Stack py="30px">
      <CustomBreadcrumb items={guideBreadcrumbs} />
      {/* form event creation  */}
      {/* <UpdateEventCatrgory key={uuid()} eventCategory={eventCategoryData} /> */}
    </Stack>
  );
};

export default EditGuideCategory;
