import { useEffect } from 'react';
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  // Text,
  InputRightElement,
} from '@chakra-ui/react';
import { UseFormRegisterReturn } from 'react-hook-form';
import FieldWrapper, { FieldWrapperPassThroughProps } from './FieldWrapper';
import Switcher from 'common/Switcher';
import { useIntl } from 'react-intl';
import usePhoneNumber from 'hooks/usePhoneNumber';
import { AsyncSelect } from 'chakra-react-select';
type InputFieldProps = FieldWrapperPassThroughProps & {
  registration: Partial<UseFormRegisterReturn>;
  inputStyle?: any;
  defaultValue?: any;
  options?: any;
  size?: string;
  setValue: any;
  name: string;
  countryCodeName?: string;
};

export default function PhoneNumberInputField({
  size,
  options,
  registration,
  defaultValue,
  setValue,
  name,
  error,
  label,
  countryCodeName = '',
  inputStyle = {},
}: InputFieldProps) {
  const intl = useIntl();
  const {
    number,
    onCountryChange,
    onPhoneNumberChange,
    countryCode,
    coutriesOptions,
  } = usePhoneNumber({
    options,
    country: options?.[0],
    defaultValue,
  });

  useEffect(() => {
    setValue(countryCodeName, countryCode);
  }, [countryCode, setValue, countryCodeName]);

  useEffect(() => {
    setValue(name, number);
  }, [number, name, setValue]);
  const handleChanges = (country: any) => {
    onCountryChange(country as any);
  };

  const filterCountries = (inputValue: string) => {
    const countries = coutriesOptions.filter(
      (i: any) =>
        i.name.toLowerCase().includes(inputValue.toLowerCase()) ||
        i.translatedName.toLowerCase().includes(inputValue.toLowerCase()) ||
        i.phoneCode.toLowerCase().includes(inputValue.toLowerCase()),
    );

    console.log('our countries is ', countries);

    return countries;
  };

  const loadOptionsLauncher = (inputValue: string) =>
    new Promise<any[]>((resolve) => {
      setTimeout(() => {
        resolve(filterCountries(inputValue));
      }, 1000);
    });

  return (
    <FieldWrapper error={error} label={label}>
      <InputGroup size={size} zIndex={800}>
        <Flex w="100%">
          <Switcher
            Left={InputLeftElement}
            Right={InputRightElement}
            style={{
              width: 150,
              h: '100%',
              px: 3,
            }}
          >
            <Box>
              <AsyncSelect
                {...registration}
                onChange={handleChanges}
                cacheOptions
                defaultOptions={coutriesOptions}
                loadOptions={loadOptionsLauncher}
                focusBorderColor="transparent"
                selectedOptionColorScheme="primary"
                errorBorderColor="transparent"
                components={{
                  NoOptionsMessage: () =>
                    intl.formatMessage({ id: 'noOptions' }),
                  LoadingMessage: () => intl.formatMessage({ id: 'loading' }),
                }}
                placeholder={intl.formatMessage({ id: 'theCountry' })}
                options={[]}
                // placeholder={placeholder}
                defaultValue={{
                  ...coutriesOptions?.[0],
                }}
                getOptionValue={(cell: any) => cell['value']}
                getOptionLabel={(cell: any) =>
                  `+(${cell['phoneCode']}) ${cell['translatedName']}`
                }
                chakraStyles={{
                  //TODO: pass appropriate  type
                  control: (provided: any) => ({
                    ...provided,
                    cursor: 'pointer',
                    fontSize: 'sm',
                    borderColor: 'transparent !important',
                    textTransform: 'capitalize',
                  }),
                  menu: (provided: any) => ({
                    ...provided,
                    w: '200px',
                    px: '10px',
                    textTransform: 'capitalize',
                    borderRadius: 'xl',
                  }),
                  dropdownIndicator: (provided) => ({
                    ...provided,
                    display: 'none',
                  }),
                }}
              />
            </Box>
            {/* <Text
              fontFamily="Cairo !important"
              fontWeight="bold"
              px="2px"
              fontSize="sm"
            >
              {countryCode}
            </Text> */}
          </Switcher>
          <Input
            ps="150px"
            {...registration}
            // type="tel"
            value={number}
            onChange={onPhoneNumberChange}
            // variant="auth"
            // border="1px solid"
            h={50}
            maxLength={9}
            minLength={9}
            onSubmit={() => {}}
            {...inputStyle}
            fontWeight="semibold"
            fontSize="sm"
            placeholder="XXXXXXXXX"
            autocomplete="off"
            fontFamily="Cairo, sans-serif !important"
          />
        </Flex>
      </InputGroup>
    </FieldWrapper>
  );
}

PhoneNumberInputField.defaultProps = {
  options: [
    { value: 'SA', name: 'saudi' },
    { value: 'DZ', name: 'algeria' },
    { value: 'FR', name: 'france' },
    { value: 'US', name: 'usa' },
  ],
  size: 'md',
  country: { value: 'DZ', name: 'algeria' },
};
