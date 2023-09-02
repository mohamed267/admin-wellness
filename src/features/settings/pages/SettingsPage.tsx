import { Stack } from '@chakra-ui/react';
import CustomBreadcrumb from 'components/CustomBreadcrumb/CustomBreadcrumb';
import { useIntl } from 'react-intl';
import AdminSettingsForm from '../components/AdminSettingsForm';
import SubscriptionPlansList from '../components/SubscriptionPlanList';

const SettingsPage = () => {
  const intl = useIntl();

  const settingBreadcrumbs = [
    {
      name: intl.formatMessage({ id: 'settings' }),
    },
  ];
  return (
    <Stack spacing="50px">
      <CustomBreadcrumb items={settingBreadcrumbs} />
      <AdminSettingsForm />
      <SubscriptionPlansList />
    </Stack>
  );
};

export default SettingsPage;
