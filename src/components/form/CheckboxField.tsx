import { PropsWithChildren, useState } from 'react';
import FieldWrapper, { FieldWrapperPassThroughProps } from './FieldWrapper';
import { Checkbox } from '@chakra-ui/react';
import { UseFormRegisterReturn } from 'react-hook-form';

type CheckboxFieldProps = FieldWrapperPassThroughProps & {
  registration: Partial<UseFormRegisterReturn>;
  inputStyle?: any;
  defaultValue?: any;
  setValue?: any;
  name?: string;
  checkboxLabel?: string;
  inputLeftAddon?: any;
  placeholder?: string;
  outlet?: any;
  onChange?: any;
  [rest: string]: any;
};

const CheckboxField = ({
  error,
  label,
  setValue = () => {},
  name = '',
  onChange = () => {},
  children,
}: PropsWithChildren<CheckboxFieldProps>) => {
  const [checked, setChecked] = useState(false);

  const handleToogleCheckox = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    setValue(name, newChecked);
    onChange(newChecked);
  };

  return (
    <FieldWrapper error={error} label={label}>
      <Checkbox
        onChange={handleToogleCheckox}
        borderColor={error ? 'red.500' : 'gray.500'}
        spacing={3}
        size="lg"
        colorScheme={error ? 'red' : 'green'}
        checked={checked}
        borderRadius="xl"
        // defaultValue={defaultValue}
      >
        {children}
      </Checkbox>
    </FieldWrapper>
  );
};

export default CheckboxField;
