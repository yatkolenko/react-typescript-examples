import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { SupportedLanguage } from '@/models/models.ts';

const SUPPORTED_LANGUAGES: SupportedLanguage[] = ['en', 'ru', 'fr'];
const DEFAULT_LANGUAGE: SupportedLanguage = 'en';

const getInitialLanguage = (): SupportedLanguage => {
  const savedLang = localStorage.getItem('i18nextLng') as SupportedLanguage | null;
  if (savedLang && SUPPORTED_LANGUAGES.includes(savedLang)) {
    return savedLang;
  }

  const browserLang = navigator.language.split('-')[0].toLowerCase() as SupportedLanguage;
  if (SUPPORTED_LANGUAGES.includes(browserLang)) {
    return browserLang;
  }

  return DEFAULT_LANGUAGE;
};

interface I18nConfig {
  fallbackLng: SupportedLanguage;
  lng: SupportedLanguage;
  supportedLngs: SupportedLanguage[];
  interpolation: {
    escapeValue: boolean;
  };
  detection: {
    order: Array<'localStorage' | 'navigator' | 'htmlTag'>;
    caches: Array<'localStorage'>;
  };
  backend: {
    loadPath: string;
  };
}

const config: I18nConfig = {
  fallbackLng: DEFAULT_LANGUAGE,
  lng: getInitialLanguage(),
  supportedLngs: SUPPORTED_LANGUAGES,
  interpolation: {
    escapeValue: false,
  },
  detection: {
    order: ['localStorage', 'navigator'],
    caches: ['localStorage'],
  },
  backend: {
    loadPath: '/locales/{{lng}}.json',
  },
};

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init(config);

export default i18n;
