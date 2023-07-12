import { PropsWithChildren } from 'react';
import FieldWrapper, { FieldWrapperPassThroughProps } from './FieldWrapper';
import {
  Editable,
  EditableInput,
  EditablePreview,
  Stack,
} from '@chakra-ui/react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { useIntl } from 'react-intl';
import { defaultFn } from 'utils/functions';
import { debounce } from 'lodash';

type InputFieldProps = FieldWrapperPassThroughProps & {
  registration: Partial<UseFormRegisterReturn>;
  inputStyle?: any;
  defaultValue?: any;
  type?: string;
  inputLeftAddon?: any;
  placeholder?: string;
  onChange?: any;
  outlet?: any;
  [rest: string]: any;
};

const EditableInputField = ({
  registration,
  error,
  label,
  defaultValue = '',
  placeholder = '',
  onChange = defaultFn,
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
    <Stack>
      <FieldWrapper error={error} label={label}>
        <Editable
          placeholder={
            placeholder ? int1.formatMessage({ id: placeholder }) : ''
          }
          py={2}
          fontSize="sm"
          {...rest}
          onChange={handleChange}
          defaultValue={defaultValue}
        >
          <EditableInput {...registration} />
          <EditablePreview fontSize="3xl" />
        </Editable>
      </FieldWrapper>
    </Stack>
  );
};

export default EditableInputField;
