import { useRef } from 'react';
import FieldWrapper, { FieldWrapperPassThroughProps } from './FieldWrapper';
import { NumberInput, NumberInputField } from '@chakra-ui/react';

import { UseFormRegisterReturn } from 'react-hook-form';
import { useIntl } from 'react-intl';
import { defaultFn } from 'utils/functions';

type NumberInputFieldProps = FieldWrapperPassThroughProps & {
  registration: Partial<UseFormRegisterReturn>;
  inputStyle?: any;
  placeholder?: string;
  min?: number;
  max?: number;
  nonDouble?: boolean;
  setValue?: any;
  [rest: string]: any;
};

const NumberInputFieldComponent = ({
  registration,
  placeholder = '',
  error,
  label,
  inputStyle = {},
  min = undefined,
  max = undefined,
  nonDouble = false,
  setValue = defaultFn,
  ...rest
}: NumberInputFieldProps) => {
  const inputRef = useRef<any>(null);

  const int1 = useIntl();

  const handleChangeValue = (e: any) => {
    let value = e?.target?.value;

    if (min !== undefined && value < min) {
      value = min;
    }

    if (max !== undefined && max < value) {
      value = max;
    }

    if (nonDouble) {
      value = parseInt(value);
    }

    inputRef.current.value = value;
    setValue(registration?.name, value);
  };

  return (
    <FieldWrapper error={error} label={label}>
      <NumberInput {...inputStyle} min={0} max={100} keepWithinRange={true}>
        <NumberInputField
          py={2}
          fontSize="sm"
          {...registration}
          ref={inputRef}
          onChange={handleChangeValue}
          placeholder={
            placeholder ? int1.formatMessage({ id: placeholder }) : ''
          }
          {...rest}
        />
      </NumberInput>
    </FieldWrapper>
  );
};

export default NumberInputFieldComponent;
