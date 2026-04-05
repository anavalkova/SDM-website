import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const features = [
    {
      icon: (
        <svg className="w-5 h-5 text-sdm-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      bg: 'bg-blue-50',
      key: '1',
    },
    {
      icon: (
        <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
        </svg>
      ),
      bg: 'bg-emerald-50',
      key: '2',
    },
    {
      icon: (
        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      bg: 'bg-purple-50',
      key: '3',
    },
    {
      icon: (
        <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      bg: 'bg-cyan-50',
      key: '4',
    },
    {
      icon: (
        <svg className="w-5 h-5 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
        </svg>
      ),
      bg: 'bg-rose-50',
      key: '5',
    },
    {
      icon: (
        <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      bg: 'bg-indigo-50',
      key: '6',
    },
  ]

  const whyItems = [
    { emoji: '🏛️', key: '1' },
    { emoji: '🔐', key: '2' },
    { emoji: '💰', key: '3' },
    { emoji: '🌍', key: '4' },
    { emoji: '⚡', key: '5' },
    { emoji: '🛡️', key: '6' },
  ]

  const whoItems = [
    { emoji: '🏢', accentClass: 'bg-sdm-blue',    key: '1', onCta: () => navigate('/solutions') },
    { emoji: '🚀', accentClass: 'bg-emerald-500', key: '2', onCta: () => navigate('/solutions') },
    { emoji: '🏗️', accentClass: 'bg-purple-500',  key: '3', onCta: () => navigate('/contact') },
  ]

  return (
    <>
      {/* ── HERO ── */}
      <section className="hero-gradient text-white py-24 px-4 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}
        />
        <div className="max-w-7xl mx-auto relative">
          <div className="max-w-3xl">
            <div className="section-badge bg-white/10 border border-white/20 text-blue-100 mb-6">
              <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse" />
              {t('hero.badge')}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
              {t('hero.h1_1')}<br />
              <span className="text-blue-300">{t('hero.h1_2')}</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl leading-relaxed">
              {t('hero.sub')}
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => navigate('/contact')}
                className="bg-white text-sdm-navy font-bold px-8 py-3.5 rounded-xl hover:bg-blue-50 transition-colors text-sm"
              >
                {t('hero.cta1')}
              </button>
              <button
                onClick={() => navigate('/solutions')}
                className="border border-white/30 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/10 transition-colors text-sm"
              >
                {t('hero.cta2')}
              </button>
            </div>
            <p className="text-blue-300 text-xs mt-4">{t('hero.nocredit')}</p>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <section className="bg-gray-50 border-y border-gray-100 py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-6 text-gray-400 text-xs font-medium">
          <span>{t('trust.cloud')}</span>
          <span className="text-gray-200">|</span>
          <span>{t('trust.gdpr')}</span>
          <span className="text-gray-200">|</span>
          <span>{t('trust.nss')}</span>
          <span className="text-gray-200">|</span>
          <span>{t('trust.audit')}</span>
          <span className="text-gray-200">|</span>
          <span>{t('trust.trial')}</span>
        </div>
      </section>

      {/* ── FEATURES GRID ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-sdm-navy mb-3">{t('feat.title')}</h2>
            <p className="text-gray-400 text-base max-w-xl mx-auto">{t('feat.sub')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map(({ icon, bg, key }) => (
              <div key={key} className="card-hover border border-gray-100 rounded-2xl p-6 shadow-sm">
                <div className={`w-11 h-11 ${bg} rounded-xl flex items-center justify-center mb-4`}>
                  {icon}
                </div>
                <h3 className="font-bold text-sdm-navy mb-2">{t(`feat.${key}.title`)}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{t(`feat.${key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY SDM ── */}
      <section className="py-20 px-4" style={{ background: '#F5F8FF' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-sdm-navy mb-3">{t('why.title')}</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-base">{t('why.sub')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyItems.map(({ emoji, key }) => (
              <div key={key} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-50">
                <div className="text-2xl mb-3">{emoji}</div>
                <h3 className="font-bold text-sdm-navy mb-2 text-sm">{t(`why.${key}.title`)}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{t(`why.${key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO FOR ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-sdm-navy mb-3">{t('who.title')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whoItems.map(({ emoji, accentClass, key, onCta }) => (
              <div key={key}>
                <div className={`h-1 w-12 rounded ${accentClass} mb-6`} />
                <div className="text-3xl mb-4">{emoji}</div>
                <h3 className="text-xl font-bold text-sdm-navy mb-3">{t(`who.${key}.title`)}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{t(`who.${key}.desc`)}</p>
                <button
                  onClick={onCta}
                  className="text-sdm-blue text-sm font-semibold hover:underline"
                >
                  {t(`who.${key}.cta`)}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="py-20 px-4 hero-gradient text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('cta.title')}</h2>
          <p className="text-blue-200 mb-8 text-base">{t('cta.sub')}</p>
          <button
            onClick={() => navigate('/contact')}
            className="bg-white text-sdm-navy font-bold px-10 py-4 rounded-xl hover:bg-blue-50 transition-colors"
          >
            {t('cta.btn')}
          </button>
        </div>
      </section>
    </>
  )
}
