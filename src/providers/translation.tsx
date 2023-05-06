import { PropsWithChildren } from "react";
import { IntlProvider } from "react-intl";
import ar from "translations/ar.json";
import en from "translations/en.json";

const LOCALS = {
  en: "en",
  ar: "ar",
};

const TRANSLATIONS = {
  en,
  ar,
};

type TranslationProps = {
  locale: "ar" | "en";
};

const TranslationProvider = ({
  children,
  locale = "en",
}: PropsWithChildren<TranslationProps>) => {
  return (
    <IntlProvider messages={TRANSLATIONS[locale]} locale={LOCALS[locale]}>
      {children}
    </IntlProvider>
  );
};

export default TranslationProvider;
