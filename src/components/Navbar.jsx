import { NavLink, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()
  const lang = i18n.language

  const switchLang = (l) => i18n.changeLanguage(l)

  const navLinks = [
    { to: '/',          label: t('nav.home') },
    { to: '/solutions', label: t('nav.solutions') },
    { to: '/about',     label: t('nav.about') },
    { to: '/contact',   label: t('nav.contact') },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <button
            onClick={() => navigate('/')}
            className="flex items-center select-none focus:outline-none"
          >
            {/* TODO: Replace inner content with <img src={logo} alt="SDM" className="h-9" /> when logo file is available */}
            <div className="w-9 h-9 rounded-lg flex items-center justify-center mr-2.5 bg-sdm-navy">
              <span className="text-white font-black text-xs tracking-wider">SDM</span>
            </div>
            <div className="leading-tight text-left">
              <div className="text-sdm-navy font-bold text-sm">Smart Data</div>
              <div className="text-sdm-blue font-semibold tracking-widest uppercase" style={{ fontSize: 10 }}>
                Management
              </div>
            </div>
          </button>

          {/* Nav links — desktop */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  'nav-link' + (isActive ? ' active' : '')
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* Right: language switcher + CTA */}
          <div className="flex items-center gap-3">
            <div className="flex items-center bg-gray-100 rounded-lg p-0.5">
              <button
                onClick={() => switchLang('bg')}
                className={'lang-btn' + (lang === 'bg' ? ' active' : '')}
              >
                BG
              </button>
              <button
                onClick={() => switchLang('en')}
                className={'lang-btn' + (lang === 'en' ? ' active' : '')}
              >
                EN
              </button>
            </div>
            <button
              onClick={() => navigate('/contact')}
              className="hidden md:block bg-sdm-blue text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
            >
              {t('nav.cta')}
            </button>
          </div>

        </div>
      </div>
    </nav>
  )
}
