import { useEffect, useRef } from 'react';
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
  watch?: any;
  defaultValue?: any;
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
  watch = defaultFn,
  defaultValue = '',
  ...rest
}: NumberInputFieldProps) => {
  const value = watch?.(registration?.name) ?? '';
  const inputRef = useRef<any>(null);

  const int1 = useIntl();

  const changeValue = (newValue: any) => {
    let value = newValue;
    if (min !== undefined && value < min) {
      value = min;
    }

    if (max !== undefined && max < value) {
      value = max;
    }

    if (nonDouble) {
      value = parseInt(value);
    }

    // console.log('cur => ', inputRef?.current);
    inputRef.current.value = value;
    setValue(registration?.name, value);
  };

  const handleChangeValue = (e: any) => {
    const value = e?.target?.value;
    changeValue(value);
  };

  useEffect(() => {
    defaultValue && changeValue(defaultValue);
  }, [inputRef, defaultValue]);

  return (
    <FieldWrapper error={error} label={label}>
      <NumberInput value={value} {...inputStyle}>
        <NumberInputField
          py={2}
          fontSize="sm"
          defaultValue={'2233'}
          {...registration}
          ref={inputRef}
          onChange={handleChangeValue}
          value={value}
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
