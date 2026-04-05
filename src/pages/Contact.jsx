import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function Contact() {
  const { t } = useTranslation()
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    // TODO: Connect to backend endpoint (POST /api/contact)
    setSubmitted(true)
  }

  return (
    <>
      {/* ── HERO ── */}
      <section className="hero-gradient text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{t('contact.h1')}</h1>
          <p className="text-blue-200 text-lg">{t('contact.sub')}</p>
        </div>
      </section>

      {/* ── FORM + INFO ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Form */}
          <div>
            <h2 className="text-2xl font-bold text-sdm-navy mb-6">{t('contact.form.title')}</h2>
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder={t('contact.form.namePh')}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sdm-blue/40 focus:border-sdm-blue transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder={t('contact.form.emailPh')}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sdm-blue/40 focus:border-sdm-blue transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  {t('contact.form.company')}{' '}
                  <span className="text-gray-400 font-normal">{t('contact.form.companyOptional')}</span>
                </label>
                <input
                  type="text"
                  name="company"
                  placeholder={t('contact.form.companyPh')}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sdm-blue/40 focus:border-sdm-blue transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  {t('contact.form.message')}
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder={t('contact.form.messagePh')}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sdm-blue/40 focus:border-sdm-blue transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-sdm-blue text-white rounded-xl py-3 font-semibold hover:bg-blue-700 transition text-sm"
              >
                {t('contact.form.submit')}
              </button>
            </form>
            {submitted && (
              <div className="mt-4 bg-emerald-50 border border-emerald-100 text-emerald-700 rounded-xl p-4 text-sm font-medium">
                {t('contact.form.success')}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="space-y-5">
            <h2 className="text-2xl font-bold text-sdm-navy">{t('contact.info.title')}</h2>

            <div className="bg-sdm-light rounded-2xl p-6 space-y-5">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm flex-shrink-0">
                  <svg className="w-5 h-5 text-sdm-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-sdm-navy text-sm">{t('contact.info.emailLabel')}</p>
                  <a href="mailto:info@smartdatamanagement.bg" className="text-sdm-blue text-sm hover:underline">
                    info@smartdatamanagement.bg
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm flex-shrink-0">
                  <svg className="w-5 h-5 text-sdm-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-sdm-navy text-sm">{t('contact.info.addrLabel')}</p>
                  <p className="text-gray-500 text-sm">{t('contact.info.addr')}</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm flex-shrink-0">
                  <svg className="w-5 h-5 text-sdm-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-sdm-navy text-sm">{t('contact.info.hoursLabel')}</p>
                  <p className="text-gray-500 text-sm">{t('contact.info.hours')}</p>
                </div>
              </div>
            </div>

            {/* Trial promo */}
            <div className="rounded-2xl p-6 text-white" style={{ background: '#0F2744' }}>
              <h3 className="font-bold mb-2">{t('contact.trial.title')}</h3>
              <p className="text-blue-200 text-sm mb-4">{t('contact.trial.desc')}</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-white/10 border border-white/20 text-white px-3 py-1 rounded-full">
                  {t('contact.trial.tag1')}
                </span>
                <span className="text-xs bg-white/10 border border-white/20 text-white px-3 py-1 rounded-full">
                  {t('contact.trial.tag2')}
                </span>
                <span className="text-xs bg-white/10 border border-white/20 text-white px-3 py-1 rounded-full">
                  {t('contact.trial.tag3')}
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
