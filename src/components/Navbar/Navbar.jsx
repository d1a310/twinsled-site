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
    <header className={`navbar ${mobileOpen ? 'navbar--open' : ''}`}>
      <div className="navbar__ambient" />

      <div className="navbar__inner">

        <button
          type="button"
          className="navbar__brand"
          onClick={() => navigate('/', closeMenu)}
          aria-label="TWINSLED ana sayfa"
        >
          <span className="navbar__brand-mark navbar__brand-mark--logo" aria-hidden="true">
            <svg
              viewBox="0 0 447 428"
              className="navbar__brand-logo"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="twBrandBlue" x1="24" y1="381" x2="208" y2="180" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#05D9FF" />
                  <stop offset="0.45" stopColor="#1AD3EE" />
                  <stop offset="0.76" stopColor="#8160F5" />
                  <stop offset="1" stopColor="#D431FF" />
                </linearGradient>
                <linearGradient id="twBrandYellow" x1="175" y1="20" x2="320" y2="355" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#FFF500" />
                  <stop offset="0.36" stopColor="#FFE700" />
                  <stop offset="0.65" stopColor="#FFB12D" />
                  <stop offset="1" stopColor="#FF087F" />
                </linearGradient>
                <linearGradient id="twBrandPink" x1="281" y1="205" x2="424" y2="378" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#F50773" />
                  <stop offset="0.55" stopColor="#FF1488" />
                  <stop offset="1" stopColor="#FF3C9B" />
                </linearGradient>
                <filter id="twBrandGlow" x="-40%" y="-40%" width="180%" height="180%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="2.2" result="blur1" />
                  <feGaussianBlur in="SourceGraphic" stdDeviation="5.2" result="blur2" />
                  <feMerge>
                    <feMergeNode in="blur2" />
                    <feMergeNode in="blur1" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <path
                d="M24 381L141 182L191 263L154 325L137 297L92 377H183L207 418H24V381Z"
                fill="url(#twBrandBlue)"
                filter="url(#twBrandGlow)"
              />

              <path
                d="M211 21L293 150L257 177L226 129L205 164L319 358L273 386L174 214L153 177L211 21Z"
                fill="url(#twBrandYellow)"
                filter="url(#twBrandGlow)"
              />

              <path
                d="M226 129L250 88L284 142L256 177L226 129Z"
                fill="#FFF100"
                filter="url(#twBrandGlow)"
              />

              <path
                d="M286 218L329 187L422 378H300L252 298L288 270L317 322H362L326 252L296 273L286 218Z"
                fill="url(#twBrandPink)"
                filter="url(#twBrandGlow)"
              />
            </svg>
          </span>

          <span className="navbar__brand-text">
            TWINSLED
          </span>
        </button>


        <nav className="navbar__links">

          <a
            href="/"
            className={`navbar__link ${
              isActive(['/']) ? 'navbar__link--active' : ''
            }`}
          >
            Ana Sayfa
          </a>


          <div
            className={`navbar__dropdown ${
              productsOpen ? 'navbar__dropdown--open' : ''
            }`}
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >

            <button
              type="button"
              className={`navbar__link navbar__link--dropdown ${
                productsActive ? 'navbar__link--active' : ''
              }`}
              onClick={() => setProductsOpen((current) => !current)}
              aria-expanded={productsOpen}
              aria-haspopup="true"
            >
              <span>Ürünler</span>
              <ChevronDown size={14} />
            </button>


            <div className="navbar__dropdown-menu">

              <div className="navbar__dropdown-head">
                <span>TWINSLED / COLLECTION</span>
                <Sparkles size={15} />
              </div>

              {productLinks.map((item, index) => (
                <a
                  href={item.href}
                  key={item.href}
                  className="navbar__dropdown-item"
                  onClick={closeMenu}
                >
                  <span className="navbar__dropdown-item-index">
                    0{index + 1}
                  </span>

                  <span className="navbar__dropdown-item-copy">
                    <strong>{item.title}</strong>
                    <small>{item.text}</small>
                  </span>

                  <ArrowRight
                    size={16}
                    className="navbar__dropdown-item-arrow"
                  />
                </a>
              ))}

              <div className="navbar__dropdown-footer">
                <span>
                  <b className="navbar__dropdown-live" />
                  LIVE COLLECTION
                </span>

                <a href="/products" onClick={closeMenu}>
                  Hepsini Gör
                  <ArrowRight size={14} />
                </a>
              </div>

            </div>

          </div>


          <a
            href="/designer"
            className={`navbar__link ${
              isActive(['/designer', '/designer/'])
                ? 'navbar__link--active'
                : ''
            }`}
          >
            Kendin Tasarla
          </a>


          <a
            href="/projects"
            className={`navbar__link ${
              isActive([
                '/projects',
                '/projects/',
                '/projeler',
                '/projeler/',
              ])
                ? 'navbar__link--active'
                : ''
            }`}
          >
            Projeler
          </a>


          <a
            href="/about"
            className={`navbar__link ${
              isActive([
                '/about',
                '/about/',
                '/hakkimizda',
                '/hakkimizda/',
              ])
                ? 'navbar__link--active'
                : ''
            }`}
          >
            Hakkımızda
          </a>


          <a
            href="/blog"
            className={`navbar__link ${
              isActive(['/blog', '/blog/'])
                ? 'navbar__link--active'
                : ''
            }`}
          >
            Blog
          </a>


          <a
            href="/faq"
            className={`navbar__link ${
              isActive(['/faq', '/faq/', '/sss', '/sss/'])
                ? 'navbar__link--active'
                : ''
            }`}
          >
            S.S.S
          </a>


          <a
            href="/contact"
            className={`navbar__link ${
              isActive([
                '/contact',
                '/contact/',
                '/iletisim',
                '/iletisim/',
              ])
                ? 'navbar__link--active'
                : ''
            }`}
          >
            İletişim
          </a>

        </nav>


        <div className="navbar__actions">

          <button
            type="button"
            className="navbar__offer"
            onClick={() => navigate('/contact', closeMenu)}
          >
            <MessageCircle size={15} />
            <span>Teklif Al</span>
            <ArrowRight size={15} />
          </button>

          <button
            type="button"
            className="navbar__mobile-toggle"
            onClick={() => setMobileOpen((current) => !current)}
            aria-label={mobileOpen ? 'Menüyü kapat' : 'Menüyü aç'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={21} /> : <Menu size={21} />}
          </button>

        </div>

      </div>


      <div className={`navbar__mobile ${mobileOpen ? 'navbar__mobile--show' : ''}`}>

        <div className="navbar__mobile-inner">

          <button
            type="button"
            className="navbar__mobile-link"
            onClick={() => navigate('/', closeMenu)}
          >
            Ana Sayfa
            <ArrowRight size={17} />
          </button>

          <button
            type="button"
            className="navbar__mobile-link navbar__mobile-link--parent"
            onClick={() => setProductsOpen((current) => !current)}
          >
            <span>Ürünler</span>
            <ChevronDown
              size={17}
              className={productsOpen ? 'is-rotated' : ''}
            />
          </button>

          <div
            className={`navbar__mobile-submenu ${
              productsOpen ? 'navbar__mobile-submenu--show' : ''
            }`}
          >
            {productLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
              >
                {item.title}
                <ArrowRight size={15} />
              </a>
            ))}
          </div>

          <button
            type="button"
            className="navbar__mobile-link"
            onClick={() => navigate('/designer', closeMenu)}
          >
            Kendin Tasarla
            <ArrowRight size={17} />
          </button>

          <button
            type="button"
            className="navbar__mobile-link"
            onClick={() => navigate('/projects', closeMenu)}
          >
            Projeler
            <ArrowRight size={17} />
          </button>

          <button
            type="button"
            className="navbar__mobile-link"
            onClick={() => navigate('/about', closeMenu)}
          >
            Hakkımızda
            <ArrowRight size={17} />
          </button>

          <button
            type="button"
            className="navbar__mobile-link"
            onClick={() => navigate('/blog', closeMenu)}
          >
            Blog
            <ArrowRight size={17} />
          </button>

          <button
            type="button"
            className="navbar__mobile-link"
            onClick={() => navigate('/faq', closeMenu)}
          >
            S.S.S
            <ArrowRight size={17} />
          </button>

          <button
            type="button"
            className="navbar__mobile-link"
            onClick={() => navigate('/contact', closeMenu)}
          >
            İletişim
            <ArrowRight size={17} />
          </button>


          <button
            type="button"
            className="navbar__mobile-cta"
            onClick={() => navigate('/contact', closeMenu)}
          >
            <MessageCircle size={17} />
            Teklif Al
          </button>

        </div>

      </div>
    </header>
  )
}

export default Navbar
