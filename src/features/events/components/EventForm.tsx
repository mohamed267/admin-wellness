import { useEffect } from 'react';
import { z } from 'zod';
import { Button, HStack, Flex, Text } from '@chakra-ui/react';
import Form from 'components/form/Form';
import InputField from 'components/form/InputField';
import TextEditorfield from 'components/form/TextEditorfield';
import SelectAsyncFieldComponent from 'components/form/SelectAsyncFieldComponent';
import { searchEventCategories } from 'features/global/api/searchEventCategories';
import { searchTowns } from 'features/global/api/searchTowns';
import MultipleImageField from 'components/form/MultipleImageField';
import { Media } from 'features/global';
// import MultipleVideoField from 'components/form/MultipleVideoField';
import { FormattedMessage } from 'react-intl';
// import CalandarRangeField from 'components/form/CalandarRangeField';

import { useCreateEvent } from '../api/createEvent';
import { useNavigate } from 'react-router-dom';
import CalendarRange from './form/CalendarRange';
import TimePeriods from './form/TimePeriods';
import TimeIntervalls from './form/TimeIntervalls';
import { extractLatLongFromGoogleMapsUrl } from 'utils/map';
import { safingEditorOutput } from 'utils/editor';
// import EventTimesIntervalesField from 'components/form/EventTimesIntervalesField';

const mapsLinkPattern = /@(-?\d+\.\d+),(-?\d+\.\d+)/;

const schemaEvent = z.object({
  title: z.string(),
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
  mapsLink: z.string().refine((value) => mapsLinkPattern.test(value), {
    message: 'invalidGoogleMapLink',
  }),
  // videos: z.any(),
  rangeBooking: z.any(),
  timingIntervalls: z.any(),
  selecetdRange: z.any(),
  periods: z.any(),
});

type IEventForm = {
  title: string;
  selecetdRange: any;
  mapsLink: string;
  description: any;
  category: any;
  town: any;
  images: Media[];
  // videos: Media[];
  rangeBooking: any;
  timingIntervalls: any;
  periods: any;
};

const EventForm = () => {
  const navigate = useNavigate();
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    mutate: createEvent,
    isLoading: isCreatingEvent,
    isSuccess: isEventCreated,
  } = useCreateEvent();

  useEffect(() => {
    if (isEventCreated) {
      navigate('/events');
    }
  }, [isEventCreated, navigate]);

  const handleCreateEvent = async (eventData: IEventForm) => {
    const {
      images,
      periods,
      town,
      category,
      // videos,
      mapsLink,
      description,
      ...snapData
    } = eventData;

    const medias = [...images];
    const address = extractLatLongFromGoogleMapsUrl(mapsLink);

    const data = {
      ...snapData,
      medias,
      town: town?.name ?? '',
      category: category?.name ?? '',
      periods: periods ?? [],
      description: JSON.stringify(safingEditorOutput(description)),
      ...address,
    };

    createEvent(data);
  };

  return (
    <Form<IEventForm, typeof schemaEvent>
      schema={schemaEvent}
      onSubmit={handleCreateEvent}
    >
      {({ register, formState, setValue, watch }) => (
        <Flex flexDirection="column" gap="20px">
          <HStack>
            <InputField
              registration={register('title')}
              error={formState.errors['title']}
              label={'eventTilte'}
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
          />
          <MultipleImageField
            // registration={register('images')}
            key={'image-upload-media'}
            setValue={setValue}
            watch={watch}
            name={'images'}
            imageType={'events'}
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
            videoType={'events'}
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
            isLoading={isCreatingEvent}
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

EventForm.propTypes = {};

export default EventForm;
