import { useEffect, useMemo, useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Search,
  SlidersHorizontal,
  Sparkles,
  Zap,
  Ruler,
  ShieldCheck,
  Palette,
} from 'lucide-react'
import products from '../../data/products'
import './Product.css'

const NEON_COLORS = [
  '#ff3cac',
  '#ff4d6d',
  '#ffb347',
  '#8cff66',
  '#4dffea',
  '#64b5ff',
  '#8d7dff',
  '#d66bff',
]

function Products() {
  const [searchTerm, setSearchTerm] = useState('')
  const [category, setCategory] = useState('Tümü')
  const [sortBy, setSortBy] = useState('featured')
  const [activeColor, setActiveColor] = useState(0)
  const [hoveredProduct, setHoveredProduct] = useState(null)

  const categories = [
    'Tümü',
    ...Array.from(new Set(products.map((product) => product.category))),
  ]

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveColor((current) => (current + 1) % NEON_COLORS.length)
    }, 2200)

    return () => window.clearInterval(interval)
  }, [])

  useEffect(() => {
    const handlePointerMove = (event) => {
      const root = document.querySelector('.products-page')
      if (!root) return

      const x = (event.clientX / window.innerWidth) * 100
      const y = (event.clientY / window.innerHeight) * 100

      root.style.setProperty('--mouse-x', `${x}%`)
      root.style.setProperty('--mouse-y', `${y}%`)
    }

    window.addEventListener('pointermove', handlePointerMove)
    return () => window.removeEventListener('pointermove', handlePointerMove)
  }, [])

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (searchTerm.trim()) {
      const search = searchTerm.toLowerCase()

      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(search) ||
          product.category.toLowerCase().includes(search) ||
          product.description.toLowerCase().includes(search),
      )
    }

    if (category !== 'Tümü') {
      result = result.filter((product) => product.category === category)
    }

    if (sortBy === 'name') {
      result.sort((a, b) => a.name.localeCompare(b.name, 'tr'))
    }

    return result
  }, [searchTerm, category, sortBy])

  const openProductDetail = (productId) => {
    window.location.assign(`/products/${productId}`)
  }

  const openStore = (product) => {
    if (!product?.sourceUrl) return

    window.open(product.sourceUrl, '_blank', 'noopener,noreferrer')
  }

  const scrollProducts = (direction) => {
    const container = document.querySelector('.products-carousel')
    if (!container) return

    container.scrollBy({
      left: direction === 'left' ? -420 : 420,
      behavior: 'smooth',
    })
  }

  const resetFilters = () => {
    setSearchTerm('')
    setCategory('Tümü')
    setSortBy('featured')
  }

  return (
    <main
      className="products-page"
      style={{
        '--accent': NEON_COLORS[activeColor],
        '--accent-next': NEON_COLORS[(activeColor + 1) % NEON_COLORS.length],
      }}
    >
      <div className="products-noise" />
      <div className="products-cursor-glow" />

      <section className="products-hero">
        <div className="products-container products-hero__grid">
          <div className="products-hero__content">
            <div className="products-live-line">
              <span className="products-live-dot" />
              LIVE COLLECTION
              <span className="products-live-line__bar" />
              2026
            </div>

            <span className="products-eyebrow">
              TWINSLED / NEON COLLECTION
            </span>

            <h1>
              Işığı
              <br />
              <span>ürüne dönüştür.</span>
            </h1>

            <p className="products-hero__lead">
              Hazır neon tasarımlarından ilham al. Ürünü incele, detaylarını
              keşfet ve kendi mekanının karakterine uygun ışığı seç.
            </p>

            <div className="products-hero__actions">
              <button
                type="button"
                className="products-primary-cta"
                onClick={() => document.querySelector('.products-collection')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Koleksiyona Geç
                <ArrowDownIcon />
              </button>

              <button
                type="button"
                className="products-secondary-cta"
                onClick={() => window.location.assign('/designer')}
              >
                Kendin Tasarla
                <ArrowUpRight size={15} />
              </button>
            </div>

            <div className="products-hero__stats">
              <div>
                <strong>{products.length}+</strong>
                <span>TASARIM</span>
              </div>

              <div>
                <strong>9</strong>
                <span>NEON RENK</span>
              </div>

              <div>
                <strong>30–500</strong>
                <span>CM ÖLÇÜ</span>
              </div>

              <div>
                <strong>01</strong>
                <span>ÖZEL TASARIM</span>
              </div>
            </div>
          </div>

          <div className="products-hero__visual">
            <div className="products-hero__visual-top">
              <span>TWINSLED / PRODUCT SYSTEM</span>
              <span>01 — 09</span>
            </div>

            <div className="products-hero__visual-grid" />

            <div className="hero-orbit hero-orbit--one" />
            <div className="hero-orbit hero-orbit--two" />

            <div className="hero-glow hero-glow--one" />
            <div className="hero-glow hero-glow--two" />

            <div className="hero-neon-scene">
              <span className="hero-neon-scene__line" />
              <span className="hero-neon-scene__mini">SIGN • LIGHT • SPACE</span>
              <strong className="hero-neon-scene__word">TWINSLED</strong>
              <span className="hero-neon-scene__sub">YOUR SPACE / YOUR LIGHT</span>
            </div>

            <div className="hero-floating-panel hero-floating-panel--top">
              <span>ACTIVE COLOR</span>
              <strong style={{ color: NEON_COLORS[activeColor] }}>
                {NEON_COLORS[activeColor]}
              </strong>
            </div>

            <div className="hero-floating-panel hero-floating-panel--bottom">
              <Palette size={15} />
              <div>
                <strong>Dynamic Neon</strong>
                <span>Renk döngüsü aktif</span>
              </div>
            </div>

            <div className="hero-scanline" />
          </div>
        </div>
      </section>

      <section className="products-collection">
        <div className="products-container">
          <div className="products-section-intro">
            <div>
              <span className="products-section-kicker">01 / COLLECTION</span>
              <h2>
                Neon tabelalar.
                <span> Canlı, karakterli, sana ait.</span>
              </h2>
            </div>

            <p>
              Koleksiyondaki tasarımları kategoriye göre filtrele, ara veya
              doğrudan incele.
            </p>
          </div>

          <div className="products-toolbar">
            <div className="products-categories">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={category === item ? 'is-active' : ''}
                  onClick={() => setCategory(item)}
                >
                  <span>{item}</span>
                </button>
              ))}
            </div>

            <div className="products-toolbar__right">
              <label className="products-search">
                <Search size={15} />
                <input
                  type="text"
                  placeholder="Ürün ara..."
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                />
              </label>

              <label className="products-sort">
                <SlidersHorizontal size={15} />
                <select
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value)}
                >
                  <option value="featured">Öne Çıkanlar</option>
                  <option value="name">İsim: A → Z</option>
                </select>
                <ChevronDown size={13} />
              </label>
            </div>
          </div>

          <div className="products-heading">
            <div>
              <span>SELECT / DISCOVER</span>
              <h3>{filteredProducts.length} tasarım</h3>
            </div>

            <div className="products-heading__actions">
              <button
                type="button"
                aria-label="Ürünleri sola kaydır"
                onClick={() => scrollProducts('left')}
              >
                <ArrowLeft size={16} />
              </button>

              <button
                type="button"
                aria-label="Ürünleri sağa kaydır"
                onClick={() => scrollProducts('right')}
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="products-carousel">
              {filteredProducts.map((product, index) => (
                <article
                  className={`product-card ${hoveredProduct === product.id ? 'is-hovered' : ''}`}
                  key={product.id}
                  style={{
                    '--card-accent': product.color || NEON_COLORS[index % NEON_COLORS.length],
                    '--card-delay': `${index * 80}ms`,
                  }}
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  <button
                    type="button"
                    className="product-card__media"
                    onClick={() => openProductDetail(product.id)}
                    aria-label={`${product.name} detayını aç`}
                  >
                    <img src={product.image} alt={product.name} />

                    <div className="product-card__media-shade" />
                    <div className="product-card__light-sweep" />

                    {product.badge && (
                      <span className="product-card__badge">
                        {product.badge}
                      </span>
                    )}

                    <span className="product-card__index">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <span className="product-card__view">
                      Görüntüle
                      <ArrowUpRight size={14} />
                    </span>
                  </button>

                  <div className="product-card__content">
                    <div className="product-card__topline">
                      <span className="product-card__category">
                        {product.category}
                      </span>

                      <span className="product-card__status">
                        <span />
                        Üretime hazır
                      </span>
                    </div>

                    <h3>{product.name}</h3>
                    <p>{product.description}</p>

                    <div className="product-card__features">
                      <span>
                        <Ruler size={12} />
                        Özel ölçü
                      </span>
                      <span>
                        <Zap size={12} />
                        LED ışık
                      </span>
                      <span>
                        <ShieldCheck size={12} />
                        Premium
                      </span>
                    </div>

                    <div className="product-card__bottom">
                      <div className="product-card__identity">
                        <small>TWINSLED / SERIES</small>
                        <strong>
                          {String(product.id).padStart(2, '0')}
                        </strong>
                      </div>

                      <div className="product-card__actions">
                        <button
                          type="button"
                          className="product-card__detail"
                          onClick={() => openProductDetail(product.id)}
                        >
                          Detay
                          <ArrowRight size={14} />
                        </button>

                        <button
                          type="button"
                          className="product-card__external"
                          onClick={() => openStore(product)}
                        >
                          Mağaza
                          <ArrowUpRight size={13} />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="products-empty">
              <Sparkles size={28} />
              <h3>Tasarım bulunamadı</h3>
              <p>Arama veya filtreleri değiştirerek tekrar deneyebilirsin.</p>

              <button type="button" onClick={resetFilters}>
                Filtreleri Temizle
              </button>
            </div>
          )}

          <div className="products-custom">
            <div className="products-custom__copy">
              <span className="products-section-kicker">02 / YOUR IDEA</span>

              <h2>
                Hazır olanı
                <br />
                <span>değil, kendi ışığını yap.</span>
              </h2>

              <p>
                Yazını, rengini, fontunu, ölçüsünü ve zeminini seç. TWINSLED
                tasarım stüdyosunda kendi neon tabelanı oluştur ve önizle.
              </p>

              <button
                type="button"
                className="products-custom__cta"
                onClick={() => window.location.assign('/designer')}
              >
                Kendin Tasarla
                <ArrowRight size={15} />
              </button>
            </div>

            <div className="products-custom__visual">
              <div className="custom-grid" />
              <div className="custom-glow custom-glow--one" />
              <div className="custom-glow custom-glow--two" />

              <div className="custom-sign custom-sign--one">
                <span>CREATE</span>
              </div>

              <div className="custom-sign custom-sign--two">
                <span>YOUR</span>
              </div>

              <div className="custom-sign custom-sign--three">
                <span>LIGHT</span>
              </div>

              <div className="custom-readout">
                <span>LIVE PREVIEW</span>
                <strong>ACTIVE</strong>
              </div>
            </div>
          </div>

          <div className="products-bottom-note">
            <span>
              <Sparkles size={13} />
              Fiyat bilgisi yayınlamıyoruz.
            </span>

            <span>
              Ölçü + renk + üretim seçenekleri için teklif al.
            </span>
          </div>
        </div>
      </section>
    </main>
  )
}

function ArrowDownIcon() {
  return (
    <span className="products-arrow-down">
      <ArrowRight size={15} />
    </span>
  )
}

export default Products
