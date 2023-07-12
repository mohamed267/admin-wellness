import FieldWrapper, { FieldWrapperPassThroughProps } from './FieldWrapper';
import { Flex, PinInput, PinInputField } from '@chakra-ui/react';
import { UseFormRegisterReturn } from 'react-hook-form';

type InputFieldProps = FieldWrapperPassThroughProps & {
  registration: Partial<UseFormRegisterReturn>;
  pinStyle?: any;
  defaultValue?: any;
  type?: string;
  name?: string;
  setValue: any;
  onChange?: any;
};

const PinField = ({
  registration,
  error,
  label = '',
  name = '',
  setValue = () => {},
  pinStyle = {},
  onChange = () => {},
}: InputFieldProps) => {
  const handleChanges = (value: any) => {
    setValue(name, value);
    onChange(value);
  };

  return (
    <FieldWrapper error={error} label={label}>
      <Flex justifyContent={'center'} gap={4} py={5} mb={10} dir="ltr">
        <PinInput // onChange={handleChangePin}
          {...registration}
          onChange={handleChanges}
          // error={formState.errors['phoneNumber']}
        >
          <PinInputField {...pinStyle} />
          <PinInputField {...pinStyle} />
          <PinInputField {...pinStyle} />
          <PinInputField {...pinStyle} />
          <PinInputField {...pinStyle} />
          <PinInputField {...pinStyle} />
        </PinInput>
      </Flex>
    </FieldWrapper>
  );
};

export default PinField;
