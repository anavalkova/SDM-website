import { useTranslation } from 'react-i18next'

const values = [
  { emoji: '🎯', key: '1' },
  { emoji: '🇧🇬', key: '2' },
  { emoji: '📈', key: '3' },
]

export default function About() {
  const { t } = useTranslation()

  return (
    <>
      {/* ── HERO ── */}
      <section className="hero-gradient text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{t('about.h1')}</h1>
          <p className="text-blue-200 text-lg">{t('about.sub')}</p>
        </div>
      </section>

      {/* ── STORY + STATS ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
          <div>
            <h2 className="text-3xl font-bold text-sdm-navy mb-6">{t('about.story.title')}</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">{t('about.story.p1')}</p>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">{t('about.story.p2')}</p>
            <p className="text-gray-500 text-sm leading-relaxed">{t('about.story.p3')}</p>
          </div>
          <div className="bg-sdm-light rounded-2xl p-8 space-y-7">
            <div>
              <div className="text-4xl font-black text-sdm-blue">2024</div>
              <div className="text-gray-400 text-sm mt-1">{t('about.stats.founded')}</div>
            </div>
            <div>
              <div className="text-4xl font-black text-sdm-blue">100%</div>
              <div className="text-gray-400 text-sm mt-1">{t('about.stats.cloud')}</div>
            </div>
            <div>
              <div className="text-4xl font-black text-sdm-blue">EU</div>
              <div className="text-gray-400 text-sm mt-1">{t('about.stats.eu')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="py-16 px-4 text-center" style={{ background: '#F5F8FF' }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-sdm-navy mb-4">{t('about.mission.title')}</h2>
          <p className="text-gray-500 text-base leading-relaxed">{t('about.mission.desc')}</p>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-sdm-navy mb-10 text-center">{t('about.values.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {values.map(({ emoji, key }) => (
              <div key={key}>
                <div className="text-3xl mb-3">{emoji}</div>
                <h3 className="font-bold text-sdm-navy mb-2">{t(`about.values.${key}.title`)}</h3>
                <p className="text-gray-400 text-sm">{t(`about.values.${key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="py-16 px-4" style={{ background: '#F5F8FF' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-sdm-navy mb-4">{t('about.team.title')}</h2>
          <p className="text-gray-400 text-sm mb-6">{t('about.team.desc')}</p>
          <div className="bg-white rounded-2xl p-8 border-2 border-dashed border-gray-200 text-gray-400 text-sm">
            {t('about.team.placeholder')}
          </div>
        </div>
      </section>
    </>
  )
}
