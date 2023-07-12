import { useIntl } from 'react-intl';

export const useDirection = () => {
  const { locale } = useIntl();

  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return { dir };
};
