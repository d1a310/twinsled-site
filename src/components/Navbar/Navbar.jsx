import { useEffect, useState } from 'react'
import {
  ArrowUpRight,
  ChevronDown,
  Menu,
  Sparkles,
  X,
} from 'lucide-react'

import './Navbar.css'

const productLinks = [
  {
    title: 'Tüm Ürünler',
    description: 'Neon ve LED koleksiyonunu keşfet',
    path: '/products',
  },
  {
    title: 'Kendin Tasarla',
    description: 'Kendi neon tasarımını oluştur',
    path: '/designer',
  },
]

const navLinks = [
  {
    label: 'Ana Sayfa',
    path: '/',
  },
  {
    label: 'Ürünler',
    path: '/products',
    dropdown: true,
  },
  {
    label: 'Projeler',
    path: '/projects',
  },
  {
    label: 'Hakkımızda',
    path: '/about',
  },
  {
    label: 'Blog',
    path: '/blog',
  },
  {
    label: 'S.S.S.',
    path: '/faq',
  },
  {
    label: 'İletişim',
    path: '/contact',
  },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeColor, setActiveColor] = useState(0)

  const neonColors = [
    '#ff4f9a',
    '#4eeaff',
    '#7288ff',
    '#b76cff',
    '#ff5370',
    '#ffb84d',
    '#67f58a',
  ]

  const path = window.location.pathname.toLowerCase()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 18)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveColor((current) => {
        return (current + 1) % neonColors.length
      })
    }, 1800)

    return () => clearInterval(timer)
  }, [neonColors.length])

  useEffect(() => {
    setMenuOpen(false)
    setProductsOpen(false)
  }, [path])

  const currentColor = neonColors[activeColor]

  const isActive = (targetPath) => {
    if (targetPath === '/') {
      return path === '/'
    }

    return (
      path === targetPath ||
      path.startsWith(`${targetPath}/`)
    )
  }

  const goTo = (targetPath) => {
    setMenuOpen(false)
    setProductsOpen(false)
    window.location.href = targetPath
  }

  const toggleProducts = () => {
    setProductsOpen((current) => !current)
  }

  return (
    <header
      className={`site-navbar ${
        scrolled ? 'site-navbar--scrolled' : ''
      } ${menuOpen ? 'site-navbar--menu-open' : ''}`}
      style={{
        '--navbar-neon': currentColor,
      }}
    >
      <div className="navbar-grid-noise" />

      <div className="navbar-top-glow" />

      <div className="navbar-light-line" />

      <div className="navbar-container">
        <div className="navbar-main">
          {/* LOGO */}
          <button
            type="button"
            className="navbar-logo"
            onClick={() => goTo('/')}
            aria-label="TWINSLED ana sayfa"
          >
            <span className="navbar-logo-orb">
              <span className="navbar-logo-core">
                T
              </span>
            </span>

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
            {navLinks.map((item) => {
              const active =
                item.dropdown
                  ? isActive('/products') ||
                    isActive('/designer')
                  : isActive(item.path)

              if (item.dropdown) {
                return (
                  <div
                    key={item.label}
                    className={`navbar-dropdown ${
                      productsOpen
                        ? 'navbar-dropdown--open'
                        : ''
                    }`}
                    onMouseEnter={() =>
                      setProductsOpen(true)
                    }
                    onMouseLeave={() =>
                      setProductsOpen(false)
                    }
                  >
                    <button
                      type="button"
                      className={`navbar-link ${
                        active
                          ? 'navbar-link--active'
                          : ''
                      }`}
                      onClick={toggleProducts}
                      aria-expanded={productsOpen}
                    >
                      <span>{item.label}</span>

                      <ChevronDown
                        size={14}
                        className="navbar-chevron"
                      />

                      {active && (
                        <span className="navbar-active-dot" />
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

                      {productLinks.map((product) => (
                        <button
                          type="button"
                          className="navbar-dropdown-item"
                          key={product.path}
                          onClick={() =>
                            goTo(product.path)
                          }
                        >
                          <span className="navbar-dropdown-icon">
                            <Sparkles size={16} />
                          </span>

                          <span className="navbar-dropdown-content">
                            <strong>
                              {product.title}
                            </strong>

                            <small>
                              {product.description}
                            </small>
                          </span>

                          <ArrowUpRight
                            size={16}
                            className="navbar-dropdown-arrow"
                          />
                        </button>
                      ))}

                      <button
                        type="button"
                        className="navbar-dropdown-all"
                        onClick={() =>
                          goTo('/products')
                        }
                      >
                        <span>Hepsini Keşfet</span>
                        <ArrowUpRight size={15} />
                      </button>
                    </div>
                  </div>
                )
              }

              return (
                <button
                  key={item.path}
                  type="button"
                  className={`navbar-link ${
                    active
                      ? 'navbar-link--active'
                      : ''
                  }`}
                  onClick={() => goTo(item.path)}
                >
                  <span>{item.label}</span>

                  {active && (
                    <span className="navbar-active-dot" />
                  )}
                </button>
              )
            })}
          </nav>

          {/* RIGHT SIDE */}
          <div className="navbar-actions">
            <div className="navbar-status">
              <span
                className="navbar-status-dot"
                style={{
                  background: currentColor,
                  boxShadow: `0 0 14px ${currentColor}`,
                }}
              />

              <span>ONLINE</span>
            </div>

            <button
              type="button"
              className="navbar-offer-button"
              onClick={() => goTo('/contact')}
            >
              <span className="navbar-offer-line" />

              <span>Teklif Al</span>

              <ArrowUpRight size={16} />
            </button>

            <button
              type="button"
              className="navbar-mobile-button"
              onClick={() =>
                setMenuOpen((current) => !current)
              }
              aria-label={
                menuOpen
                  ? 'Menüyü kapat'
                  : 'Menüyü aç'
              }
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <X size={22} />
              ) : (
                <Menu size={22} />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`navbar-mobile-menu ${
            menuOpen
              ? 'navbar-mobile-menu--open'
              : ''
          }`}
        >
          <div className="navbar-mobile-menu-inner">
            <div className="navbar-mobile-kicker">
              TWINSLED / MENU
            </div>

            <div className="navbar-mobile-links">
              {navLinks.map((item) => {
                const active =
                  item.dropdown
                    ? isActive('/products') ||
                      isActive('/designer')
                    : isActive(item.path)

                if (item.dropdown) {
                  return (
                    <div
                      key={item.label}
                      className="navbar-mobile-group"
                    >
                      <button
                        type="button"
                        className={`navbar-mobile-link ${
                          active
                            ? 'navbar-mobile-link--active'
                            : ''
                        }`}
                        onClick={() =>
                          setProductsOpen(
                            (current) => !current,
                          )
                        }
                      >
                        <span>{item.label}</span>

                        <ChevronDown
                          size={17}
                          className={
                            productsOpen
                              ? 'navbar-mobile-chevron navbar-mobile-chevron--open'
                              : 'navbar-mobile-chevron'
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
                        {productLinks.map(
                          (product) => (
                            <button
                              type="button"
                              key={product.path}
                              onClick={() =>
                                goTo(product.path)
                              }
                              className="navbar-mobile-subitem"
                            >
                              <span>
                                {product.title}
                              </span>

                              <ArrowUpRight
                                size={15}
                              />
                            </button>
                          ),
                        )}
                      </div>
                    </div>
                  )
                }

                return (
                  <button
                    type="button"
                    key={item.path}
                    className={`navbar-mobile-link ${
                      active
                        ? 'navbar-mobile-link--active'
                        : ''
                    }`}
                    onClick={() => goTo(item.path)}
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight size={17} />
                  </button>
                )
              })}
            </div>

            <button
              type="button"
              className="navbar-mobile-cta"
              onClick={() => goTo('/contact')}
            >
              <span>Özel Tasarım / Teklif</span>
              <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar