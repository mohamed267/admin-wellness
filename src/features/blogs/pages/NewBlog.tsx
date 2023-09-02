import { Stack } from '@chakra-ui/react';
import CustomBreadcrumb from 'components/CustomBreadcrumb/CustomBreadcrumb';
import { useIntl } from 'react-intl';
import AddBlogForm from '../comments/AddBlogForm';

const AddBlog = () => {
  const intl = useIntl();

  const settingBreadcrumbs = [
    {
      name: intl.formatMessage({ id: 'settings' }),
      link: '/settings',
    },
    {
      name: intl.formatMessage({ id: 'addPlan' }),
    },
  ];
  return (
    <Stack spacing="50px">
      <CustomBreadcrumb items={settingBreadcrumbs} />
      <AddBlogForm />
    </Stack>
  );
};

export default AddBlog;
