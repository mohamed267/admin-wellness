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
// import NumberInputFieldComponent from 'components/form/NumberInputField';
import { getGuideCategories } from 'features/guide/apis/categories/getGuideCategories';
import SocialMediaLinkField from 'components/form/SocialMediaLinkField';
import { extractLatLongFromGoogleMapsUrl } from 'utils/map';
import { safingEditorOutput } from 'utils/editor';
import { GuideDetails, SocialMediaUrl } from 'features/guide/types';
import If from 'common/If';
import NumberInputFieldComponent from 'components/form/NumberInputField';
import { useUpdpateGuide } from 'features/guide/apis/updateGuide';

const mapsLinkPattern = /@(-?\d+\.\d+),(-?\d+\.\d+)/;
const phoeNumberPattern =
  /^(?:\+?\d{1,3}[-\s]?)?(?:\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;

const schemaGuide = z.object({
  title: z.string(),
  email: z.string(),
  phoneNumber: z.string().refine((value) => phoeNumberPattern.test(value), {
    message: 'invalidPhoneNumber',
  }),
  website: z.string(),
  description: z.any(),
  addSocialMediaUrls: z.any(),
  deletedSocialMediaUrls: z.any(),
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
  deletedImages: z.any(),
  addImages: z.any(),
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
  deletedImages: Media[];
  addImages: Media[];
  socialMediaUrls: any;
  deletedSocialMediaUrls: SocialMediaUrl[];
  addSocialMediaUrls: SocialMediaUrl[];
  // videos: Media[];
  rangeBooking: any;
  timingIntervalls: any;
  periods: any;
};

type EditGuideFormProps = {
  guide: GuideDetails;
};

const EditGuideForm = ({ guide }: EditGuideFormProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { mutate: updateGuide } = useUpdpateGuide();
  const handleSearchGuideCategories = async (search: string) => {
    const catgories = await getGuideCategories({
      search,
    });

    return catgories?.categories;
  };
  const handleCreateGuide = async (guideData: IGuideForm) => {
    const {
      town,
      category,
      mapsLink,
      description,
      addImages,
      deletedImages,
      addSocialMediaUrls,
      deletedSocialMediaUrls,
      ...snapData
    } = guideData;
    const addMedias = addImages?.filter((image: Media) => image?.isNew);
    const address = extractLatLongFromGoogleMapsUrl(mapsLink);
    const data: any = {
      ...snapData,
      addMedias,
      town: town?.name ?? '',
      category: category?.name ?? '',
      deletedImages: deletedImages ?? [],
      deletedSocialMediaUrls: deletedSocialMediaUrls ?? [],
      addSocialMediaUrls: addSocialMediaUrls?.filter(
        (link: SocialMediaUrl) => link.isNew,
      ),
      ...address,
    };

    if (description) {
      data['description'] = JSON.stringify(safingEditorOutput(description));
    }

    console.log('our data is ', data);

    updateGuide({
      guideId: guide?.id,
      data,
    });
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
              defaultValue={guide?.title}
              inputStyle={{
                variant: 'primary',
                fontSize: 'xs',
                size: 'lg',
                fontWeight: 'normal',
              }}
            />
            <Text>{guide?.longtitude}</Text>
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
              defaultValue={
                guide?.latitude && guide?.longtitude
                  ? `https://www.google.com/maps/place/M%C3%A9d%C3%A9a/@${guide?.latitude},${guide?.longtitude}z`
                  : ''
              }
            />
          </HStack>
          <If condition={guide?.description}>
            <TextEditorfield
              registration={register('description')}
              key={`text-editor${guide?.id}`}
              // error={formState.errors['description']}
              setValue={setValue}
              label={'description'}
              placeholder=""
              w="100%"
              h="500px"
              defaultData={JSON.parse(guide?.description)}
            />
          </If>

          <HStack justifyContent="space-between" columnGap="10px">
            <SelectAsyncFieldComponent
              registration={register('category')}
              error={formState.errors['category'] as any}
              defaultValue={guide?.category ?? null}
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
              defaultValue={guide?.town ?? null}
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
              defaultValue={guide?.email ?? ''}
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
              watch={watch}
              defaultValue={guide?.phoneNumber ?? ''}
              setValue={setValue}
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
              defaultValue={guide?.website ?? ''}
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
            name="addSocialMediaUrls"
            nameDeleted="deletedSocialMediaUrls"
            defaulValue={guide?.socialMediaUrls}
          />
          <MultipleImageField
            // registration={register('images')}
            key={'image-upload-media'}
            setValue={setValue}
            watch={watch}
            name={'addImages'}
            nameDeleted={'deletedImages'}
            imageType={'guide'}
            label={'images'}
            defaultValue={guide?.medias}
            inputStyle={{
              variant: 'auth',
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

export default EditGuideForm;
