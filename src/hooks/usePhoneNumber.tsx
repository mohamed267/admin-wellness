import { useState, useEffect } from 'react';
import { getCountry, COUNTRIES } from 'variables/countries';

type usePhoneNumberProps = {
  options: any;
  country: any;
  defaultValue: string;
};

const usePhoneNumber = ({
  options,
  country,
  defaultValue,
}: usePhoneNumberProps) => {
  const [number, setNumber] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<any>(
    { value: country } || {},
  );
  const [countryCode, setCountryCode] = useState(
    getCountry(country)?.phoneCode || '',
  );

  const handlePhoneNumberStruct = (value: string) => {
    COUNTRIES.forEach((country: any) => {
      if (
        country.phonecode === value.slice(0, 1) ||
        country.phonecode === value.slice(0, 2) ||
        country.phonecode === value.slice(0, 3) ||
        country.phonecode === value.slice(0, 4)
      ) {
        const optionCountry = options.find(
          (option: any) => option.value === country?.isoCode,
        );

        if (optionCountry) {
          setSelectedCountry(optionCountry);
          return;
        }
      }
    });
  };

  useEffect(() => {
    setSelectedCountry(country);
  }, [country]);

  useEffect(() => {
    const newCoutryCode = getCountry(selectedCountry?.value)?.phonecode;
    setCountryCode(newCoutryCode);
  }, [selectedCountry]);

  useEffect(() => {
    setNumber(defaultValue);
  }, [defaultValue]);

  const onCountryChange = (option: any) => {
    const newCoutryCode = getCountry(option?.value)?.phonecode;

    console.log('new country code is  ', newCoutryCode);

    if (
      number &&
      (number.slice(0) === countryCode ||
        number.slice(1) === countryCode ||
        number.slice(2) === countryCode ||
        number.slice(3) === countryCode)
    ) {
      setNumber(number.replace(countryCode, newCoutryCode));
    } else {
      setNumber(newCoutryCode);
    }
    setSelectedCountry(option);
  };

  const onPhoneNumberChange = (e: any) => {
    const value = e.target.value;
    handlePhoneNumberStruct(value);
    setNumber(value);
  };

  return {
    number,
    selectedCountry,
    onCountryChange,
    onPhoneNumberChange,
  };
};

export default usePhoneNumber;
