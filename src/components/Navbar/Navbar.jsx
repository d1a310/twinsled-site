import { useEffect, useState } from 'react'
import {
  ChevronDown,
  Menu,
  X,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react'
import './Navbar.css'

const productLinks = [
  {
    label: 'Tüm Ürünler',
    path: '/urunler',
    desc: 'Tüm neon ve LED çözümleri',
  },
  {
    label: 'Kendin Tasarla',
    path: '/kendin-tasarla',
    desc: 'Neonunu kendin oluştur',
  },
]

const mainLinks = [
  { label: 'Ana Sayfa', path: '/' },
  { label: 'Projeler', path: '/projeler' },
  { label: 'Hakkımızda', path: '/hakkimizda' },
  { label: 'İletişim', path: '/iletisim' },
]

function TwinsledMark() {
  return (
    <span className="navbar-logo-orb" aria-hidden="true">
      <svg
        className="navbar-logo-svg"
        viewBox="0 0 100 100"
        fill="none"
      >
        <defs>
          <linearGradient
            id="twinsled-main-gradient"
            x1="12"
            y1="84"
            x2="88"
            y2="16"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#16D9FF" />
            <stop offset=".38" stopColor="#39C8FF" />
            <stop offset=".68" stopColor="#9B5CFF" />
            <stop offset="1" stopColor="#FF35C8" />
          </linearGradient>

          <linearGradient
            id="twinsled-top-gradient"
            x1="50"
            y1="8"
            x2="64"
            y2="54"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFF52F" />
            <stop offset=".62" stopColor="#FFC83B" />
            <stop offset="1" stopColor="#FF6E79" />
          </linearGradient>

          <filter
            id="twinsled-glow"
            x="-60%"
            y="-60%"
            width="220%"
            height="220%"
          >
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="2.6"
              result="b1"
            />

            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="5.5"
              result="b2"
            />

            <feMerge>
              <feMergeNode in="b2" />
              <feMergeNode in="b1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          d="M13 77 37 34 51 58 41 76h21L52 58l16-27 19 46H69l-8-13-5 10H28l-8 13H10l3-10Z"
          fill="url(#twinsled-main-gradient)"
          filter="url(#twinsled-glow)"
        />

        <path
          d="M42 35 54 9l20 37-14 8-6-12-6 12-6-19Z"
          fill="url(#twinsled-top-gradient)"
          filter="url(#twinsled-glow)"
        />

        <path
          d="M52 59 67 48l22 30H72L61 64l-5 9-4-14Z"
          fill="url(#twinsled-main-gradient)"
          opacity=".96"
        />

        <path
          d="M51 17 58 31"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          opacity=".88"
        />
      </svg>

      <span className="navbar-logo-scanline" />
      <span className="navbar-logo-corner navbar-logo-corner--tl" />
      <span className="navbar-logo-corner navbar-logo-corner--br" />
      <span className="navbar-logo-status" />
    </span>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)

  const currentPath = window.location.pathname

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12)
    }

    onScroll()

    window.addEventListener('scroll', onScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    const handlePopState = () => {
      setMobileOpen(false)
      setProductsOpen(false)
    }

    window.addEventListener('popstate', handlePopState)

    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  const isActive = (path) => {
    if (path === '/') {
      return currentPath === '/'
    }

    return currentPath.startsWith(path)
  }

  const go = (path) => {
    window.location.href = path
  }

  const handleMobileNavigation = (path) => {
    setMobileOpen(false)
    setProductsOpen(false)
    go(path)
  }

  return (
    <header
      className={`site-navbar ${
        scrolled ? 'site-navbar--scrolled' : ''
      }`}
    >
      <div className="navbar-grid-noise" />
      <div className="navbar-top-glow" />
      <div className="navbar-light-line" />

      <div className="navbar-container">
        <div className="navbar-main">

          {/* LOGO */}
          <button
            className="navbar-logo"
            type="button"
            onClick={() => go('/')}
            aria-label="TWINSLED ana sayfa"
          >
            <TwinsledMark />

            <span className="navbar-logo-copy">
              <strong>TWINSLED</strong>
              <small>NEON / LED / DESIGN</small>
            </span>
          </button>

          {/* DESKTOP NAV */}
          <nav
            className="navbar-links"
            aria-label="Ana navigasyon"
          >
            {mainLinks.map((item) => (
              <button
                key={item.path}
                type="button"
                className={`navbar-link ${
                  isActive(item.path)
                    ? 'navbar-link--active'
                    : ''
                }`}
                onClick={() => go(item.path)}
              >
                <span>{item.label}</span>

                {isActive(item.path) && (
                  <i className="navbar-active-dot" />
                )}
              </button>
            ))}

            {/* ÜRÜNLER */}
            <div
              className={`navbar-dropdown ${
                productsOpen
                  ? 'navbar-dropdown--open'
                  : ''
              }`}
            >
              <button
                type="button"
                className={`navbar-link ${
                  isActive('/urunler') ||
                  isActive('/kendin-tasarla')
                    ? 'navbar-link--active'
                    : ''
                }`}
                onClick={() =>
                  setProductsOpen((value) => !value)
                }
              >
                <span>Ürünler</span>

                <ChevronDown
                  className="navbar-chevron"
                  size={14}
                />

                {(isActive('/urunler') ||
                  isActive('/kendin-tasarla')) && (
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

                {productLinks.map((item) => (
                  <button
                    key={item.path}
                    type="button"
                    className="navbar-dropdown-item"
                    onClick={() => go(item.path)}
                  >
                    <span className="navbar-dropdown-icon">
                      <Sparkles size={15} />
                    </span>

                    <span className="navbar-dropdown-content">
                      <strong>{item.label}</strong>
                      <small>{item.desc}</small>
                    </span>

                    <ArrowUpRight
                      className="navbar-dropdown-arrow"
                      size={15}
                    />
                  </button>
                ))}

                <button
                  type="button"
                  className="navbar-dropdown-all"
                  onClick={() => go('/urunler')}
                >
                  <span>Koleksiyonu keşfet</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          </nav>

          {/* ACTIONS */}
          <div className="navbar-actions">
            <span className="navbar-status">
              <i className="navbar-status-dot" />
              ONLINE STUDIO
            </span>

            <button
              type="button"
              className="navbar-offer-button"
              onClick={() =>
                go('/kendin-tasarla')
              }
            >
              <span>Tasarımını Başlat</span>
              <ArrowUpRight size={15} />
              <i className="navbar-offer-line" />
            </button>

            <button
              type="button"
              className="navbar-mobile-button"
              onClick={() =>
                setMobileOpen((value) => !value)
              }
              aria-label="Menüyü aç/kapat"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X size={19} />
              ) : (
                <Menu size={19} />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`navbar-mobile-menu ${
            mobileOpen
              ? 'navbar-mobile-menu--open'
              : ''
          }`}
        >
          <div className="navbar-mobile-menu-inner">
            <div className="navbar-mobile-kicker">
              NAVIGATION / TWINSLED STUDIO
            </div>

            <div className="navbar-mobile-links">
              {mainLinks.map((item) => (
                <button
                  key={item.path}
                  type="button"
                  className={`navbar-mobile-link ${
                    isActive(item.path)
                      ? 'navbar-mobile-link--active'
                      : ''
                  }`}
                  onClick={() =>
                    handleMobileNavigation(item.path)
                  }
                >
                  <span>{item.label}</span>
                  <ArrowUpRight size={15} />
                </button>
              ))}

              <button
                type="button"
                className="navbar-mobile-link"
                onClick={() =>
                  setProductsOpen((value) => !value)
                }
              >
                <span>Ürünler</span>

                <ChevronDown
                  size={16}
                  className={
                    productsOpen
                      ? 'navbar-mobile-chevron--open'
                      : ''
                  }
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
                  <button
                    key={item.path}
                    type="button"
                    className="navbar-mobile-subitem"
                    onClick={() =>
                      handleMobileNavigation(item.path)
                    }
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight size={14} />
                  </button>
                ))}
              </div>

              <button
                type="button"
                className="navbar-mobile-cta"
                onClick={() =>
                  handleMobileNavigation(
                    '/kendin-tasarla'
                  )
                }
              >
                <span>Tasarımını Başlat</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}