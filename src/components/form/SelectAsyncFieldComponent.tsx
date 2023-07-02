import React, { useEffect } from "react";
import PropTypes from "prop-types";
import FieldWrapper, { FieldWrapperPassThroughProps } from "./FieldWrapper";

import { UseFormRegisterReturn } from "react-hook-form";

import { AsyncSelect } from "chakra-react-select";
import { useIntl } from "react-intl";

type InputFieldProps = FieldWrapperPassThroughProps & {
  registration: Partial<UseFormRegisterReturn>;
  inputStyle?: any;
  loadOptions: any;
  name: string;
  changed?: any;
  optionValue: string;
  defaultValue?: any;
  optionLabel: string;
  setValue: any;
  controlStyles?: any;
};

const SelectAsyncFieldComponent = ({
  registration,
  error,
  label,
  controlStyles = {
  },
  changed = () => {
    return;
  },
  name,
  setValue,
  defaultValue = null,
  loadOptions,
  optionValue,
  optionLabel,
}: InputFieldProps) => {
  const intl = useIntl();
  const loadOptionsLauncher = async (search: string) => {
    return new Promise<any[]>((resolve) => {
      setTimeout(() => {
        resolve(loadOptions(search));
      }, 1000);
    });
  };

  const handleChanges = (value: any) => {
    setValue(name, value);
    changed(value);
  };

  useEffect(() => {
    setValue(name, defaultValue);
  }, []);

  return (
    <FieldWrapper error={error} label={label}>
      <AsyncSelect
        {...registration}
        onChange={handleChanges}
        isInvalid={error ? true : false}
        cacheOptions
        defaultOptions
        loadOptions={loadOptionsLauncher}
        focusBorderColor="primary.500"
        selectedOptionColor="primary"
        options={[]}
        defaultValue={defaultValue}
        getOptionValue={(cell: any) => cell[optionValue]}
        getOptionLabel={(cell: any) => cell[optionLabel]}
        chakraStyles={{
          control: (provided: any, state: any) => ({
            ...provided,
            ...controlStyles,
          })
        }}
        placeholder={intl.formatMessage({id: "search..."})}
      />
    </FieldWrapper>
  );
};

export default SelectAsyncFieldComponent;
