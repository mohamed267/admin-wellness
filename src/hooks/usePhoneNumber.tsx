import { useState, useEffect } from 'react';
import { getCountry } from 'consts/countries';
import { useIntl } from 'react-intl';

type usePhoneNumberProps = {
  options: any;
  country: any;
  defaultValue: string;
};

const usePhoneNumber = ({
  country,
  defaultValue,
  options,
}: usePhoneNumberProps) => {
  const intl = useIntl();
  const [number, setNumber] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<any>(
    { value: country } || {},
  );
  const [countryCode, setCountryCode] = useState(
    getCountry(country)?.phoneCode || '',
  );

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
    setCountryCode(newCoutryCode);
    setSelectedCountry(option);
  };

  const onPhoneNumberChange = (e: any) => {
    const value = e.target.value;

    console.log('our value going is  => ', value);

    const transformedNumber = +parseInt(value);

    console.log('our value going is transformedNumber  => ', transformedNumber);
    if (Number.isNaN(transformedNumber)) {
      setNumber('');
    } else {
      if (transformedNumber < 1000000000) {
        setNumber(`${transformedNumber}`);
      }
    }
  };

  return {
    number,
    selectedCountry,
    onCountryChange,
    onPhoneNumberChange,
    countryCode,
    coutriesOptions:
      options?.map((country: any) => ({
        ...country,
        translatedName: intl.formatMessage({ id: country?.name }),
        phoneCode: getCountry(country?.value)?.phonecode,
      })) ?? [],
  };
};

export default usePhoneNumber;
