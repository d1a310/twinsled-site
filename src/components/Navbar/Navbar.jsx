import { useEffect, useState } from 'react'
import { ChevronDown, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react'
import './Navbar.css'

const productLinks = [
  { label: 'Tüm Ürünler', path: '/urunler', desc: 'Neon ve LED koleksiyonunun tamamı' },
  { label: 'Kendin Tasarla', path: '/kendin-tasarla', desc: 'Kendi neon tasarımını oluştur' },
]

const mainLinks = [
  { label: 'Ana Sayfa', path: '/' },
  { label: 'Projeler', path: '/projeler' },
  { label: 'Hakkımızda', path: '/hakkimizda' },
  { label: 'İletişim', path: '/iletisim' },
]

function TwinsledLogo() {
  return (
    <span className="tw-logo" aria-hidden="true">
      <svg className="tw-logo-svg" viewBox="0 0 447 428" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="twBlue" x1="24" y1="410" x2="205" y2="180" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00D9FF" />
            <stop offset=".42" stopColor="#22CFEF" />
            <stop offset=".76" stopColor="#7B5CF4" />
            <stop offset="1" stopColor="#D52DFF" />
          </linearGradient>
          <linearGradient id="twYellow" x1="206" y1="18" x2="319" y2="360" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFF500" />
            <stop offset=".35" stopColor="#FFE500" />
            <stop offset=".65" stopColor="#FFB22D" />
            <stop offset="1" stopColor="#FF0A7E" />
          </linearGradient>
          <linearGradient id="twPink" x1="277" y1="188" x2="428" y2="380" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F60074" />
            <stop offset=".55" stopColor="#FF1287" />
            <stop offset="1" stopColor="#FF3C9D" />
          </linearGradient>
          <filter id="twGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3.2" result="b1" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b2" />
            <feMerge>
              <feMergeNode in="b2" />
              <feMergeNode in="b1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Mavi sol parça */}
        <path d="M24 381L141 182L191 263L154 325L137 297L92 377H183L207 418H24V381Z" fill="url(#twBlue)" filter="url(#twGlow)" />

        {/* Sarı / pembe merkez parça */}
        <path d="M211 21L293 150L257 177L226 129L205 164L319 358L273 386L174 214L153 177L211 21Z" fill="url(#twYellow)" filter="url(#twGlow)" />
        <path d="M226 129L250 88L284 142L256 177L226 129Z" fill="#FFF000" filter="url(#twGlow)" />

        {/* Pembe sağ parça */}
        <path d="M286 218L329 187L422 378H300L252 298L288 270L317 322H362L326 252L296 273L286 218Z" fill="url(#twPink)" filter="url(#twGlow)" />

        {/* İnce parlama çizgileri */}
        <path d="M55 390L139 250" stroke="#8DF8FF" strokeWidth="4" strokeLinecap="round" opacity=".62" />
        <path d="M212 43L278 150" stroke="white" strokeWidth="3" strokeLinecap="round" opacity=".58" />
        <path d="M302 230L386 365" stroke="#FF9ED7" strokeWidth="3" strokeLinecap="round" opacity=".4" />
      </svg>
      <span className="tw-logo-scan" />
    </span>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)

  const currentPath = window.location.pathname

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('tw-navbar-menu-open', mobileOpen)
    return () => document.body.classList.remove('tw-navbar-menu-open')
  }, [mobileOpen])

  const isActive = (path) => {
    if (path === '/') return currentPath === '/'
    return currentPath.startsWith(path)
  }

  const go = (path) => {
    setMobileOpen(false)
    setProductsOpen(false)
    window.location.assign(path)
  }

  return (
    <header className={`tw-navbar ${scrolled ? 'tw-navbar--scrolled' : ''}`}>
      <div className="tw-navbar-noise" />
      <div className="tw-navbar-glow tw-navbar-glow--left" />
      <div className="tw-navbar-glow tw-navbar-glow--right" />
      <div className="tw-navbar-line" />

      <div className="tw-navbar-shell">
        <div className="tw-navbar-main">
          <button className="tw-brand" type="button" onClick={() => go('/')} aria-label="TWINSLED ana sayfa">
            <TwinsledLogo />
            <span className="tw-brand-copy">
              <strong>TWINSLED</strong>
              <small>NEON / LED / DESIGN</small>
            </span>
          </button>

          <nav className="tw-nav" aria-label="Ana navigasyon">
            {mainLinks.map((item) => (
              <button key={item.path} type="button" className={`tw-nav-link ${isActive(item.path) ? 'active' : ''}`} onClick={() => go(item.path)}>
                <span>{item.label}</span>
                {isActive(item.path) && <i />}
              </button>
            ))}

            <div className="tw-products">
              <button
                type="button"
                className={`tw-nav-link ${isActive('/urunler') || isActive('/kendin-tasarla') ? 'active' : ''}`}
                onClick={() => setProductsOpen((value) => !value)}
                aria-expanded={productsOpen}
              >
                <span>Ürünler</span>
                <ChevronDown size={14} className={productsOpen ? 'open' : ''} />
              </button>

              <div className={`tw-product-panel ${productsOpen ? 'open' : ''}`}>
                <div className="tw-product-head">
                  <span>TWINSLED / COLLECTION</span>
                  <em><b /> LIVE</em>
                </div>

                {productLinks.map((item) => (
                  <button key={item.path} type="button" className="tw-product-item" onClick={() => go(item.path)}>
                    <span className="tw-product-icon"><Sparkles size={15} /></span>
                    <span className="tw-product-text">
                      <strong>{item.label}</strong>
                      <small>{item.desc}</small>
                    </span>
                    <ArrowUpRight size={15} />
                  </button>
                ))}

                <button type="button" className="tw-product-footer" onClick={() => go('/urunler')}>
                  <span>Koleksiyonu keşfet</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          </nav>

          <div className="tw-actions">
            <span className="tw-online"><i /> ONLINE STUDIO</span>

            <button type="button" className="tw-cta" onClick={() => go('/kendin-tasarla')}>
              <span>Tasarımını Başlat</span>
              <ArrowUpRight size={15} />
            </button>

            <button
              type="button"
              className="tw-mobile-toggle"
              onClick={() => setMobileOpen((value) => !value)}
              aria-label={mobileOpen ? 'Menüyü kapat' : 'Menüyü aç'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <div className={`tw-mobile ${mobileOpen ? 'open' : ''}`}>
          <div className="tw-mobile-inner">
            <div className="tw-mobile-kicker">NAVIGATION / TWINSLED STUDIO</div>

            <div className="tw-mobile-links">
              {mainLinks.map((item) => (
                <button key={item.path} type="button" className={`tw-mobile-link ${isActive(item.path) ? 'active' : ''}`} onClick={() => go(item.path)}>
                  <span>{item.label}</span>
                  <ArrowUpRight size={16} />
                </button>
              ))}

              <button type="button" className="tw-mobile-link" onClick={() => setProductsOpen((value) => !value)}>
                <span>Ürünler</span>
                <ChevronDown size={17} className={productsOpen ? 'open' : ''} />
              </button>

              <div className={`tw-mobile-submenu ${productsOpen ? 'open' : ''}`}>
                {productLinks.map((item) => (
                  <button key={item.path} type="button" className="tw-mobile-subitem" onClick={() => go(item.path)}>
                    <span>{item.label}</span>
                    <ArrowUpRight size={14} />
                  </button>
                ))}
              </div>

              <button type="button" className="tw-mobile-cta" onClick={() => go('/kendin-tasarla')}>
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
