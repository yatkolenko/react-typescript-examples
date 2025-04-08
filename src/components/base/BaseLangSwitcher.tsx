import { useTranslation } from 'react-i18next';
import { SupportedLanguage } from '@/models/models';
import BaseSelect from './BaseSelect';

const BaseLanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const changeLanguage = (lng: SupportedLanguage) => {
    i18n.changeLanguage(lng);
  };

  const languageOptions = [
    { value: 'en', label: t('locales.en') },
    { value: 'fr', label: t('locales.fr') },
    { value: 'ru', label: t('locales.ru') },
  ];

  return (
    <BaseSelect
      options={languageOptions}
      value={i18n.language}
      onChange={(e) => changeLanguage(e.target.value as SupportedLanguage)}
      dimension="sm"
      variant="outline"
      className="min-w-[120px]"
    />
  );
};

export default BaseLanguageSwitcher;
