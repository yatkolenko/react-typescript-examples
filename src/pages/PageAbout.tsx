import { useTranslation } from 'react-i18next';

const PageAbout = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-100">
      <header
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/about-hero.svg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex h-full items-center justify-center">
          <h1 className="text-5xl font-bold text-white md:text-6xl">{t('about.heroTitle')}</h1>
        </div>
      </header>

      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="mb-8 text-center text-3xl font-semibold">{t('about.header.title')}</h2>
        <p className="mb-8 text-center text-lg text-gray-600">{t('about.header.subtitle')}</p>
        <div className="space-y-8">
          <div>
            <h3 className="mb-2 text-2xl font-bold">{t('about.mission.title')}</h3>
            <p className="leading-relaxed text-gray-700">{t('about.mission.description')}</p>
          </div>
          <div>
            <h3 className="mb-2 text-2xl font-bold">{t('about.story.title')}</h3>
            <p className="leading-relaxed text-gray-700">{t('about.story.description')}</p>
            <p className="mt-4 leading-relaxed text-gray-700">{t('about.story.additional')}</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-center text-3xl font-semibold">{t('about.team.title')}</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center rounded-lg bg-gray-50 p-6 shadow-lg">
              <img
                src="/assets/team1.svg"
                alt={t('about.team.members.member1.name')}
                className="mb-4 h-32 w-32 rounded-full object-cover"
              />
              <h3 className="mb-1 text-xl font-bold">{t('about.team.members.member1.name')}</h3>
              <p className="text-gray-600">{t('about.team.members.member1.role')}</p>
            </div>

            <div className="flex flex-col items-center rounded-lg bg-gray-50 p-6 shadow-lg">
              <img
                src="/assets/team2.svg"
                alt={t('about.team.members.member2.name')}
                className="mb-4 h-32 w-32 rounded-full object-cover"
              />
              <h3 className="mb-1 text-xl font-bold">{t('about.team.members.member2.name')}</h3>
              <p className="text-gray-600">{t('about.team.members.member2.role')}</p>
            </div>

            <div className="flex flex-col items-center rounded-lg bg-gray-50 p-6 shadow-lg">
              <img
                src="/assets/team3.svg"
                alt={t('about.team.members.member3.name')}
                className="mb-4 h-32 w-32 rounded-full object-cover"
              />
              <h3 className="mb-1 text-xl font-bold">{t('about.team.members.member3.name')}</h3>
              <p className="text-gray-600">{t('about.team.members.member3.role')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PageAbout;
