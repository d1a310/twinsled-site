import { useEffect, useState } from 'react'

import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Zap,
  Ruler,
  ShieldCheck,
} from 'lucide-react'

import productData from '../../data/products'
import './Home.css'

function formatPrice(value) {
  return new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
    maximumFractionDigits: 0,
  }).format(Number(value) || 0)
}

function Home() {
  const [neonIndex, setNeonIndex] = useState(0)

  const neonPalette = [
    { name: 'PINK', color: '#ff45d0', glow: '255,69,208' },
    { name: 'CYAN', color: '#5ee7ff', glow: '94,231,255' },
    { name: 'BLUE', color: '#5b7cff', glow: '91,124,255' },
    { name: 'PURPLE', color: '#b766ff', glow: '183,102,255' },
    { name: 'RED', color: '#ff4f6d', glow: '255,79,109' },
    { name: 'AMBER', color: '#ffc35a', glow: '255,195,90' },
    { name: 'GREEN', color: '#62ff9b', glow: '98,255,155' },
    { name: 'ICE', color: '#d8f7ff', glow: '216,247,255' },
    { name: 'VIOLET', color: '#ff7cff', glow: '255,124,255' },
  ]

  const activeNeon = neonPalette[neonIndex]

  useEffect(() => {
    const interval = window.setInterval(() => {
      setNeonIndex((current) => (current + 1) % neonPalette.length)
    }, 2200)

    return () => window.clearInterval(interval)
  }, [])

  const featuredProducts = Array.isArray(productData)
    ? productData.slice(0, 4)
    : []

  return (
    <main className="home" style={{
      "--neon-color": activeNeon.color,
      "--neon-rgb": activeNeon.glow,
    }}>
      <section className="home-hero">
        <div className="home-hero__bg-word" aria-hidden="true">TWINSLED</div>
        <div className="home-hero__grid" aria-hidden="true" />
        <div className="home-hero__grain" aria-hidden="true" />
        <div className="home-hero__scanline" aria-hidden="true" />
        <div className="home-hero__particles" aria-hidden="true">
          <i /><i /><i /><i /><i /><i /><i /><i />
        </div>
        <div className="home-hero__orb home-hero__orb--pink" aria-hidden="true" />
        <div className="home-hero__orb home-hero__orb--cyan" aria-hidden="true" />
        <div className="home-hero__beam home-hero__beam--one" aria-hidden="true" />
        <div className="home-hero__beam home-hero__beam--two" aria-hidden="true" />

        <div className="home-hero__rail home-hero__rail--left" aria-hidden="true">
          <span>01</span>
          <i />
          <span>LIGHT / DESIGN / SPACE</span>
        </div>

        <div className="home-hero__rail home-hero__rail--right" aria-hidden="true">
          <span>SCROLL</span>
          <i />
        </div>

        <div className="home-container home-hero__container">
          <div className="home-hero__content">
            <div className="home-hero__eyebrow">
              <span className="home-hero__eyebrow-dot" />
              <span>TWINSLED / NEON &amp; LED STUDIO</span>
            </div>

            <div className="home-hero__kicker">MEKANI DEĞİŞTİREN IŞIK</div>

            <h1>
              Işığı
              <br />
              <span>sen tasarla.</span>
            </h1>

            <p>
              Özel neon tabelalar, LED çözümleri ve markanı öne çıkaran
              özgün ışıklı tasarımlar. Fikrini alıyor, onu mekânın imzasına
              dönüştürüyoruz.
            </p>

            <div className="home-hero__actions">
              <a
                href="/designer"
                className="home-button home-button--primary"
              >
                Kendin Tasarla
                <ArrowRight size={18} />
              </a>

              <a
                href="/products"
                className="home-button home-button--secondary"
              >
                Koleksiyonu Gör
                <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="home-hero__proof">
              <div className="home-hero__proof-item">
                <strong>30–500</strong>
                <span>CM ÖZEL ÖLÇÜ</span>
              </div>

              <div className="home-hero__proof-line" />

              <div className="home-hero__proof-item">
                <strong>40+</strong>
                <span>YAZI STİLİ</span>
              </div>

              <div className="home-hero__proof-line" />

              <div className="home-hero__proof-item">
                <strong>9</strong>
                <span>NEON RENK</span>
              </div>
            </div>
          </div>

          <div className="home-hero__showcase">
            <div className="home-hero__showcase-meta">
              <span>TWINSLED / 001</span>
              <span><b className="live-dot" /> LIVE PREVIEW</span>
            </div>

            <div className="hero-stage">
              <div className="hero-stage__backlight" />
              <div className="hero-stage__halo hero-stage__halo--one" />
              <div className="hero-stage__halo hero-stage__halo--two" />
              <div className="hero-stage__orbit hero-stage__orbit--one" />
              <div className="hero-stage__orbit hero-stage__orbit--two" />
              <div className="hero-stage__plate">
                <div className="hero-stage__plate-top">
                  <span>TWINSLED</span>
                  <span>EST. 2026</span>
                </div>

                <div className="hero-stage__sign">
                  <span className="hero-stage__small">MAKE IT</span>
                  <strong>GLOW</strong>
                  <span className="hero-stage__small">YOUR WAY</span>
                </div>

                <div className="hero-stage__plate-bottom">
                  <span>HANDMADE / LED NEON</span>
                  <span>TR</span>
                </div>
              </div>

              <div className="hero-stage__dimension hero-stage__dimension--top">
                <Ruler size={13} />
                <span>120 CM</span>
              </div>

              <div className="hero-stage__dimension hero-stage__dimension--side">
                <span>60 CM</span>
              </div>

              <div className="hero-stage__status">
                <span className="hero-stage__status-dot" />
                <span>DESIGN YOUR LIGHT</span>
              </div>

              <div className="hero-stage__micro hero-stage__micro--left">
                <Sparkles size={13} />
                <span>ÖZEL TASARIM</span>
              </div>

              <div className="hero-stage__micro hero-stage__micro--right">
                <Zap size={13} />
                <span>LOW ENERGY</span>
              </div>
            </div>

            <div className="home-hero__showcase-footer">
              <span>01 / 04</span>
              <div className="home-hero__showcase-progress">
                <i />
                <i />
                <i />
                <i />
              </div>
              <span>{activeNeon.name} / NEON OBJECT</span>
            </div>
          </div>
        </div>

        <div className="home-hero__bottom-brand" aria-hidden="true">
          TWINSLED STUDIO · KAYSERİ · TÜRKİYE
        </div>
      </section>

      <section className="home-intro">
        <div className="home-container">
          <div className="home-intro__grid">
            <div>
              <span className="home-section-label">
                TWINSLED / WHAT WE DO
              </span>
            </div>

            <div>
              <h2>
                Sadece ışık değil,
                <span> atmosfer </span>
                üretiyoruz.
              </h2>

              <p>
                Bir mekanın karakterini değiştiren şey bazen
                sadece doğru ışığın kendisidir. TWINSLED olarak
                tasarımı, teknolojiyi ve ışığı tek noktada
                buluşturuyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="home-products">
        <div className="home-container">
          <div className="home-section-header">
            <div>
              <span className="home-section-label">
                ÖNE ÇIKANLAR
              </span>

              <h2>
                Işığı
                <span> seç.</span>
              </h2>
            </div>

            <a href="/products" className="home-section-link">
              Tüm Ürünleri Gör
              <ArrowRight size={17} />
            </a>
          </div>

          {featuredProducts.length > 0 ? (
            <div className="home-product-grid">
              {featuredProducts.map((product, index) => (
                <a
                  key={product.id ?? index}
                  href={`/products/${product.id}`}
                  className="home-product-card"
                >
                  <div className="home-product-card__image">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.name || 'TWINSLED ürün'}
                      />
                    ) : (
                      <div className="home-product-card__placeholder">
                        NEON
                      </div>
                    )}

                    {product.badge && (
                      <span className="home-product-card__badge">
                        {product.badge}
                      </span>
                    )}

                    <div className="home-product-card__overlay">
                      <span>Ürünü İncele</span>
                      <ArrowUpRight size={17} />
                    </div>
                  </div>

                  <div className="home-product-card__info">
                    <div>
                      <span>
                        {product.category || 'TWINSLED'}
                      </span>

                      <h3>
                        {product.name || 'Özel Neon Ürün'}
                      </h3>
                    </div>

                    <strong>
                      {formatPrice(product.price)}
                    </strong>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="home-products-empty">
              <span>Ürünler hazırlanıyor.</span>
            </div>
          )}
        </div>
      </section>

      <section className="home-designer">
        <div className="home-container">
          <div className="home-designer__box">
            <div className="home-designer__glow" />

            <div className="home-designer__content">
              <span className="home-section-label">
                TWINSLED DESIGN STUDIO
              </span>

              <h2>
                Hazır ürün
                <br />
                sana göre değil mi?
              </h2>

              <p>
                Kendi yazını oluştur. Rengini seç. Fontunu
                belirle. Boyutunu seç. Tasarımını anında
                önizle ve siparişe hazırla.
              </p>

              <a
                href="/designer"
                className="home-button home-button--light"
              >
                Tasarım Stüdyosunu Aç
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="home-designer__preview">
              <div className="designer-preview__frame">
                <span>YOUR</span>
                <strong>IDEA</strong>
                <span>GLOW</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-services">
        <div className="home-container">
          <div className="home-section-header">
            <div>
              <span className="home-section-label">
                NEDEN TWINSLED
              </span>

              <h2>
                Tasarımdan
                <span> üretime.</span>
              </h2>
            </div>
          </div>

          <div className="home-services__grid">
            <article className="home-service-card">
              <div className="home-service-card__number">
                01
              </div>

              <div className="home-service-card__icon">
                <Sparkles size={22} />
              </div>

              <h3>Özgün Tasarım</h3>

              <p>
                Markana ve mekanına özel, tamamen sana ait
                neon tasarımlar oluşturuyoruz.
              </p>
            </article>

            <article className="home-service-card">
              <div className="home-service-card__number">
                02
              </div>

              <div className="home-service-card__icon">
                <Zap size={22} />
              </div>

              <h3>LED Teknolojisi</h3>

              <p>
                Modern LED neon teknolojisiyle düşük enerji
                tüketimi ve güçlü görünürlük hedefliyoruz.
              </p>
            </article>

            <article className="home-service-card">
              <div className="home-service-card__number">
                03
              </div>

              <div className="home-service-card__icon">
                <Ruler size={22} />
              </div>

              <h3>Özel Ölçü</h3>

              <p>
                Projenin ölçüsüne ve kullanım alanına göre
                farklı boyutlarda üretim seçenekleri sunuyoruz.
              </p>
            </article>

            <article className="home-service-card">
              <div className="home-service-card__number">
                04
              </div>

              <div className="home-service-card__icon">
                <ShieldCheck size={22} />
              </div>

              <h3>Proje Odaklı</h3>

              <p>
                Kafe, restoran, mağaza, etkinlik ve kurumsal
                projelerde ihtiyaç odaklı çözümler geliştiriyoruz.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="home-projects">
        <div className="home-container">
          <div className="home-projects__header">
            <div>
              <span className="home-section-label">
                PROJELER
              </span>

              <h2>
                Mekanlara
                <span> karakter.</span>
              </h2>
            </div>

            <a
              href="/projects"
              className="home-section-link"
            >
              Projeleri Gör
              <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="home-projects__visual">
            <div className="project-scene project-scene--one">
              <div className="project-scene__label">
                <span>01</span>
                <span>RETAIL</span>
              </div>

              <div className="project-scene__neon">
                OPEN
              </div>
            </div>

            <div className="project-scene project-scene--two">
              <div className="project-scene__label">
                <span>02</span>
                <span>CAFE</span>
              </div>

              <div className="project-scene__neon">
                COFFEE
              </div>
            </div>

            <div className="project-scene project-scene--three">
              <div className="project-scene__label">
                <span>03</span>
                <span>STUDIO</span>
              </div>

              <div className="project-scene__neon">
                CREATE
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-final-cta">
        <div className="home-container">
          <div className="home-final-cta__inner">
            <span className="home-section-label">
              BİR FİKRİN VAR MI?
            </span>

            <h2>
              Onu
              <span> ışığa </span>
              dönüştürelim.
            </h2>

            <p>
              Hazır ürünlere göz at veya kendi tasarımını
              oluştur. Gerisini birlikte halledelim.
            </p>

            <div className="home-final-cta__actions">
              <a
                href="/designer"
                className="home-button home-button--primary"
              >
                Tasarımını Oluştur
                <ArrowRight size={18} />
              </a>

              <a
                href="/contact"
                className="home-button home-button--secondary"
              >
                Teklif Al
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home