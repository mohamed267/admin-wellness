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
  previewSyle?: any;
  defaultValue?: any;
  type?: string;
  inputLeftAddon?: any;
  placeholder?: string;
  outlet?: any;
  setValue?: any;
  onChange?: any;
  [rest: string]: any;
};

const EditableNumberField = ({
  registration,
  error,
  label,
  defaultValue,
  placeholder = '',
  setValue = defaultFn,
  onChange = defaultFn,
  previewSyle = {},
  ...rest
}: PropsWithChildren<InputFieldProps>) => {
  const int1 = useIntl();

  const handleChangeValue = (e: any) => {
    const value = Number(e) ? Number(e) : 0;

    setValue(registration?.name as string, value);
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
          fontSize="xl"
          {...rest}
          onChange={handleChangeValue}
          defaultValue={defaultValue}
        >
          <EditableInput {...registration} />
          <EditablePreview fontSize="3xl" {...previewSyle} />
        </Editable>
      </FieldWrapper>
    </Stack>
  );
};

export default EditableNumberField;
