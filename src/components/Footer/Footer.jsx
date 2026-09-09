import {
  ArrowUp,
  ArrowUpRight,
  MapPin,
  MessageCircle,
  Sparkles,
} from 'lucide-react'

import './Footer.css'

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const goTo = (path) => {
    window.location.href = path
  }

  return (
    <footer className="site-footer">
      <div className="footer-orbit footer-orbit-one" />
      <div className="footer-orbit footer-orbit-two" />
      <div className="footer-scanline" />

      <div className="footer-container">
        <div className="footer-cta">
          <div className="footer-cta-glow" />

          <div className="footer-cta-content">
            <div className="footer-eyebrow">
              <Sparkles size={16} />
              <span>TWINSLED</span>
            </div>

            <h2>
              Işığı sen
              <span> tasarla.</span>
            </h2>

            <p>
              Mekânına özel neon tasarımlar, tabela çözümleri ve
              profesyonel aydınlatma sistemleri.
            </p>
          </div>

          <button
            type="button"
            className="footer-main-button"
            onClick={() => goTo('/contact')}
          >
            Teklif Al
            <ArrowUpRight size={19} />
          </button>
        </div>

        <div className="footer-grid">
          <div className="footer-brand-column">
            <button
              type="button"
              className="footer-logo"
              onClick={() => goTo('/')}
              aria-label="TWINSLED ana sayfa"
            >
              <span className="footer-logo-mark">T</span>

              <span className="footer-logo-text">
                TWINSLED
              </span>
            </button>

            <p className="footer-description">
              Neonun modern dünyasını tasarım, teknoloji ve
              estetik ile birleştiriyoruz.
            </p>

            <div className="footer-socials">
              <a
                href="https://wa.me/905439103247"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="footer-social"
              >
                <MessageCircle size={18} />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="footer-social"
              >
                <span className="social-text">IG</span>
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="footer-social"
              >
                <span className="social-text">FB</span>
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h3>Keşfet</h3>

            <button
              type="button"
              onClick={() => goTo('/')}
            >
              Ana Sayfa
            </button>

            <button
              type="button"
              onClick={() => goTo('/products')}
            >
              Ürünler
            </button>

            <button
              type="button"
              onClick={() => goTo('/designer')}
            >
              Kendin Tasarla
            </button>

            <button
              type="button"
              onClick={() => goTo('/projects')}
            >
              Projeler
            </button>
          </div>

          <div className="footer-column">
            <h3>TWINSLED</h3>

            <button
              type="button"
              onClick={() => goTo('/about')}
            >
              Hakkımızda
            </button>

            <button
              type="button"
              onClick={() => goTo('/blog')}
            >
              Blog
            </button>

            <button
              type="button"
              onClick={() => goTo('/faq')}
            >
              S.S.S.
            </button>

            <button
              type="button"
              onClick={() => goTo('/contact')}
            >
              İletişim
            </button>
          </div>

          <div className="footer-column footer-location-column">
            <h3>Lokasyonlar</h3>

            <div className="footer-location">
              <MapPin size={17} />
              <div>
                <strong>Esentepe</strong>
                <span>Kayseri</span>
              </div>
            </div>

            <div className="footer-location">
              <MapPin size={17} />
              <div>
                <strong>Eski Sanayi</strong>
                <span>Kayseri</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} TWINSLED. Tüm hakları saklıdır.
          </div>

          <div className="footer-bottom-links">
            <span>Neon • LED • Tasarım</span>
          </div>

          <button
            type="button"
            className="footer-top-button"
            onClick={scrollToTop}
            aria-label="Yukarı çık"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer