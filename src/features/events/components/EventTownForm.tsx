import { useEffect } from 'react';
import { z } from 'zod';
import { Media } from 'features/global';
import { Button, Stack, Text } from '@chakra-ui/react';
import InputField from 'components/form/InputField';
import Form from 'components/form/Form';
import { FormattedMessage } from 'react-intl';
import SingleImageField from 'components/form/SingleImageField';
import { useCreateTown } from '../api/createTown';
import { useNavigate } from 'react-router-dom';

const schemaEvent = z.object({
  name: z.any(),
  image: z.any(),
});

type IEventForm = {
  name: string;
  image: Media;
};

const EventTownForm = () => {
  const navigate = useNavigate();
  const {
    mutate: createTown,
    isLoading: isCreatingTown,
    isSuccess: isTownCreated,
  } = useCreateTown();

  const handleAddTown = (townData: any) => {
    const { image, ...data } = townData;
    createTown({
      ...data,
      image: image?.url ?? '',
    });
  };

  useEffect(() => {
    if (isTownCreated) {
      navigate('/events/city');
    }
  }, [isTownCreated, navigate]);

  return (
    <Form<IEventForm, typeof schemaEvent>
      schema={schemaEvent}
      onSubmit={handleAddTown}
    >
      {({ register, formState, setValue }) => (
        <Stack spacing="20px">
          <InputField
            registration={register('name')}
            error={formState.errors['name']}
            label={'cityName'}
            placeholder=""
            inputStyle={{
              variant: 'primary',
              fontSize: 'xs',
              size: 'lg',
              fontWeight: 'normal',
              w: '600px',
            }}
          />

          <SingleImageField
            registration={register('image')}
            setValue={setValue}
            name={'image'}
            imageType={'city'}
            label={'cityCover'}
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
            isLoading={isCreatingTown}
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

export default EventTownForm;
