import { Stack } from '@chakra-ui/react';
import { useIntl } from 'react-intl';
import CustomBreadcrumb from 'components/CustomBreadcrumb/CustomBreadcrumb';
import AddGuideCategoryForm from 'features/guide/components/forms/category/AddCategoryForm';

const NewGuideCategory = () => {
  const intl = useIntl();

  const guideBreadcrumbs = [
    {
      name: intl.formatMessage({ id: 'guides' }),
      link: '/guides',
    },
    {
      name: intl.formatMessage({ id: 'guideCategories' }),
      link: '/guides/categories',
    },
    {
      name: intl.formatMessage({ id: 'newGuideCategory' }),
    },
  ];

  return (
    <Stack py="30px">
      <CustomBreadcrumb items={guideBreadcrumbs} />
      {/* form event creation  */}
      <AddGuideCategoryForm />
    </Stack>
  );
};

export default NewGuideCategory;
