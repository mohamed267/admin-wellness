import { PropsWithChildren } from 'react';
import FieldWrapper, { FieldWrapperPassThroughProps } from './FieldWrapper';
import { Editable, EditablePreview, EditableTextarea } from '@chakra-ui/react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { useIntl } from 'react-intl';
import { debounce } from 'lodash';
import { defaultFn } from 'utils/functions';

type InputFieldProps = FieldWrapperPassThroughProps & {
  registration: Partial<UseFormRegisterReturn>;
  inputStyle?: any;
  defaultValue?: any;
  type?: string;
  onChange?: any;
  inputLeftAddon?: any;
  placeholder?: string;
  outlet?: any;
  textStyle?: any;
  [rest: string]: any;
};

const EditableTextareaField = ({
  registration,
  error,
  label,
  defaultValue = '',
  placeholder = '',
  onChange = defaultFn,
  textStyle = {},
  ...rest
}: PropsWithChildren<InputFieldProps>) => {
  const int1 = useIntl();

  const handleChange = (value: string) => {
    debounce(
      onChange({
        [registration.name as any]: value,
      }),
      400,
    );
  };
  return (
    <FieldWrapper error={error} label={label}>
      <Editable
        placeholder={placeholder ? int1.formatMessage({ id: placeholder }) : ''}
        py={2}
        fontSize="sm"
        {...rest}
        onChange={handleChange}
        defaultValue={defaultValue}
      >
        <EditableTextarea {...registration} />
        <EditablePreview fontSize="3xl" {...textStyle} />
      </Editable>
    </FieldWrapper>
  );
};

export default EditableTextareaField;
