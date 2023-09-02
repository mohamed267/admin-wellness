import { Stack } from '@chakra-ui/react';
// import { useEffect } from 'react';
import { useEventTown } from 'features/events/api/town';
import UpdateEventTown from 'features/events/components/town/UpdateTownForm';
import CustomBreadcrumb from 'components/CustomBreadcrumb/CustomBreadcrumb';
import { useParams } from 'react-router-dom';
import { useIntl } from 'react-intl';

const EditTown = () => {
  const intl = useIntl();

  const { townId } = useParams();
  const { data: eventTownData } = useEventTown({
    query: { townId },
  });
  //   useEffect(() => {
  //     console.log('our event data is ', eventTownData);
  //   }, [eventTownData]);

  const guideBreadcrumbs = [
    {
      name: intl.formatMessage({ id: 'guideCategories' }),
      link: '/guides/towns',
    },
    {
      name: eventTownData?.name,
    },
  ];

  return (
    <Stack py="30px">
      <CustomBreadcrumb items={guideBreadcrumbs} />

      <UpdateEventTown eventTown={eventTownData} />
    </Stack>
  );
};

export default EditTown;
