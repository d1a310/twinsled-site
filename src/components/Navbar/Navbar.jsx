import { useEffect, useState } from 'react'
import {
  ArrowRight,
  ChevronDown,
  Menu,
  MessageCircle,
  Sparkles,
  X,
} from 'lucide-react'

import './Navbar.css'

const productLinks = [
  {
    href: '/products',
    title: 'Tüm Ürünler',
    text: 'Neon koleksiyonunu keşfet',
  },
  {
    href: '/designer',
    title: 'Kendin Tasarla',
    text: 'Kendi neonunu oluştur',
  },
]

function navigate(href, closeMenu) {
  closeMenu?.()
  window.location.assign(href)
}

function TwinsledLogo() {
  return (
    <span className="navbar-logo-orb" aria-hidden="true">
      <svg
        viewBox="0 0 100 100"
        className="navbar-logo-svg"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="tw-logo-cyan" x1="10" y1="88" x2="54" y2="30" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#00D9FF" />
            <stop offset=".52" stopColor="#22D6E8" />
            <stop offset="1" stopColor="#6FF4C8" />
          </linearGradient>

          <linearGradient id="tw-logo-yellow" x1="48" y1="5" x2="58" y2="66" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#FFF51A" />
            <stop offset=".42" stopColor="#E7F34A" />
            <stop offset=".72" stopColor="#A7E56B" />
            <stop offset="1" stopColor="#9A8AF2" />
          </linearGradient>

          <linearGradient id="tw-logo-pink" x1="58" y1="53" x2="91" y2="89" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#FF7EA1" />
            <stop offset=".42" stopColor="#FF5FA7" />
            <stop offset="1" stopColor="#FF2A9A" />
          </linearGradient>

          <filter id="tw-logo-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.4" result="b1" />
            <feGaussianBlur stdDeviation="3.4" result="b2" />
            <feMerge>
              <feMergeNode in="b2" />
              <feMergeNode in="b1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          d="M5 89L31 43L43 23L56 45L42 68L36 58L24 78L41 78L46 89Z"
          fill="none"
          stroke="url(#tw-logo-cyan)"
          strokeWidth="3.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#tw-logo-glow)"
        />

        <path
          d="M30 43L50 7L69 38L57 38L50 26L45 37L67 73"
          fill="none"
          stroke="url(#tw-logo-yellow)"
          strokeWidth="3.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#tw-logo-glow)"
        />

        <path
          d="M62 56L73 52L94 89L71 89L60 70L70 64L76 75L85 75L77 60"
          fill="none"
          stroke="url(#tw-logo-pink)"
          strokeWidth="3.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#tw-logo-glow)"
        />

        <circle cx="7.2" cy="67.5" r="1.65" fill="#11D8FF" filter="url(#tw-logo-glow)" />
        <circle cx="10.8" cy="80" r="1.65" fill="#11D8FF" filter="url(#tw-logo-glow)" />
      </svg>

      <span className="navbar-logo-scan" />
    </span>
  )
}

