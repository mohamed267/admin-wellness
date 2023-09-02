import { PropsWithChildren } from 'react';
import FieldWrapper, { FieldWrapperPassThroughProps } from './FieldWrapper';
import { Button, HStack, Stack, Text } from '@chakra-ui/react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import InputField from './InputField';
import NumberInputFieldComponent from './NumberInputField';
import { zodResolver } from '@hookform/resolvers/zod';

type EventTimesIntervalesFieldProps = FieldWrapperPassThroughProps & {
  registration: Partial<UseFormRegisterReturn>;
  inputStyle?: any;
  defaultValue?: any;
  type?: string;
  inputLeftAddon?: any;
  placeholder?: string;
  outlet?: any;
  buttonStyle: any;
  [rest: string]: any;
};

const schemaEventTime = z.object({
  endsIn: z.string(),
  beginsIn: z.string(),
  nbplaces: z.string(),
});

type IEventTimeForm = {
  endsIn: string;
  beginsIn: string;
  nbplaces: string;
};

const EventTimesIntervalesField = ({
  error,
  buttonStyle,
  label,
  inputStyle,
}: PropsWithChildren<EventTimesIntervalesFieldProps>) => {
  const {
    register,
    formState: { errors },
    setValue,
    // handleSubmit,
    ...rest
  } = useForm<IEventTimeForm>({
    resolver: schemaEventTime && zodResolver(schemaEventTime),
  });

  // const handleCreate = () => {
  //   alert('here');
  // };
  const handleAddTimeInterval = () => {
    console.log('data => ', rest);
    // handleSubmit(handleCreate)({

    // });
  };
  return (
    <FieldWrapper error={error} label={label}>
      <Stack spacing="20px">
        <HStack justifyContent="space-between" columnGap="10px">
          <InputField
            registration={register('beginsIn')}
            label={'dateFrom'}
            placeholder=""
            inputStyle={inputStyle}
          />

          <InputField
            registration={register('endsIn')}
            error={errors['endsIn']}
            label={'dateTo'}
            placeholder=""
            inputStyle={inputStyle}
          />

          <NumberInputFieldComponent
            registration={register('nbplaces')}
            error={errors['nbplaces']}
            setValue={setValue}
            label={'numberOfplaces'}
            placeholder=""
            inputStyle={inputStyle}
          />
        </HStack>

        <Button {...buttonStyle} onClick={handleAddTimeInterval}>
          <Text
            _firstLetter={{
              textTransform: 'capitalize',
            }}
          >
            <FormattedMessage id="addReservationDate" />
          </Text>
        </Button>
      </Stack>
    </FieldWrapper>
  );
};

export default EventTimesIntervalesField;
