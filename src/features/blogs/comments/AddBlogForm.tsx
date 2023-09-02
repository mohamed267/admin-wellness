import { z } from 'zod';
import { Button, Text, Stack } from '@chakra-ui/react';
import Form from 'components/form/Form';
import InputField from 'components/form/InputField';
import { FormattedMessage } from 'react-intl';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateBlog } from '../apis/createBlog';
import SingleImageField from 'components/form/SingleImageField';
import TextEditorfield from 'components/form/TextEditorfield';
import CreatableSelectFieldComponent from 'components/form/CreatableSelectField';

const schemaBlog = z.object({
  image: z.any(),
  title: z.string(),
  description: z.any(),
  content: z.any(),
  categories: z.any(),
});

type IBlog = {
  image: any;
  title: string;
  description: any;
  content: any;
  categories: any;
};

const AddBlogForm = () => {
  const navigate = useNavigate();
  //   const intl = useIntl();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { mutate: createBlog, isSuccess: isBlogCreated } = useCreateBlog();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleCreateBlog = async (blogData: IBlog) => {
    // const { title, permissions, forPartener, price } = BlogData;
    console.log('our BlogData are  ', blogData);
    console.log('our data is ', {
      title: blogData?.title,
      description: blogData?.description ?? { locks: [] },
      content: blogData?.content ?? { blocks: [] },
      imageUrl: blogData?.image?.url ?? '',
      categories:
        blogData?.categories?.map((category: any) => category.label) ?? [],
    });
    createBlog({
      title: blogData?.title,
      description: blogData?.description ?? { locks: [] },
      content: blogData?.content ?? { blocks: [] },
      imageUrl: blogData?.image?.url ?? '',
      categories:
        blogData?.categories?.map((category: any) => category.label) ?? [],
    });
  };

  useEffect(() => {
    if (isBlogCreated) {
      navigate({
        pathname: '/blog',
      });
    }
  }, [isBlogCreated]);

  return (
    <Form<IBlog, typeof schemaBlog>
      schema={schemaBlog}
      onSubmit={handleCreateBlog}
    >
      {({ register, formState, setValue, watch }) => (
        <Stack spacing="20px">
          <SingleImageField
            registration={register('image')}
            setValue={setValue}
            watch={watch}
            defaultValue={null}
            name={'image'}
            imageType={'blog'}
            label={'articleCover'}
            inputStyle={{
              variant: 'primary',
              fontSize: 'sm',
              size: 'lg',
              fontWeight: 600,
            }}
          />
          <InputField
            registration={register('title')}
            error={formState.errors['title']}
            label={'blogTitle'}
            inputStyle={{
              variant: 'primary',
              fontSize: 'xs',
              // w: '45%',
              size: 'lg',
              fontWeight: 'normal',
            }}
          />
          <TextEditorfield
            registration={register('description')}
            name="description"
            // error={formState.errors['description']}
            setValue={setValue}
            label={'description'}
            w="100%"
            h="300px"
            borderRadius="20px"
          />

          <CreatableSelectFieldComponent
            registration={register('categories')}
            label={'categoryName'}
            name={'categories'}
            setValue={setValue}
            isMulti={true}
            controlStyles={{
              minH: '50px',
              bg: 'white',
              borderRadius: 'xl',
              borderColor: 'gray.500',
            }}
          />

          <TextEditorfield
            registration={register('content')}
            setValue={setValue}
            name="content"
            label={''}
            w="100%"
            h="70vh"
            borderRadius="20px"
          />
          <Button
            variant="primaryFill"
            w="150px"
            borderRadius="xl"
            lineHeight="21px"
            fontWeight="500"
            fontSize="18px"
            type="submit"
          >
            <Text
              _firstLetter={{
                textTransform: 'capitalize',
              }}
            >
              <FormattedMessage id="save" />
            </Text>
          </Button>
        </Stack>
      )}
    </Form>
  );
};

export default AddBlogForm;
