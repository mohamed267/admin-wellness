import { useEffect } from 'react';
import FieldWrapper, { FieldWrapperPassThroughProps } from './FieldWrapper';

import { UseFormRegisterReturn } from 'react-hook-form';

import { Select } from 'chakra-react-select';

type InputFieldProps = FieldWrapperPassThroughProps & {
  registration: Partial<UseFormRegisterReturn>;
  inputStyle?: any;
  name: string;
  changed?: any;
  optionValue?: string;
  defaultValue?: any;
  optionLabel?: string;
  setValue?: any;
  controlStyles?: any;
  options?: any[];
  isMulti?: boolean;
  placeholder?: string;
};

const SelectField = ({
  registration,
  error,
  label,
  controlStyles = {},
  changed = () => {
    return;
  },
  name,
  setValue,
  defaultValue = null,
  optionValue,
  optionLabel,
  options = [],
  isMulti = false,
  placeholder = '',
}: InputFieldProps) => {
  const handleChanges = (value: any) => {
    setValue(name, value);
    changed(value);
  };

  useEffect(() => {
    setValue(name, defaultValue);
  }, []);

  return (
    <FieldWrapper error={error} label={label}>
      <Select
        {...registration}
        onChange={handleChanges}
        isInvalid={error ? true : false}
        options={options ?? []}
        focusBorderColor="primary.500"
        selectedOptionColorScheme="primary"
        defaultValue={defaultValue}
        getOptionValue={(cell: any) => cell[optionValue ?? 'id']}
        getOptionLabel={(cell: any) => cell[optionLabel ?? 'label']}
        isMulti={isMulti}
        placeholder={placeholder ?? ''}
        chakraStyles={{
          control: (provided: any) => ({
            ...provided,
            ...controlStyles,
          }),
          menu: (provider: any) => ({
            ...provider,
            zIndex: 10000000,
          }),
        }}
      />
    </FieldWrapper>
  );
};

export default SelectField;
