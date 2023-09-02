import { z } from 'zod';
import { Media } from 'features/global';
import { Button, Stack, Text } from '@chakra-ui/react';
import InputField from 'components/form/InputField';
import Form from 'components/form/Form';
import { FormattedMessage } from 'react-intl';
import SingleImageField from 'components/form/SingleImageField';
import { useCreateGuideCategory } from 'features/guide/apis/categories/createGuideCategory';

const schemaGuide = z.object({
  name: z.string(),
  image: z.any(),
});

type IGuideForm = {
  name: string;
  image: Media;
};

const AddGuideCategoryForm = () => {
  const { mutate: createCategory, isLoading: isCreatingCategory } =
    useCreateGuideCategory();

  const handleAddCategory = (categoryData: any) => {
    const { image, ...data } = categoryData;
    createCategory({
      ...data,
      imageUrl: image?.url ?? '',
    });
  };

  return (
    <Form<IGuideForm, typeof schemaGuide>
      schema={schemaGuide}
      onSubmit={handleAddCategory}
    >
      {({ register, formState, setValue, watch }) => (
        <Stack spacing="20px">
          <InputField
            registration={register('name')}
            error={formState.errors['name']}
            label={'categoryName'}
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
            watch={watch}
            name={'image'}
            imageType={'guide-category'}
            label={'categoryIcon'}
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
            isLoading={isCreatingCategory}
            mt="40px"
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

export default AddGuideCategoryForm;
