import { createContext, useContext, useMemo, useState } from "react";

export type Language = "es" | "en";

type Translations = {
  heroTitle: string;
  heroDescription: string;
  languageSelectorLabel: string;
  languageOptionEs: string;
  languageOptionEn: string;
  emailPlaceholder: string;
  subscribeLabel: string;
  invalidEmailTitle: string;
  invalidEmailDescription: string;
  successTitle: string;
  successDescription: string;
};

const translations: Record<Language, Translations> = {
  es: {
    heroTitle: "Mariposa Morpho",
    heroDescription:
      "Experimenta la belleza de la naturaleza en un impresionante 3D. Suscríbete para conocer más sobre nuestra próxima colección.",
    languageSelectorLabel: "Seleccionar idioma",
    languageOptionEs: "Español",
    languageOptionEn: "English",
    emailPlaceholder: "Ingresa tu correo",
    subscribeLabel: "Suscribirme",
    invalidEmailTitle: "Correo inválido",
    invalidEmailDescription: "Ingresa un correo electrónico válido.",
    successTitle: "¡Listo!",
    successDescription: "Gracias por tu interés. ¡Te contactaremos pronto!",
  },
  en: {
    heroTitle: "Morpho Butterfly",
    heroDescription:
      "Experience the beauty of nature in stunning 3D. Subscribe to learn more about our upcoming collection.",
    languageSelectorLabel: "Select language",
    languageOptionEs: "Español",
    languageOptionEn: "English",
    emailPlaceholder: "Enter your email",
    subscribeLabel: "Subscribe",
    invalidEmailTitle: "Invalid email",
    invalidEmailDescription: "Please enter a valid email address.",
    successTitle: "Success!",
    successDescription: "Thank you for your interest. We'll be in touch soon!",
  },
};

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translations;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>("es");

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language],
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
