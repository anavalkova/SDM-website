import { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()
  const lang = i18n.language
  const [menuOpen, setMenuOpen] = useState(false)

  const switchLang = (l) => i18n.changeLanguage(l)

  const navLinks = [
    { to: '/',          label: t('nav.home') },
    { to: '/solutions', label: t('nav.solutions') },
    { to: '/about',     label: t('nav.about') },
    { to: '/contact',   label: t('nav.contact') },
  ]

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <button
              onClick={() => navigate('/')}
              className="flex items-center select-none focus:outline-none"
            >
              {/* TODO: Replace with <img src={logo} alt="SDM" className="h-9" /> when logo is available */}
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

            {/* Nav links - desktop */}
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

            {/* Right: language switcher + CTA + hamburger */}
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

              {/* Hamburger - mobile only */}
              <button
                onClick={() => setMenuOpen(true)}
                className="md:hidden flex flex-col justify-center items-center w-9 h-9 rounded-lg hover:bg-gray-100 transition-colors gap-1"
                aria-label="Open menu"
              >
                <span className="w-5 h-0.5 bg-sdm-navy rounded" />
                <span className="w-5 h-0.5 bg-sdm-navy rounded" />
                <span className="w-3.5 h-0.5 bg-sdm-navy rounded self-start ml-[5px]" />
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Backdrop */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Slide-in drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ease-out md:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 h-16 border-b border-gray-100 flex-shrink-0">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-2.5 bg-sdm-navy">
              <span className="text-white font-black text-xs tracking-wider">SDM</span>
            </div>
            <div className="leading-tight">
              <div className="text-sdm-navy font-bold text-sm">Smart Data</div>
              <div className="text-sdm-blue font-semibold tracking-widest uppercase" style={{ fontSize: 9 }}>
                Management
              </div>
            </div>
          </div>
          <button
            onClick={closeMenu}
            className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-700"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <div className="flex-1 px-3 py-5 overflow-y-auto">
          <div className="space-y-1">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `flex items-center px-4 py-3.5 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-sdm-blue'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-sdm-navy'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Drawer footer */}
        <div className="px-4 py-5 border-t border-gray-100 space-y-3 flex-shrink-0">
          <div className="flex items-center bg-gray-100 rounded-lg p-0.5 w-fit">
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
            onClick={() => { navigate('/contact'); closeMenu() }}
            className="w-full bg-sdm-blue text-white py-3 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors"
          >
            {t('nav.cta')}
          </button>
        </div>
      </div>
    </>
  )
}
