import { useEffect } from 'react';
import { z } from 'zod';
import { EventCategory, Media } from 'features/global';
import { Button, Stack, Text } from '@chakra-ui/react';
import InputField from 'components/form/InputField';
import Form from 'components/form/Form';
import { FormattedMessage } from 'react-intl';
import SingleImageField from 'components/form/SingleImageField';
import { useUpdateCategory } from '../../api/categories/updateCategory';
import { useNavigate } from 'react-router-dom';

const schemaEvent = z.object({
  name: z.string(),
  image: z.any(),
});

type IEventForm = {
  name: string;
  image: Media;
};

type UpdateEventCategoryProps = {
  eventCategory?: EventCategory | null;
};

const UpdateEventCatrgory = ({ eventCategory }: UpdateEventCategoryProps) => {
  const navigate = useNavigate();
  const {
    mutate: updateCategory,
    isLoading: isUpdatingCategory,
    isSuccess: isCategoryUpdated,
  } = useUpdateCategory();

  const handleUpdateCategory = (categoryData: any) => {
    const { image, ...data } = categoryData;

    if (eventCategory?.id) {
      updateCategory({
        categoryId: eventCategory?.id,
        categoryData: {
          ...data,
          image: image?.url ?? '',
        },
      });
    }
  };

  useEffect(() => {
    if (isCategoryUpdated) {
      navigate('/events/category');
    }
  }, [isCategoryUpdated, navigate]);

  return (
    <Form<IEventForm, typeof schemaEvent>
      schema={schemaEvent}
      onSubmit={handleUpdateCategory}
    >
      {({ register, formState, setValue, watch }) => (
        <Stack spacing="20px">
          <InputField
            registration={register('name')}
            error={formState.errors['name']}
            label={'categoryName'}
            placeholder=""
            defaultValue={eventCategory?.name}
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
            watch={watch}
            imageType={'events'}
            label={'categoryIcon'}
            defaultValue={eventCategory?.image}
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
            isLoading={isUpdatingCategory}
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

UpdateEventCatrgory.propTypes = {};

export default UpdateEventCatrgory;
