import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const activeModules = [
  {
    key: 'm1',
    iconBg: 'bg-blue-50',
    tagBg: 'bg-blue-50 text-blue-700',
    icon: (
      <svg className="w-5 h-5 text-sdm-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    tags: ['autonumber', 'vat', 'proforma', 'multicurr'],
  },
  {
    key: 'm2',
    iconBg: 'bg-emerald-50',
    tagBg: 'bg-emerald-50 text-emerald-700',
    icon: (
      <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
      </svg>
    ),
    tags: ['aging', 'automark', 'history'],
  },
  {
    key: 'm3',
    iconBg: 'bg-purple-50',
    tagBg: 'bg-purple-50 text-purple-700',
    icon: (
      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    tags: ['nss', 'ifrs', 'doubleentry', 'trialbal'],
  },
  {
    key: 'm4',
    iconBg: 'bg-cyan-50',
    tagBg: 'bg-cyan-50 text-cyan-700',
    icon: (
      <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    tags: ['bankimport', 'reconcile', 'xml'],
  },
  {
    key: 'm5',
    iconBg: 'bg-rose-50',
    tagBg: 'bg-rose-50 text-rose-700',
    icon: (
      <svg className="w-5 h-5 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
      </svg>
    ),
    tags: ['zdds', 'vies', 'nap'],
  },
  {
    key: 'm6',
    iconBg: 'bg-indigo-50',
    tagBg: 'bg-indigo-50 text-indigo-700',
    icon: (
      <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    tags: ['multifirm', 'roles', 'audit'],
  },
]

const upcomingModules = [
  { key: '1', emoji: '🏦' },
  { key: '2', emoji: '🏗️' },
  { key: '3', emoji: '👥' },
  { key: '4', emoji: '📦' },
  { key: '5', emoji: '🤖' },
  { key: '6', emoji: '🔌' },
]

export default function Solutions() {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const plans = [
    { key: '1', highlight: false, dark: false },
    { key: '2', highlight: false, dark: false },
    { key: '3', highlight: true,  dark: false },
    { key: '4', highlight: false, dark: true  },
  ]

  return (
    <>
      {/* ── HERO ── */}
      <section className="hero-gradient text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{t('sol.h1')}</h1>
          <p className="text-blue-200 text-lg">{t('sol.sub')}</p>
        </div>
      </section>

      {/* ── ACTIVE MODULES ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <span className="section-badge bg-emerald-50 text-emerald-700 border border-emerald-100">
              {t('sol.avail.badge')}
            </span>
            <h2 className="text-2xl font-bold text-sdm-navy mt-3 mb-1">{t('sol.avail.title')}</h2>
            <p className="text-gray-400 text-sm">{t('sol.avail.sub')}</p>
          </div>
          <div className="space-y-5">
            {activeModules.map(({ key, iconBg, tagBg, icon, tags }) => (
              <div key={key} className="module-card">
                <div className="module-left">
                  <div className={`flex-shrink-0 w-11 h-11 ${iconBg} rounded-xl flex items-center justify-center`}>
                    {icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-sdm-navy text-base mb-1">{t(`sol.${key}.title`)}</h3>
                    <p className="text-gray-400 text-sm mb-3 leading-relaxed">{t(`sol.${key}.desc`)}</p>
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <span key={tag} className={`tag-pill ${tagBg}`}>{t(`tags.${tag}`)}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="module-right">
                  <p className="text-emerald-700 text-xs font-bold uppercase tracking-wider mb-2">
                    {t('sol.benefit')}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">{t(`sol.${key}.benefit`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── UPCOMING MODULES ── */}
      <section className="py-20 px-4" style={{ background: '#F5F8FF' }}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <span className="section-badge bg-blue-50 text-blue-700 border border-blue-100">
              {t('sol.upcoming.badge')}
            </span>
            <h2 className="text-2xl font-bold text-sdm-navy mt-3 mb-1">{t('sol.upcoming.title')}</h2>
            <p className="text-gray-400 text-sm">{t('sol.upcoming.sub')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {upcomingModules.map(({ key, emoji }) => (
              <div key={key} className="bg-white border-2 border-dashed border-gray-200 rounded-2xl p-6 opacity-75">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-2xl">{emoji}</span>
                  <span className="tag-pill bg-blue-50 text-blue-600">{t('sol.upcoming.soon')}</span>
                </div>
                <h4 className="font-bold text-sdm-navy text-sm mb-1">{t(`sol.upcoming.${key}.title`)}</h4>
                <p className="text-gray-400 text-xs leading-relaxed">{t(`sol.upcoming.${key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-sdm-navy mb-3">{t('pricing.title')}</h2>
            <p className="text-gray-400 text-base max-w-xl mx-auto">{t('pricing.sub')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {plans.map(({ key, highlight, dark }) => {
              const features = t(`pricing.plans.${key}.features`, { returnObjects: true })
              return (
                <div
                  key={key}
                  className={`pricing-card card-hover relative ${
                    highlight
                      ? 'border-2 border-sdm-blue shadow-lg'
                      : dark
                      ? 'shadow-sm'
                      : 'border border-gray-100 shadow-sm'
                  }`}
                  style={dark ? { background: '#0F2744', color: 'white' } : {}}
                >
                  {highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-sdm-blue text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                      {t('pricing.popular')}
                    </div>
                  )}
                  <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${
                    highlight ? 'text-sdm-blue' : dark ? 'text-blue-300' : 'text-gray-400'
                  }`}>
                    {t(`pricing.plans.${key}.tag`)}
                  </p>
                  <h3 className={`text-xl font-extrabold mb-3 ${dark ? 'text-white' : 'text-sdm-navy'}`}>
                    {t(`pricing.plans.${key}.name`)}
                  </h3>
                  <p className={`text-xs mb-4 ${dark ? 'text-blue-400' : 'text-gray-400'}`}>
                    {t(`pricing.plans.${key}.limit`)}
                  </p>
                  <hr className={`mb-4 ${dark ? 'border-white/10' : highlight ? 'border-blue-100' : 'border-gray-100'}`} />
                  <ul className="space-y-2">
                    {Array.isArray(features) && features.map((feat, i) => (
                      <li key={i} className="flex gap-2 text-xs">
                        <span className={`font-bold ${dark ? 'text-emerald-400' : 'text-emerald-500'}`}>✓</span>
                        <span className={dark ? 'text-blue-200' : 'text-gray-500'}>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>

          {/* Pricing CTA */}
          <div className="text-center bg-sdm-light rounded-2xl py-8 px-6 border border-blue-100">
            <p className="text-sdm-navy font-semibold mb-1">{t('pricing.cta.title')}</p>
            <p className="text-gray-400 text-sm mb-5">{t('pricing.cta.sub')}</p>
            <button
              onClick={() => navigate('/contact')}
              className="bg-sdm-blue text-white px-10 py-3 rounded-xl font-semibold hover:bg-blue-700 transition text-sm"
            >
              {t('pricing.cta.btn')}
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
