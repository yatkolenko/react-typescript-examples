import { useTranslation } from 'react-i18next';

const PageHome = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900">{t('home.title')}</h1>
        <p className="mt-4 text-lg text-gray-600">{t('home.subtitle')}</p>
      </header>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">{t('home.features.title')}</h2>
        <p className="leading-relaxed text-gray-700">{t('home.features.description')}</p>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">{t('home.cta.title')}</h2>
        <p className="leading-relaxed text-gray-700">{t('home.cta.description')}</p>
      </section>
    </div>
  );
};

export default PageHome;
