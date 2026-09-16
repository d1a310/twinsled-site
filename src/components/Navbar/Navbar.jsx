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
      <img
        src="/twinsled-logo.png"
        className="navbar-logo-svg"
        alt=""
        draggable="false"
      />
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
