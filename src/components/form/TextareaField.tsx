import React, { PropsWithChildren } from 'react';
import FieldWrapper, { FieldWrapperPassThroughProps } from './FieldWrapper';
import { InputGroup, Textarea } from '@chakra-ui/react';

import { UseFormRegisterReturn } from 'react-hook-form';
import { useIntl } from 'react-intl';
type InputFieldProps = FieldWrapperPassThroughProps & {
  registration: Partial<UseFormRegisterReturn>;
  inputStyle?: any;
  defaultValue?: string;
  placeholder?: string;
  inputLeftElement?: any;
  inputRightElement?: any;
  [rest: string]: any;
};

const TextAreaField = ({
  registration,
  error,
  label,
  defaultValue = '',
  inputStyle = {},
  placeholder = '',
  children,
  ...rest
}: PropsWithChildren<InputFieldProps>) => {
  const int1 = useIntl();
  return (
    <FieldWrapper error={error} label={label}>
      <InputGroup {...inputStyle} type="password">
        {children}

        <Textarea
          {...registration}
          {...inputStyle}
          defaultValue={defaultValue}
          placeholder={
            placeholder ? int1.formatMessage({ id: placeholder }) : ''
          }
          {...rest}
        />
      </InputGroup>
    </FieldWrapper>
  );
};

export default TextAreaField;
