import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()
  const lang = i18n.language

  const switchLang = (l) => i18n.changeLanguage(l)

  return (
    <footer className="pt-14 pb-8 px-4 bg-sdm-navy text-white">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <button
              onClick={() => navigate('/')}
              className="flex items-center mb-4 focus:outline-none"
            >
              <div className="w-8 h-8 rounded-md bg-white/10 flex items-center justify-center mr-2.5">
                <span className="text-white font-black text-xs">SDM</span>
              </div>
              <span className="font-bold text-sm">Smart Data Management</span>
            </button>
            <p className="text-blue-300 text-xs leading-relaxed">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Product */}
          <div>
            <p className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-3">
              {t('footer.product')}
            </p>
            <ul className="space-y-2">
              <li><button onClick={() => navigate('/solutions')} className="text-blue-200 text-xs hover:text-white transition">{t('footer.overview')}</button></li>
              <li><button onClick={() => navigate('/solutions')} className="text-blue-200 text-xs hover:text-white transition">{t('footer.pricing')}</button></li>
              <li><button onClick={() => navigate('/solutions')} className="text-blue-200 text-xs hover:text-white transition">{t('footer.modules')}</button></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-3">
              {t('footer.company')}
            </p>
            <ul className="space-y-2">
              <li><button onClick={() => navigate('/about')}   className="text-blue-200 text-xs hover:text-white transition">{t('footer.about')}</button></li>
              <li><button onClick={() => navigate('/contact')} className="text-blue-200 text-xs hover:text-white transition">{t('footer.contact')}</button></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-3">
              {t('footer.legal')}
            </p>
            <ul className="space-y-2">
              {/* TODO: Replace href with actual privacy policy and terms pages/URLs */}
              <li><a href="#" className="text-blue-200 text-xs hover:text-white transition">{t('footer.privacy')}</a></li>
              <li><a href="#" className="text-blue-200 text-xs hover:text-white transition">{t('footer.terms')}</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-blue-400 text-xs">{t('footer.copy')}</p>
          <div className="flex items-center bg-white/10 rounded-lg p-0.5">
            <button
              onClick={() => switchLang('bg')}
              className={'lang-btn' + (lang === 'bg' ? ' active' : ' text-blue-300')}
            >
              BG
            </button>
            <button
              onClick={() => switchLang('en')}
              className={'lang-btn' + (lang === 'en' ? ' active' : ' text-blue-300')}
            >
              EN
            </button>
          </div>
        </div>

      </div>
    </footer>
  )
}
