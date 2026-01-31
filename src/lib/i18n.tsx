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
  // New sections for monarch tracker
  journeyTitle: string;
  journeySubtitle: string;
  lifeCycleTitle: string;
  lifeCycleContent: string;
  migrationTitle: string;
  migrationContent: string;
  threatsTitle: string;
  threatsContent: string;
  extinctionStats: string;
  conservationTitle: string;
  conservationContent: string;
  actionsTitle: string;
  action1: string;
  action2: string;
  action3: string;
  action4: string;
  footerText: string;
};

const translations: Record<Language, Translations> = {
  es: {
    heroTitle: "El Viaje de la Mariposa Monarca",
    heroDescription:
      "Desde el nacimiento en Canadá hasta el invierno en México: sigue el viaje épico de 4,000 km de la mariposa monarca. Una especie amenazada que necesita nuestra ayuda para sobrevivir.",
    languageSelectorLabel: "Seleccionar idioma",
    languageOptionEs: "Español",
    languageOptionEn: "English",
    emailPlaceholder: "Ingresa tu correo",
    subscribeLabel: "Suscribirme",
    invalidEmailTitle: "Correo inválido",
    invalidEmailDescription: "Ingresa un correo electrónico válido.",
    successTitle: "¡Listo!",
    successDescription: "Gracias por tu interés. ¡Te contactaremos pronto!",
    journeyTitle: "El Viaje Épico",
    journeySubtitle: "Descubre el ciclo de vida y la migración extraordinaria de la mariposa monarca",
    lifeCycleTitle: "Ciclo de Vida",
    lifeCycleContent: "La mariposa monarca comienza como huevo en una hoja de algodoncillo. En 4-6 semanas, pasa por larva, pupa y emerge como adulto con alas naranjas distintivas.",
    migrationTitle: "La Gran Migración",
    migrationContent: "Cada otoño, millones de monarcas viajan 4,000 km desde Canadá y EE.UU. hasta los bosques de pino en México. Una generación completa el viaje de ida y vuelta.",
    threatsTitle: "La Crisis",
    threatsContent: "La población ha disminuido un 80% desde los años 90. La pérdida de hábitat, pesticidas y cambio climático amenazan su supervivencia. En 2022, fue declarada en peligro de extinción.",
    extinctionStats: "80% de disminución poblacional • 4,000 km de migración • 4 generaciones por año",
    conservationTitle: "Conservación",
    conservationContent: "Los bosques de oyamel en México son cruciales para el invierno. Programas de reforestación y protección de hábitat están ayudando, pero se necesita más acción.",
    actionsTitle: "¿Qué Puedes Hacer?",
    action1: "Planta algodoncillo en tu jardín para proporcionar alimento y hábitat",
    action2: "Evita pesticidas que matan a las mariposas y sus larvas",
    action3: "Participa en conteos ciudadanos de monarcas",
    action4: "Apoya organizaciones de conservación como WWF o Monarch Joint Venture",
    footerText: "Únete a la lucha por preservar la mariposa monarca. Cada acción cuenta.",
  },
  en: {
    heroTitle: "The Monarch Butterfly Journey",
    heroDescription:
      "From birth in Canada to wintering in Mexico: follow the epic 4,000 km journey of the monarch butterfly. An endangered species that needs our help to survive.",
    languageSelectorLabel: "Select language",
    languageOptionEs: "Español",
    languageOptionEn: "English",
    emailPlaceholder: "Enter your email",
    subscribeLabel: "Subscribe",
    invalidEmailTitle: "Invalid email",
    invalidEmailDescription: "Please enter a valid email address.",
    successTitle: "Success!",
    successDescription: "Thank you for your interest. We'll be in touch soon!",
    journeyTitle: "The Epic Journey",
    journeySubtitle: "Discover the life cycle and extraordinary migration of the monarch butterfly",
    lifeCycleTitle: "Life Cycle",
    lifeCycleContent: "The monarch butterfly begins as an egg on a milkweed leaf. In 4-6 weeks, it goes through larva, pupa, and emerges as an adult with distinctive orange wings.",
    migrationTitle: "The Great Migration",
    migrationContent: "Each fall, millions of monarchs travel 4,000 km from Canada and the US to pine forests in Mexico. One generation completes the round trip.",
    threatsTitle: "The Crisis",
    threatsContent: "The population has declined 80% since the 1990s. Habitat loss, pesticides, and climate change threaten their survival. In 2022, it was declared endangered.",
    extinctionStats: "80% population decline • 4,000 km migration • 4 generations per year",
    conservationTitle: "Conservation",
    conservationContent: "The oyamel fir forests in Mexico are crucial for wintering. Reforestation and habitat protection programs are helping, but more action is needed.",
    actionsTitle: "What You Can Do",
    action1: "Plant milkweed in your garden to provide food and habitat",
    action2: "Avoid pesticides that kill butterflies and their larvae",
    action3: "Participate in citizen monarch counts",
    action4: "Support conservation organizations like WWF or Monarch Joint Venture",
    footerText: "Join the fight to preserve the monarch butterfly. Every action counts.",
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
