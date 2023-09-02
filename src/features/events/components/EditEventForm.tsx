import { z } from 'zod';
import { Button, HStack, Flex, Text } from '@chakra-ui/react';
import Form from 'components/form/Form';
import InputField from 'components/form/InputField';
// import TextEditorfield from 'components/form/TextEditorfield';
import SelectAsyncFieldComponent from 'components/form/SelectAsyncFieldComponent';
import { searchEventCategories } from 'features/global/api/searchEventCategories';
import { searchTowns } from 'features/global/api/searchTowns';
import MultipleImageField from 'components/form/MultipleImageField';
import { Media } from 'features/global';
import { FormattedMessage } from 'react-intl';
// import CalandarRangeField from 'components/form/CalandarRangeField';
import { useParams } from 'react-router-dom';
import CalendarRange from './form/CalendarRange';
import TimePeriods from './form/TimePeriods';
import TimeIntervalls from './form/TimeIntervalls';
import { extractLatLongFromGoogleMapsUrl } from 'utils/map';
import { useEvent } from '../api/getEvent';
import uuid from 'react-uuid';
import If from 'common/If';
import { useEditEvent } from '../api/editEvent';
// import { safingEditorOutput } from 'utils/editor';
// import EventTimesIntervalesField from 'components/form/EventTimesIntervalesField';

const mapsLinkPattern = /@(-?\d+\.\d+),(-?\d+\.\d+)/;

const schemaEvent = z.object({
  title: z.any(),
  description: z.any(),
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
  deletedImages: z.any(),
  mapsLink: z.string().refine((value) => mapsLinkPattern.test(value), {
    message: 'Invalid Google Maps link format',
  }),
  rangeBooking: z.any(),
  timingIntervalls: z.any(),
  selecetdRange: z.any(),
  periods: z.any(),
});

type IEditEventForm = {
  title: string;
  selecetdRange: any;
  mapsLink: string;
  description: any;
  category: any;
  town: any;
  images: Media[];
  deletedImages: Media[];
  rangeBooking: any;
  timingIntervalls: any;
  periods: any;
};

const EditEventForm = () => {
  const { eventId } = useParams();
  const { data: event } = useEvent({
    eventId,
  });
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    mutate: editEvent,
    isLoading: isUpdatingEvent,
  } = useEditEvent();

  const handleUpdateEvent = async (eventData: IEditEventForm) => {
    const {
      images,
      periods,
      town,
      category,
      mapsLink,
      description,
      deletedImages,
      ...snapData
    } = eventData;

    const addMedias = [...images];
    const deletedMedias = [...(deletedImages ?? [])];
    const address = extractLatLongFromGoogleMapsUrl(mapsLink);

    const data = {
      ...snapData,
      addMedias: addMedias?.filter((image: Media) => image?.isNew),
      deletedMedias,
      town: town?.name ?? '',
      category: category?.name ?? '',
      periods: periods ?? [],
      description: JSON.stringify(description ?? { blocks: [] }),
      ...address,
    };

    console.log('our data is  => ', data);
    eventId && editEvent({ eventId, data });
  };

  return (
    <Form<IEditEventForm, typeof schemaEvent>
      schema={schemaEvent}
      onSubmit={handleUpdateEvent}
    >
      {({ register, formState, setValue, watch }) => (
        <If condition={event}>
          <Flex flexDirection="column" gap="20px">
            <HStack>
              <InputField
                registration={register('title')}
                error={formState.errors['title']}
                defaultValue={event?.title}
                label={'eventTilte'}
                inputStyle={{
                  variant: 'primary',
                  fontSize: 'xs',
                  size: 'lg',
                  fontWeight: 'normal',
                }}
              />

              {/* {event?.latitude && event?.longtitude && ( */}
              <InputField
                registration={register('mapsLink')}
                error={formState.errors['mapsLink']}
                label={'mapsLink'}
                key={event?.latitude ?? uuid()}
                inputStyle={{
                  variant: 'primary',
                  fontSize: 'xs',
                  size: 'lg',
                  fontWeight: 'normal',
                }}
                defaultValue={
                  event?.latitude && event?.longtitude
                    ? `https://www.google.com/maps/place/M%C3%A9d%C3%A9a/@${event?.latitude},${event?.longtitude}`
                    : ''
                }
              />
              {/* )} */}
            </HStack>

            {/* <TextEditorfield
              key={`description--${event?.id ?? uuid()}`}
              registration={register('description')}
              // error={formState.errors['description']}
              setValue={setValue}
              label={'description'}
              holder={`description-${event?.id ?? uuid()}`}
              placeholder=""
              w="100%"
              h="200px"
              defaultData={safingEditorOutput(
                JSON.parse(event?.description ?? '{}'),
              )}
            /> */}

            <HStack justifyContent="space-between" columnGap="10px">
              <SelectAsyncFieldComponent
                registration={register('category')}
                error={formState.errors['category'] as any}
                label={'category'}
                loadOptions={(search: string) =>
                  searchEventCategories(search ? { search } : {})
                }
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
                defaultValue={event?.category}
              />

              <SelectAsyncFieldComponent
                registration={register('town')}
                error={formState.errors['town'] as any}
                label={'city'}
                loadOptions={(town: string) =>
                  searchTowns(town ? { town } : {})
                }
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
                defaultValue={event?.town}
              />
            </HStack>

            {/* <EventTimesIntervalesField
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
            <Flex gap="20px">
              <CalendarRange
                key={`range-${event?.id ?? uuid()}`}
                setValue={setValue}
                watch={watch}
                name={'selecetdRange'}
                selectedIntervalsName="selectedIntervals"
                periodsName="periods"
              />
              <TimeIntervalls
                setValue={setValue}
                watch={watch}
                name={'selectedIntervals'}
              />
            </Flex>
            <TimePeriods
              setValue={setValue}
              name={'periods'}
              watch={watch}
              selectedIntervalsName="selectedIntervals"
              selectedPeriodName="selecetdRange"
              defaultValue={event?.periods ?? []}
            />
            <MultipleImageField
              registration={register('images')}
              setValue={setValue}
              watch={watch}
              name={'images'}
              nameDeleted="deletedImages"
              imageType={'events'}
              label={'images'}
              key={`images-edit-${event?.id ?? uuid()}`}
              inputStyle={{
                variant: 'auth',
                fontSize: 'sm',
                size: 'lg',
                fontWeight: 600,
              }}
              defaultValue={event?.medias ?? []}
            />

            <Button
              variant="primaryFill"
              w="150px"
              borderRadius="xl"
              lineHeight="21px"
              fontWeight="500"
              fontSize="18px"
              type="submit"
              isLoading={isUpdatingEvent}
            >
              <Text
                _firstLetter={{
                  textTransform: 'capitalize',
                }}
              >
                <FormattedMessage id="save" />
              </Text>
            </Button>
          </Flex>
        </If>
      )}
    </Form>
  );
};

export default EditEventForm;
