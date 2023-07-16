import { useEffect } from 'react';
import { z } from 'zod';
import { Media } from 'features/global';
import { Button, Stack, Text } from '@chakra-ui/react';
import InputField from 'components/form/InputField';
import Form from 'components/form/Form';
import { FormattedMessage } from 'react-intl';
import SingleImageField from 'components/form/SingleImageField';
import { useNavigate } from 'react-router-dom';
import { EventTown } from 'features/events/types';
import uuid from 'react-uuid';
import { useUpdateTown } from 'features/events/api/town';

const schemaEvent = z.object({
  name: z.string(),
  image: z.any(),
});

type IEventForm = {
  name: string;
  image: Media;
};

type UpdateEventTownProps = {
  eventTown?: EventTown | null;
};

const UpdateEventTown = ({ eventTown }: UpdateEventTownProps) => {
  const navigate = useNavigate();
  const {
    mutate: updateTown,
    isLoading: isUpdatingTown,
    isSuccess: isTownUpdated,
  } = useUpdateTown();

  const handleUpdateTown = (categoryData: any) => {
    const { image, ...data } = categoryData;
    if (eventTown?.id) {
      updateTown({
        townId: eventTown?.id,
        eventTownData: {
          ...data,
          image: image?.url ?? '',
        },
      });
    }
  };

  useEffect(() => {
    if (isTownUpdated) {
      navigate('/events/city');
    }
  }, [isTownUpdated, navigate]);

  return (
    <Form<IEventForm, typeof schemaEvent>
      schema={schemaEvent}
      onSubmit={handleUpdateTown}
    >
      {({ register, formState, setValue }) => (
        <Stack spacing="20px">
          <InputField
            registration={register('name')}
            error={formState.errors['name']}
            label={'cityName'}
            placeholder=""
            defaultValue={eventTown?.name}
            inputStyle={{
              variant: 'primary',
              fontSize: 'xs',
              size: 'lg',
              fontWeight: 'normal',
              w: '600px',
            }}
          />

          <SingleImageField
            key={uuid()}
            registration={register('image')}
            setValue={setValue}
            name={'image'}
            imageType={'city'}
            label={'cityCover'}
            defaultValue={eventTown?.image}
            inputStyle={{
              variant: 'primary',
              fontSize: 'sm',
              size: 'lg',
              fontWeight: 600,
            }}
          />

          <Button
            variant="primaryFill"
            w="150px"
            borderRadius="xl"
            lineHeight="21px"
            fontWeight="500"
            fontSize="18px"
            type="submit"
            isLoading={isUpdatingTown}
          >
            <Text
              _firstLetter={{
                textTransform: 'capitalize',
              }}
            >
              <FormattedMessage id="add" />
            </Text>
          </Button>
        </Stack>
      )}
    </Form>
  );
};

UpdateEventTown.propTypes = {};

export default UpdateEventTown;
