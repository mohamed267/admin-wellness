import { Country } from 'country-state-city';

const COUNTRIES = Country.getAllCountries();

const getCountry: any = (country: string) => {
  return country && Country.getCountryByCode(country);
};

export { COUNTRIES, getCountry };
