import { useEffect } from 'react';
import FieldWrapper, { FieldWrapperPassThroughProps } from './FieldWrapper';

import { UseFormRegisterReturn } from 'react-hook-form';

import { CreatableSelect } from 'chakra-react-select';
import { useIntl } from 'react-intl';

type InputFieldProps = FieldWrapperPassThroughProps & {
  registration: Partial<UseFormRegisterReturn>;
  inputStyle?: any;
  name: string;
  changed?: any;
  optionValue?: string;
  defaultValue?: any;
  optionLabel?: string;
  setValue: any;
  controlStyles?: any;
  isMulti?: boolean;
};

const SelectAsyncFieldComponent = ({
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
  optionValue = 'value',
  optionLabel = 'label',
  isMulti = false,
}: InputFieldProps) => {
  const intl = useIntl();

  const handleChanges = (value: any) => {
    setValue(name, value);
    changed(value);
  };

  useEffect(() => {
    if (defaultValue) {
      setValue(name, defaultValue);
    }
  }, []);

  return (
    <FieldWrapper error={error} label={label}>
      <CreatableSelect
        {...registration}
        onChange={handleChanges}
        isInvalid={error ? true : false}
        focusBorderColor="primary.500"
        selectedOptionColorScheme="primary"
        options={[]}
        isMulti={isMulti}
        defaultValue={defaultValue}
        getOptionValue={(cell: any) => cell[optionValue]}
        getOptionLabel={(cell: any) => cell[optionLabel]}
        chakraStyles={{
          control: (provided: any) => ({
            ...provided,
            ...controlStyles,
          }),
        }}
        placeholder={intl.formatMessage({ id: 'search...' })}
      />
    </FieldWrapper>
  );
};

export default SelectAsyncFieldComponent;
