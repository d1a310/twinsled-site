import { useEffect, useMemo, useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  MessageCircle,
  Ruler,
  ShieldCheck,
  Sparkles,
  Zap,
} from 'lucide-react'
import products from '../../data/products'
import './ProductDetail.css'

const neonPalette = [
  '#ff45d0',
  '#5ee7ff',
  '#5b7cff',
  '#b766ff',
  '#ff4f6d',
  '#ffc35a',
  '#62ff9b',
  '#d8f7ff',
  '#ff7cff',
]

function ProductDetail({ productId }) {
  const [neonIndex, setNeonIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState(0)

  const product = useMemo(
    () =>
      products.find(
        (item) => String(item.id).toLowerCase() === String(productId).toLowerCase(),
      ),
    [productId],
  )

  useEffect(() => {
    const timer = window.setInterval(() => {
      setNeonIndex((current) => (current + 1) % neonPalette.length)
    }, 2400)

    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    setSelectedImage(0)
  }, [productId])

  if (!product) {
    return (
      <main className="product-detail-page">
        <div className="product-detail-empty">
          <span>TWINSLED / PRODUCT</span>
          <h1>Ürün bulunamadı.</h1>
          <p>Bu ürün kaldırılmış veya bağlantı değişmiş olabilir.</p>
          <button type="button" onClick={() => window.location.assign('/products')}>
            <ArrowLeft size={16} />
            Ürünlere Dön
          </button>
        </div>
      </main>
    )
  }

  const accent = product.color || neonPalette[neonIndex]
  const images = [product.image, ...(Array.isArray(product.images) ? product.images : [])]
    .filter(Boolean)
    .filter((image, index, array) => array.indexOf(image) === index)

  const features = Array.isArray(product.features) && product.features.length > 0
    ? product.features
    : ['Özel ölçü', 'LED aydınlatma', 'Premium üretim', 'Teklif ile fiyatlandırma']

  const sendWhatsApp = (phone) => {
    const message = [
      'Merhaba TWINSLED,',
      '',
      `“${product.name}” ürünü hakkında bilgi ve teklif almak istiyorum.`,
      `Kategori: ${product.category || '-'}`,
      `Ürün kodu: ${product.id || '-'}`,
      '',
      'Ölçü, renk, üretim süresi ve fiyatlandırma konusunda bilgi verebilir misiniz?',
    ].join('\n')

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer',
    )
  }

  const openStore = () => {
    if (!product.sourceUrl) return
    window.open(product.sourceUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <main
      className="product-detail-page"
      style={{
        '--detail-accent': accent,
        '--detail-accent-rgb': hexToRgb(accent),
      }}
    >
      <div className="product-detail-page__orb product-detail-page__orb--one" />
      <div className="product-detail-page__orb product-detail-page__orb--two" />
      <div className="product-detail-page__grid" />
      <div className="product-detail-page__scan" />

      <div className="product-detail-container">
        <div className="product-detail-breadcrumb">
          <button type="button" onClick={() => window.location.assign('/products')}>
            <ArrowLeft size={14} />
            Ürünler
          </button>

          <span>/</span>
          <span>{product.category}</span>
          <span>/</span>
          <strong>{product.name}</strong>
        </div>

        <section className="product-detail-layout">
          <div className="product-detail-gallery">
            <div className="product-detail-gallery__header">
              <span>TWINSLED / PRODUCT SYSTEM</span>
              <span>LIVE PREVIEW</span>
            </div>

            <div className="product-detail-main-image">
              {images[selectedImage] ? (
                <img src={images[selectedImage]} alt={product.name} />
              ) : (
                <div className="product-detail-image-placeholder">
                  <Sparkles size={30} />
                  <span>GÖRSEL HAZIRLANIYOR</span>
                </div>
              )}

              <div className="product-detail-main-image__shade" />
              <div className="product-detail-main-image__frame" />

              <div className="product-detail-live">
                <span />
                ACTIVE LIGHT
              </div>

              {product.badge && (
                <div className="product-detail-badge">{product.badge}</div>
              )}

              <div className="product-detail-code">
                <span>PRODUCT</span>
                <strong>#{String(product.id).padStart(4, '0')}</strong>
              </div>
            </div>

            {images.length > 1 && (
              <div className="product-detail-thumbs">
                {images.map((image, index) => (
                  <button
                    type="button"
                    key={`${image}-${index}`}
                    className={selectedImage === index ? 'is-active' : ''}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img src={image} alt={`${product.name} ${index + 1}`} />
                  </button>
                ))}
              </div>
            )}

            <div className="product-detail-gallery-note">
              <Ruler size={14} />
              <span>Özel ölçü + renk seçenekleri için teklif alın.</span>
            </div>
          </div>

          <div className="product-detail-content">
            <div className="product-detail-kicker">
              <span className="product-detail-kicker__dot" />
              {product.category || 'NEON'}
            </div>

            <h1>
              {product.name}
              <span>.</span>
            </h1>

            <div className="product-detail-tagline">
              Mekanın karakterini belirleyen ışık.
            </div>

            <p className="product-detail-description">
              {product.description}
            </p>

            <div className="product-detail-accent-line">
              <span style={{ background: accent }} />
              <span />
              <span />
              <span />
            </div>

            <div className="product-detail-info-grid">
              <div>
                <small>RENK</small>
                <strong style={{ color: accent }}>
                  {product.colorName || 'Seçilebilir'}
                </strong>
              </div>

              <div>
                <small>ÜRETİM</small>
                <strong>Özel ölçü</strong>
              </div>

              <div>
                <small>AYDINLATMA</small>
                <strong>LED Neon</strong>
              </div>

              <div>
                <small>MARKA</small>
                <strong>TWINSLED</strong>
              </div>
            </div>

            <div className="product-detail-features">
              {features.map((feature, index) => (
                <div className="product-detail-feature" key={`${feature}-${index}`}>
                  <CheckCircle2 size={14} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="product-detail-quote">
              <div className="product-detail-quote__icon">
                <Zap size={19} />
              </div>

              <div>
                <span>FİYATLANDIRMA</span>
                <strong>Ürüne özel teklif oluşturuyoruz.</strong>
                <p>
                  Sabit fiyat yayınlamıyoruz. Ölçü, renk ve üretim detaylarına
                  göre sana özel teklif hazırlıyoruz.
                </p>
              </div>
            </div>

            <div className="product-detail-actions">
              <button
                type="button"
                className="product-detail-whatsapp product-detail-whatsapp--primary"
                onClick={() => sendWhatsApp('905439103247')}
              >
                <MessageCircle size={19} />
                <span>
                  <strong>WhatsApp'tan Teklif Al</strong>
                  <small>TWINSLED satış ekibine ulaş</small>
                </span>
                <ArrowUpRight size={17} />
              </button>

              <button
                type="button"
                className="product-detail-whatsapp product-detail-whatsapp--secondary"
                onClick={() => sendWhatsApp('905439103246')}
              >
                <MessageCircle size={18} />
                <span>
                  <strong>Alternatif WhatsApp Hattı</strong>
                  <small>Teklif ve ürün bilgisi</small>
                </span>
                <ArrowUpRight size={16} />
              </button>

              {product.sourceUrl && (
                <button
                  type="button"
                  className="product-detail-store"
                  onClick={openStore}
                >
                  <ExternalLink size={16} />
                  <span>
                    <strong>Mağaza Sayfasını Aç</strong>
                    <small>Harici ürün sayfasını yeni sekmede görüntüle</small>
                  </span>
                  <ArrowRight size={15} />
                </button>
              )}
            </div>

            <div className="product-detail-assurance">
              <div>
                <ShieldCheck size={16} />
                <span>Premium üretim yaklaşımı</span>
              </div>
              <div>
                <Sparkles size={16} />
                <span>Özel tasarım desteği</span>
              </div>
              <div>
                <Ruler size={16} />
                <span>Özel ölçü seçenekleri</span>
              </div>
            </div>
          </div>
        </section>

        <section className="product-detail-bottom">
          <div>
            <span>TWINSLED / YOUR IDEA</span>
            <h2>
              Bu ürün güzel.
              <br />
              <em>Ya seninkisi?</em>
            </h2>
            <p>
              Hazır tasarım yerine kendi yazını, rengini, fontunu ve ölçünü
              seçerek tamamen sana özel bir neon oluştur.
            </p>

            <button
              type="button"
              onClick={() => window.location.assign('/designer')}
            >
              Kendin Tasarla
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="product-detail-bottom__visual">
            <div className="detail-neon detail-neon--one">YOUR</div>
            <div className="detail-neon detail-neon--two">OWN</div>
            <div className="detail-neon detail-neon--three">GLOW</div>
            <div className="detail-neon__scan" />
          </div>
        </section>
      </div>
    </main>
  )
}

function hexToRgb(hex) {
  const normalized = String(hex).replace('#', '')
  const value = normalized.length === 3
    ? normalized
        .split('')
        .map((char) => `${char}${char}`)
        .join('')
    : normalized

  const number = Number.parseInt(value, 16)

  if (Number.isNaN(number)) {
    return '255,69,208'
  }

  return `${(number >> 16) & 255}, ${(number >> 8) & 255}, ${number & 255}`
}

export default ProductDetail
