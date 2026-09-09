import { useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Quote,
} from 'lucide-react'
import products from '../../data/products'
import './Projects.css'

const featuredProjects = [
  {
    id: 1,
    name: 'Fast Food',
    subtitle: 'Tasty',
    category: 'Restoran & Kafe',
    location: 'Kayseri',
    image: products[0].image,
    accent: '#48ff91',
  },
  {
    id: 2,
    name: 'Pilates',
    subtitle: 'Mode On',
    category: 'Studio',
    location: 'Kayseri',
    image: products[4].image,
    accent: '#ff3cac',
  },
  {
    id: 3,
    name: 'Tattoo',
    subtitle: 'Studio',
    category: 'Studio',
    location: 'Kayseri',
    image: products[1].image,
    accent: '#91edff',
  },
]

const galleryProjects = [
  {
    id: 1,
    name: 'Fast Food',
    category: 'Restoran & Kafe',
    image: products[0].image,
    accent: '#48ff91',
  },
  {
    id: 2,
    name: 'Tattoo Studio',
    category: 'Studio',
    image: products[1].image,
    accent: '#91edff',
  },
  {
    id: 3,
    name: 'But First Nails',
    category: 'Güzellik',
    image: products[2].image,
    accent: '#ff3cac',
  },
  {
    id: 4,
    name: 'Pilates Mode On',
    category: 'Studio',
    image: products[4].image,
    accent: '#ff3cac',
  },
  {
    id: 5,
    name: 'Gamer Mode On',
    category: 'Gaming',
    image: products[7].image,
    accent: '#9b5cff',
  },
  {
    id: 6,
    name: 'Nail Beauty',
    category: 'Güzellik',
    image: products[8].image,
    accent: '#ff3cac',
  },
  {
    id: 7,
    name: 'ICE CREAM',
    category: 'Restoran & Kafe',
    image: products[10].image,
    accent: '#ff3038',
  },
  {
    id: 8,
    name: 'Coffee',
    category: 'Restoran & Kafe',
    image: products[5].image,
    accent: '#91edff',
  },
  {
    id: 9,
    name: 'XOXO',
    category: 'Dekoratif',
    image: products[3].image,
    accent: '#ffad22',
  },
]

const customerPosts = [
  products[5],
  products[8],
  products[9],
  products[3],
]

const categories = [
  'Tümü',
  'Restoran & Kafe',
  'Studio',
  'Güzellik',
  'Gaming',
  'Dekoratif',
]

