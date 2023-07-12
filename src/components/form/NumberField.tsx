import FieldWrapper, { FieldWrapperPassThroughProps } from './FieldWrapper';
import { NumberInput, NumberInputField } from '@chakra-ui/react';

import { UseFormRegisterReturn } from 'react-hook-form';
import { useIntl } from 'react-intl';

type NumberInputFieldProps = FieldWrapperPassThroughProps & {
  registration: Partial<UseFormRegisterReturn>;
  inputStyle?: any;
  placeholder?: string;
};

const NumberField = ({
  registration,
  error,
  label,
  inputStyle = {},
  placeholder = '',
  ...rest
}: NumberInputFieldProps) => {
  const int1 = useIntl();
  return (
    <FieldWrapper error={error} label={label}>
      <NumberInput {...inputStyle}>
        <NumberInputField
          {...registration}
          {...rest}
          placeholder={
            placeholder ? int1.formatMessage({ id: placeholder }) : ''
          }
        />
      </NumberInput>
    </FieldWrapper>
  );
};

export default NumberField;
