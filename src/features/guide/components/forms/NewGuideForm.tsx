import { z } from 'zod';
import { Button, HStack, Flex, Text } from '@chakra-ui/react';
import Form from 'components/form/Form';
import InputField from 'components/form/InputField';
import TextEditorfield from 'components/form/TextEditorfield';
import SelectAsyncFieldComponent from 'components/form/SelectAsyncFieldComponent';
import { searchTowns } from 'features/global/api/searchTowns';
import MultipleImageField from 'components/form/MultipleImageField';
import { Media } from 'features/global';
import { FormattedMessage } from 'react-intl';
import NumberInputFieldComponent from 'components/form/NumberInputField';
import { getGuideCategories } from 'features/guide/apis/categories/getGuideCategories';
import SocialMediaLinkField from 'components/form/SocialMediaLinkField';
import { extractLatLongFromGoogleMapsUrl } from 'utils/map';
import { useCreateGuide } from 'features/guide/apis/createGuide';
import { safingEditorOutput } from 'utils/editor';

const mapsLinkPattern = /@(-?\d+\.\d+),(-?\d+\.\d+)/;

const schemaGuide = z.object({
  title: z.string(),
  email: z.string(),
  phoneNumber: z.string(),
  website: z.string(),
  description: z.any(),
  socialMediaUrls: z.any(),
  category: z.any().refine(
    (value) => {
      return value?.name !== undefined;
    },
    {
      message: 'categoryShouldBeProvided',
    },
  ),
  town: z.any().refine(
    (value) => {
      return value?.name !== undefined;
    },
    {
      message: 'townShouldBeProvided',
    },
  ),
  images: z.any(),
  mapsLink: z.string().refine((value) => mapsLinkPattern.test(value), {
    message: 'invalidGoogleMapLink',
  }),
  // videos: z.any(),
  rangeBooking: z.any(),
  timingIntervalls: z.any(),
  selecetdRange: z.any(),
  periods: z.any(),
});

type IGuideForm = {
  title: string;
  email: string;
  phoneNumber: string;
  website: string;
  selecetdRange: any;
  mapsLink: string;
  description: any;
  category: any;
  town: any;
  images: Media[];
  socialMediaUrls: any;
  // videos: Media[];
  rangeBooking: any;
  timingIntervalls: any;
  periods: any;
};

const NewGuideForm = () => {
  const { mutate: createGuide } = useCreateGuide();
  const handleSearchGuideCategories = async (search: string) => {
    const catgories = await getGuideCategories({
      search,
    });

    return catgories?.categories;
  };
  const handleCreateGuide = async (guideData: IGuideForm) => {
    const { images, town, category, mapsLink, description, ...snapData } =
      guideData;
    const medias = [...images];
    const address = extractLatLongFromGoogleMapsUrl(mapsLink);
    const data = {
      ...snapData,
      medias,
      town: town?.name ?? '',
      category: category?.name ?? '',
      description: JSON.stringify(safingEditorOutput(description)),
      ...address,
    };

    createGuide(data);
  };

  return (
    <Form<IGuideForm, typeof schemaGuide>
      schema={schemaGuide}
      onSubmit={handleCreateGuide}
    >
      {({ register, formState, setValue, watch }) => (
        <Flex flexDirection="column" gap="20px">
          <HStack>
            <InputField
              registration={register('title')}
              error={formState.errors['title']}
              label={'guideTilte'}
              inputStyle={{
                variant: 'primary',
                fontSize: 'xs',
                size: 'lg',
                fontWeight: 'normal',
              }}
            />
            <InputField
              registration={register('mapsLink')}
              error={formState.errors['mapsLink']}
              label={'mapsLink'}
              inputStyle={{
                variant: 'primary',
                fontSize: 'xs',
                size: 'lg',
                fontWeight: 'normal',
              }}
            />
          </HStack>

          <TextEditorfield
            registration={register('description')}
            // error={formState.errors['description']}
            setValue={setValue}
            label={'description'}
            placeholder=""
            w="100%"
            h="200px"
          />

          <HStack justifyContent="space-between" columnGap="10px">
            <SelectAsyncFieldComponent
              registration={register('category')}
              error={formState.errors['category'] as any}
              label={'category'}
              loadOptions={handleSearchGuideCategories}
              optionValue={'id'}
              optionLabel={'name'}
              name={'category'}
              setValue={setValue}
              controlStyles={{
                minH: '50px',
                bg: 'white',
                borderRadius: 'xl',
                borderColor: 'gray.500',
              }}
            />

            <SelectAsyncFieldComponent
              registration={register('town')}
              error={formState.errors['town'] as any}
              label={'city'}
              loadOptions={(town: string) => searchTowns(town ? { town } : {})}
              optionValue={'id'}
              optionLabel={'name'}
              name={'town'}
              setValue={setValue}
              controlStyles={{
                minH: '50px',
                bg: 'white',
                borderRadius: 'xl',
                borderColor: 'gray.500',
              }}
            />
          </HStack>

          <HStack>
            <InputField
              registration={register('email')}
              error={formState.errors['email']}
              label={'email'}
              inputStyle={{
                variant: 'primary',
                fontSize: 'xs',
                size: 'lg',
                fontWeight: 'normal',
              }}
            />
            <NumberInputFieldComponent
              registration={register('phoneNumber')}
              error={formState.errors['phoneNumber']}
              label={'phoneNumber'}
              setValue={setValue}
              watch={watch}
              inputStyle={{
                variant: 'primary',
                fontSize: 'xs',
                size: 'lg',
                fontWeight: 'normal',
              }}
            />

            <InputField
              registration={register('website')}
              error={formState.errors['website']}
              label={'website'}
              inputStyle={{
                variant: 'primary',
                fontSize: 'xs',
                size: 'lg',
                fontWeight: 'normal',
              }}
            />
          </HStack>

          <SocialMediaLinkField
            setValue={setValue}
            watch={watch}
            name="socialMediaUrls"
          />

          {/* <GuideTimesIntervalesField
            registration={register('timingIntervalls')}
            buttonStyle={{
              variant: 'primaryFill',
              w: 'fit-content',
              borderRadius: 'xl',
              lineHeight: '21px',
              fontWeight: '500',
              fontSize: '18px',
            }}
            inputStyle={{
              variant: 'primary',
              fontSize: 'xs',
              size: 'lg',
              fontWeight: 'normal',
            }}
          /> */}
          <MultipleImageField
            // registration={register('images')}
            key={'image-upload-media'}
            setValue={setValue}
            watch={watch}
            name={'images'}
            imageType={'guide'}
            label={'images'}
            inputStyle={{
              variant: 'auth',
              fontSize: 'sm',
              size: 'lg',
              fontWeight: 600,
            }}
          />

          {/* <MultipleVideoField
            registration={register('videos')}
            setValue={setValue}
            defaultValue={[]}
            name={'videos'}
            videoType={'guides'}
            label={'videos'}
            inputStyle={{
              variant: 'auth',
              fontSize: 'sm',
              size: 'lg',
              fontWeight: 600,
            }}
          /> */}

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
              <FormattedMessage id="add" />
            </Text>
          </Button>
        </Flex>
      )}
    </Form>
  );
};

export default NewGuideForm;