function Projects() {
  const [featuredIndex, setFeaturedIndex] = useState(0)
  const [activeCategory, setActiveCategory] = useState('Tümü')

  const featured = featuredProjects[featuredIndex]

  const filteredGallery =
    activeCategory === 'Tümü'
      ? galleryProjects
      : galleryProjects.filter(
          (project) => project.category === activeCategory,
        )

  const previousFeatured = () => {
    setFeaturedIndex((current) =>
      current === 0
        ? featuredProjects.length - 1
        : current - 1,
    )
  }

  const nextFeatured = () => {
    setFeaturedIndex((current) =>
      current === featuredProjects.length - 1
        ? 0
        : current + 1,
    )
  }

  const goDesigner = () => {
    window.location.assign('/designer')
  }

  const goInstagram = () => {
    window.open(
      'https://www.instagram.com/twins.led/',
      '_blank',
      'noopener,noreferrer',
    )
  }

  const scrollToGallery = () => {
    document
      .querySelector('.projects-gallery')
      ?.scrollIntoView({
        behavior: 'smooth',
      })
  }

  return (
    <main className="projects-page">

      <section className="projects-hero-new">

        <div className="projects-hero-new__left">

          <div className="projects-hero-new__eyebrow">
            <span className="projects-hero-new__dot" />
            OUR WORKS
          </div>

          <h1>
            Mekanları
            <br />
            <span>Aydınlatıyoruz.</span>
          </h1>

          <p>
            Neon tabelalarla markalara kimlik, mekanlara karakter
            katıyoruz. İlham veren çalışmalarımızı keşfet.
          </p>

          <div className="projects-hero-new__actions">

            <button
              type="button"
              className="projects-btn projects-btn--primary"
              onClick={scrollToGallery}
            >
              Projelerimizi Keşfet
              <ArrowDownIcon />
            </button>

          </div>

          <div className="projects-hero-new__scroll">
            <span />
            SCROLL
          </div>

        </div>

        <div className="projects-hero-new__right">

          <div className="projects-hero-new__image-wrap">

            <img
              src={featured.image}
              alt={`${featured.name} ${featured.subtitle}`}
            />

            <div className="projects-hero-new__image-overlay" />

            <div className="projects-hero-new__project-label">
              <span>
                {featured.name} {featured.subtitle}
              </span>

              <strong>
                {featured.location}
              </strong>
            </div>

            <div className="projects-hero-new__counter">
              <strong>
                {String(featuredIndex + 1).padStart(2, '0')}
              </strong>

              <span>/ 03</span>
            </div>

          </div>

          <div className="projects-hero-new__arrows">

            <button
              type="button"
              onClick={previousFeatured}
              aria-label="Önceki proje"
            >
              <ArrowLeft size={17} />
            </button>

            <button
              type="button"
              onClick={nextFeatured}
              aria-label="Sonraki proje"
            >
              <ArrowRight size={17} />
            </button>

          </div>

        </div>

      </section>

      <section className="projects-stats-bar">

        <div className="projects-stats-bar__item">
          <strong>06</strong>
          <span>SEÇİLMİŞ PROJE</span>
        </div>

        <div className="projects-stats-bar__item">
          <strong>05</strong>
          <span>FARKLI ALAN</span>
        </div>

        <div className="projects-stats-bar__item">
          <strong>LED</strong>
          <span>PREMİUM AYDINLATMA</span>
        </div>

        <div className="projects-stats-bar__item">
          <strong>∞</strong>
          <span>TASARIM İHTİMALİ</span>
        </div>

      </section>

      <section className="projects-featured">

        <div className="projects-container-new">

          <div className="projects-featured__visual">

            <img
              key={featured.id}
              src={featured.image}
              alt={`${featured.name} ${featured.subtitle}`}
            />

            <div className="projects-featured__visual-overlay" />

            <span
              className="projects-featured__accent"
              style={{
                background: featured.accent,
                boxShadow: `0 0 20px ${featured.accent}`,
              }}
            />

            <div className="projects-featured__visual-count">
              {String(featuredIndex + 1).padStart(2, '0')} / 03
            </div>

          </div>

          <div className="projects-featured__content">

            <span className="projects-small-label">
              ÖNE ÇIKAN PROJE
            </span>

            <h2>
              {featured.name}
              <br />
              <span>{featured.subtitle}</span>
            </h2>

            <div className="projects-featured__location">

              <MapPin size={14} />

              <span>
                {featured.location}
              </span>

            </div>

            <p>
              Modern ve enerjik tasarımıyla mekana karakter kazandıran
              özel neon tabela projesi. Renk, tipografi ve ışık
              yoğunluğu mekanın genel atmosferine göre şekillendirildi.
            </p>

            <button
              type="button"
              className="projects-outline-btn"
              onClick={goDesigner}
            >
              Benzerini Tasarla
              <ArrowRight size={16} />
            </button>

            <div className="projects-featured__quote">

              <Quote size={24} />

              <p>
                Işık, sadece görünür olmak istemez;
                hissedilmek ister.
              </p>

              <span>
                NEONLAB
              </span>

            </div>

          </div>

        </div>

      </section>

      <section
        className="projects-gallery"
        id="projects-gallery"
      >

        <div className="projects-container-new">

          <div className="projects-gallery__heading">

            <div>

              <span className="projects-small-label">
                TÜM PROJELER
              </span>

              <h2>
                Gerçek Mekanlar,
                <br />
                <span>Gerçek Hikayeler.</span>
              </h2>

            </div>

            <div className="projects-gallery__filters">

              {categories.map((category) => (

                <button
                  type="button"
                  key={category}
                  className={
                    activeCategory === category
                      ? 'is-active'
                      : ''
                  }
                  onClick={() =>
                    setActiveCategory(category)
                  }
                >
                  {category}
                </button>

              ))}

            </div>

          </div>

          <div className="projects-gallery-grid">

            {filteredGallery.map((project) => (

              <article
                className="projects-gallery-card"
                key={project.id}
                style={{
                  '--project-accent': project.accent,
                }}
              >

                <div className="projects-gallery-card__image">

                  <img
                    src={project.image}
                    alt={project.name}
                  />

                  <div className="projects-gallery-card__overlay" />

                  <button
                    type="button"
                    aria-label={`${project.name} projesini aç`}
                  >
                    <ArrowUpRight size={16} />
                  </button>

                </div>

                <div className="projects-gallery-card__info">

                  <div>

                    <h3>
                      {project.name}
                    </h3>

                    <span>
                      {project.category}
                    </span>

                  </div>

                  <span className="projects-gallery-card__dot" />

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

      <section className="projects-community-new">

        <div className="projects-container-new">

          <div className="projects-community-new__heading">

            <div>

              <span className="projects-small-label">
                SİZDEN GELENLER
              </span>

              <h2>
                Işığımızı
                <br />
                <span>siz taşıyorsunuz.</span>
              </h2>

            </div>

            <div>

              <p>
                Neon tabelalarını mekanlarında kullananların
                paylaşımlarından ilham al.
              </p>

              <button
                type="button"
                onClick={goInstagram}
              >
                Instagram'da Gör
                <ArrowUpRight size={14} />
              </button>

            </div>

          </div>

          <div className="projects-community-new__grid">

            {customerPosts.map((post, index) => (

              <article
                key={post.id}
                className={`community-card community-card--${index + 1}`}
              >

                <img
                  src={post.image}
                  alt={post.name}
                />

                <div className="community-card__overlay" />

                <div className="community-card__bottom">

                  <span>
                    @twins.led
                  </span>

                  <ArrowUpRight size={14} />

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

      <section className="projects-final-cta">

        <div className="projects-final-cta__glow" />

        <div className="projects-container-new">

          <div className="projects-final-cta__content">

            <span>
              SIRADAKİ PROJE
            </span>

            <h2>
              Sizin
              <br />
              mekanınız olsun.
            </h2>

            <p>
              Kendi neon tabelanı tasarla veya sana özel bir proje
              için bizimle iletişime geç.
            </p>

          </div>

          <div className="projects-final-cta__actions">

            <button
              type="button"
              className="projects-final-cta__light"
              onClick={goDesigner}
            >
              Kendin Tasarla
              <ArrowRight size={16} />
            </button>

            <a
              href="/contact"
              className="projects-final-cta__outline"
            >
              Teklif Al
              <ArrowUpRight size={16} />
            </a>

          </div>

        </div>

      </section>

    </main>
  )
}

function ArrowDownIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>
  )
}

export default Projects