function Navbar() {
  const [productsOpen, setProductsOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('navbar-menu-open', mobileOpen)

    return () => {
      document.body.classList.remove('navbar-menu-open')
    }
  }, [mobileOpen])

  const closeMenu = () => {
    setMobileOpen(false)
    setProductsOpen(false)
  }

  const isActive = (paths) => {
    const current = window.location.pathname.toLowerCase()
    return paths.includes(current)
  }

  const productsActive =
    window.location.pathname.toLowerCase().startsWith('/products') ||
    window.location.pathname.toLowerCase().startsWith('/urunler') ||
    window.location.pathname.toLowerCase() === '/designer'

  return (
    <header className={`site-navbar ${mobileOpen ? 'navbar--open' : ''}`}>
      <div className="navbar-grid-noise" />
      <div className="navbar-top-glow" />
      <div className="navbar-light-line" />

      <div className="navbar-container">
        <div className="navbar-main">

          <button
            type="button"
            className="navbar-logo"
            onClick={() => navigate('/', closeMenu)}
            aria-label="TWINSLED ana sayfa"
          >
            <TwinsledLogo />

            <span className="navbar-logo-copy">
              <strong>TWINSLED</strong>
              <small>NEON / LED / DESIGN</small>
            </span>
          </button>

          <nav className="navbar-links">

            <a
              href="/"
              className={`navbar-link ${
                isActive(['/']) ? 'navbar-link--active' : ''
              }`}
            >
              <span>Ana Sayfa</span>
              {isActive(['/']) && <i className="navbar-active-dot" />}
            </a>

            <div
              className={`navbar-dropdown ${
                productsOpen ? 'navbar-dropdown--open' : ''
              }`}
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                type="button"
                className={`navbar-link navbar-link--dropdown ${
                  productsActive ? 'navbar-link--active' : ''
                }`}
                onClick={() =>
                  setProductsOpen((current) => !current)
                }
                aria-expanded={productsOpen}
                aria-haspopup="true"
              >
                <span>Ürünler</span>
                <ChevronDown className="navbar-chevron" size={14} />

                {productsActive && (
                  <i className="navbar-active-dot" />
                )}
              </button>

              <div className="navbar-dropdown-panel">
                <div className="navbar-dropdown-glow" />

                <div className="navbar-dropdown-header">
                  <span className="navbar-dropdown-kicker">
                    TWINSLED / COLLECTION
                  </span>

                  <span className="navbar-dropdown-live">
                    <i />
                    LIVE
                  </span>
                </div>

                {productLinks.map((item, index) => (
                  <a
                    href={item.href}
                    key={item.href}
                    className="navbar-dropdown-item"
                    onClick={closeMenu}
                  >
                    <span className="navbar-dropdown-icon">
                      0{index + 1}
                    </span>

                    <span className="navbar-dropdown-content">
                      <strong>{item.title}</strong>
                      <small>{item.text}</small>
                    </span>

                    <ArrowRight
                      size={16}
                      className="navbar-dropdown-arrow"
                    />
                  </a>
                ))}

                <button
                  type="button"
                  className="navbar-dropdown-all"
                  onClick={() => navigate('/products', closeMenu)}
                >
                  <span>Hepsini Gör</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            <a
              href="/designer"
              className={`navbar-link ${
                isActive(['/designer', '/designer/'])
                  ? 'navbar-link--active'
                  : ''
              }`}
            >
              <span>Kendin Tasarla</span>
              {isActive(['/designer', '/designer/']) && (
                <i className="navbar-active-dot" />
              )}
            </a>

            <a
              href="/projects"
              className={`navbar-link ${
                isActive([
                  '/projects',
                  '/projects/',
                  '/projeler',
                  '/projeler/',
                ])
                  ? 'navbar-link--active'
                  : ''
              }`}
            >
              <span>Projeler</span>
            </a>

            <a
              href="/about"
              className={`navbar-link ${
                isActive([
                  '/about',
                  '/about/',
                  '/hakkimizda',
                  '/hakkimizda/',
                ])
                  ? 'navbar-link--active'
                  : ''
              }`}
            >
              <span>Hakkımızda</span>
            </a>

            <a
              href="/blog"
              className={`navbar-link ${
                isActive(['/blog', '/blog/'])
                  ? 'navbar-link--active'
                  : ''
              }`}
            >
              <span>Blog</span>
            </a>

            <a
              href="/faq"
              className={`navbar-link ${
                isActive(['/faq', '/faq/', '/sss', '/sss/'])
                  ? 'navbar-link--active'
                  : ''
              }`}
            >
              <span>S.S.S</span>
            </a>

            <a
              href="/contact"
              className={`navbar-link ${
                isActive([
                  '/contact',
                  '/contact/',
                  '/iletisim',
                  '/iletisim/',
                ])
                  ? 'navbar-link--active'
                  : ''
              }`}
            >
              <span>İletişim</span>
            </a>
          </nav>

          <div className="navbar-actions">

            <span className="navbar-status">
              <i className="navbar-status-dot" />
              ONLINE STUDIO
            </span>

            <button
              type="button"
              className="navbar-offer-button"
              onClick={() => navigate('/contact', closeMenu)}
            >
              <MessageCircle size={15} />
              <span>Teklif Al</span>
              <ArrowRight size={15} />
              <i className="navbar-offer-line" />
            </button>

            <button
              type="button"
              className="navbar-mobile-button"
              onClick={() =>
                setMobileOpen((current) => !current)
              }
              aria-label={
                mobileOpen ? 'Menüyü kapat' : 'Menüyü aç'
              }
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X size={21} />
              ) : (
                <Menu size={21} />
              )}
            </button>
          </div>
        </div>

        <div
          className={`navbar-mobile-menu ${
            mobileOpen ? 'navbar-mobile-menu--open' : ''
          }`}
        >
          <div className="navbar-mobile-menu-inner">

            <div className="navbar-mobile-kicker">
              TWINSLED / NAVIGATION
            </div>

            <button
              type="button"
              className="navbar-mobile-link"
              onClick={() => navigate('/', closeMenu)}
            >
              <span>Ana Sayfa</span>
              <ArrowRight size={17} />
            </button>

            <button
              type="button"
              className="navbar-mobile-link navbar-mobile-link--parent"
              onClick={() =>
                setProductsOpen((current) => !current)
              }
            >
              <span>Ürünler</span>
              <ChevronDown
                size={17}
                className={`navbar-mobile-chevron ${
                  productsOpen
                    ? 'navbar-mobile-chevron--open'
                    : ''
                }`}
              />
            </button>

            <div
              className={`navbar-mobile-submenu ${
                productsOpen
                  ? 'navbar-mobile-submenu--open'
                  : ''
              }`}
            >
              {productLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="navbar-mobile-subitem"
                >
                  <span>{item.title}</span>
                  <ArrowRight size={15} />
                </a>
              ))}
            </div>

            <button
              type="button"
              className="navbar-mobile-link"
              onClick={() => navigate('/designer', closeMenu)}
            >
              <span>Kendin Tasarla</span>
              <ArrowRight size={17} />
            </button>

            <button
              type="button"
              className="navbar-mobile-link"
              onClick={() => navigate('/projects', closeMenu)}
            >
              <span>Projeler</span>
              <ArrowRight size={17} />
            </button>

            <button
              type="button"
              className="navbar-mobile-link"
              onClick={() => navigate('/about', closeMenu)}
            >
              <span>Hakkımızda</span>
              <ArrowRight size={17} />
            </button>

            <button
              type="button"
              className="navbar-mobile-link"
              onClick={() => navigate('/blog', closeMenu)}
            >
              <span>Blog</span>
              <ArrowRight size={17} />
            </button>

            <button
              type="button"
              className="navbar-mobile-link"
              onClick={() => navigate('/faq', closeMenu)}
            >
              <span>S.S.S</span>
              <ArrowRight size={17} />
            </button>

            <button
              type="button"
              className="navbar-mobile-link"
              onClick={() => navigate('/contact', closeMenu)}
            >
              <span>İletişim</span>
              <ArrowRight size={17} />
            </button>

            <button
              type="button"
              className="navbar-mobile-cta"
              onClick={() => navigate('/contact', closeMenu)}
            >
              <MessageCircle size={17} />
              <span>Teklif Al</span>
            </button>

          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
