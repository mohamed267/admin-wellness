import { Stack, Text } from '@chakra-ui/react';
import CustomBreadcrumb from 'components/CustomBreadcrumb/CustomBreadcrumb';
import { useIntl } from 'react-intl';
import EditPlanForm from '../components/Plan/EditPlanForm';
import { useSubcriptionPlan } from '../apis/getSubscriptionPlan';
import { useParams } from 'react-router-dom';

const EditPlanPage = () => {
  const { planId } = useParams();
  const intl = useIntl();
  const { data: plan } = useSubcriptionPlan({
    query: {
      planId,
    },
  });

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
      <Text>{JSON.stringify(plan)}</Text>
      <EditPlanForm />
    </Stack>
  );
};

export default EditPlanPage;
