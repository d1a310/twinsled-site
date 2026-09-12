import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Lightbulb,
  MapPin,
  Sparkles,
  Store,
  Tag,
  Wand2,
  Zap,
} from 'lucide-react'

import './Blog.css'

const articles = [
  {
    id: 1,
    category: 'TWINSLED',
    date: 'MAĞAZA',
    title: 'TWINSLED mağaza atmosferi',
    excerpt:
      'Neon tabelalardan vitrin uygulamalarına kadar TWINSLED dünyasının gerçek mağaza atmosferinden bir kare.',
    location: 'Kayseri',
    image: '/blog/01-twinsled-magaza.jpg',
    accent: 'pink',
  },
  {
    id: 2,
    category: 'NEON LED',
    date: 'İÇ MEKÂN',
    title: 'Neon ile mekâna karakter katmak',
    excerpt:
      'Dekoratif neon uygulamaları, renkli ışıklar ve özel tasarımlar bir araya geldiğinde mekânın havası tamamen değişiyor.',
    location: 'TWINSLED',
    image: '/blog/02-twinsled-neon-ic-mekan.jpg',
    accent: 'cyan',
  },
  {
    id: 3,
    category: 'AYDINLATMA',
    date: 'VİTRİN',
    title: 'Görünürlüğü artıran ışıklı cepheler',
    excerpt:
      'Güçlü cephe tasarımı ve doğru aydınlatma, markanın günün her saatinde daha dikkat çekici görünmesini sağlar.',
    location: 'Kayseri',
    image: '/blog/03-twinsled-magaza-vitrin.jpg',
    accent: 'purple',
  },
  {
    id: 4,
    category: 'PROJE',
    date: 'SHOWROOM',
    title: 'Neon, tabela ve aydınlatma bir arada',
    excerpt:
      'Tabela, neon ve dekoratif aydınlatmanın birlikte kullanıldığı büyük ölçekli bir TWINSLED uygulamasından detaylar.',
    location: 'Kayseri',
    image: '/blog/04-twinsled-aydinlatma-showroom.jpg',
    accent: 'pink',
  },
]

const topics = [
  {
    number: '01',
    icon: Store,
    title: 'Mağazalarımız',
    text: 'Osman Kavuncu ve Eski Sanayi noktalarımızı keşfedin.',
  },
  {
    number: '02',
    icon: Zap,
    title: 'Neon LED',
    text: 'Özel tasarımların üretim mantığını yakından görün.',
  },
  {
    number: '03',
    icon: Wand2,
    title: 'Tasarım',
    text: 'İşletmenize uygun fikirleri birlikte şekillendirelim.',
  },
]

function Blog() {
  return (
    <main className="blog-page">

      <section className="blog-hero">
        <div className="blog-hero__noise" />
        <div className="blog-hero__grid" />

        <div className="blog-glow blog-glow--pink" />
        <div className="blog-glow blog-glow--cyan" />

        <div className="blog-container blog-hero__container">

          <div className="blog-hero__content">

            <div className="blog-eyebrow">
              <span className="blog-eyebrow__dot" />
              <span>TWINSLED / JOURNAL</span>
            </div>

            <span className="blog-kicker">
              KAYSERİ • NEON • LED • DESIGN
            </span>

            <h1>
              Işığın
              <br />
              <span>hikâyesi burada.</span>
            </h1>

            <p>
              TWINSLED dünyasından mağaza notları, neon fikirleri,
              aydınlatma önerileri ve tasarım odaklı içerikler.
            </p>

            <div className="blog-hero__actions">

              <a
                href="/projects"
                className="blog-button blog-button--primary"
              >
                Projeleri Gör
                <ArrowRight size={18} />
              </a>

              <a
                href="/designer"
                className="blog-button blog-button--secondary"
              >
                Tasarım Stüdyosu
                <ArrowUpRight size={17} />
              </a>

            </div>

            <div className="blog-hero__meta">
              <span>TWINSLED</span>
              <i />
              <span>KAYSERİ</span>
              <i />
              <span>2026</span>
            </div>

          </div>


          <div className="blog-hero__visual">

            <div className="blog-hero__photo">

              <div className="blog-hero__photo-overlay" />

              <img
                src={articles[0].image}
                alt="TWINSLED mağaza ve neon aydınlatma"
              />

              <div className="blog-photo__scan" />

              <div className="blog-photo__label">
                <div>
                  <span>01</span>
                  <small>FEATURED STORY</small>
                </div>

                <span className="blog-photo__arrow">
                  <ArrowUpRight size={18} />
                </span>
              </div>

            </div>

            <div className="blog-float blog-float--one">
              <Lightbulb size={16} />
              <div>
                <strong>NEON / LED</strong>
                <span>Design Journal</span>
              </div>
            </div>

            <div className="blog-float blog-float--two">
              <MapPin size={16} />
              <div>
                <strong>KAYSERİ</strong>
                <span>TWINSLED</span>
              </div>
            </div>

          </div>

        </div>
      </section>


      <section className="blog-featured">

        <div className="blog-container">

          <div className="blog-section-head">

            <div>
              <span className="blog-section-tag">
                FEATURED
              </span>

              <h2>
                Öne çıkan
                <span> hikâyeler.</span>
              </h2>
            </div>

            <p>
              TWINSLED'in çalışma alanı ve tasarım yaklaşımı
              etrafında hazırlanan seçili içerikler.
            </p>

          </div>


          <article className="blog-main-card">

            <div className="blog-main-card__image">

              <img
                src={articles[0].image}
                alt="TWINSLED gerçek proje fotoğrafı"
              />

              <div className="blog-main-card__overlay" />

              <div className="blog-main-card__number">
                01 / 04
              </div>

            </div>

            <div className="blog-main-card__content">

              <div className="blog-card__meta">
                <span>
                  <Tag size={13} />
                  {articles[0].category}
                </span>

                <span>
                  <MapPin size={13} />
                  {articles[0].location}
                </span>
              </div>

              <h3>
                {articles[0].title}
              </h3>

              <p>
                {articles[0].excerpt}
              </p>

              <div className="blog-main-card__bottom">

                <span>
                  <CalendarDays size={14} />
                  MAĞAZA & MARKA
                </span>

                <span className="blog-read">
                  İçeriği Gör
                  <ArrowUpRight size={16} />
                </span>

              </div>

            </div>

          </article>

        </div>
      </section>


      <section className="blog-location-story">

        <div className="blog-container">

          <div className="blog-location-story__grid">

            <div className="blog-location-story__content">

              <span className="blog-section-tag">
                TWINSLED / STORES
              </span>

              <h2>
                Kayseri'de
                <br />
                <span>iki nokta.</span>
              </h2>

              <p>
                TWINSLED'in Kayseri'deki iki şube yapısını
                blog tarafında da görünür hale getiriyoruz.
                Osman Kavuncu ve Eski Sanayi noktaları için
                gerçek mağaza fotoğrafları kullanılabilecek
                şekilde tasarım alanları hazırlandı.
              </p>

              <div className="blog-location-story__items">

                <div>
                  <strong>01</strong>
                  <span>OSMAN KAVUNCU</span>
                </div>

                <div>
                  <strong>02</strong>
                  <span>ESKİ SANAYİ</span>
                </div>

              </div>

              <a
                href="/about"
                className="blog-button blog-button--secondary"
              >
                Hakkımızda
                <ArrowUpRight size={17} />
              </a>

            </div>


            <div className="blog-store-collage">

              <div className="blog-store-image blog-store-image--one">
                <img
                  src="/blog/01-twinsled-magaza.jpg"
                  alt="Mağaza atmosferi"
                />
                <span>TWINSLED / 01</span>
              </div>

              <div className="blog-store-image blog-store-image--two">
                <img
                  src="/blog/02-twinsled-neon-ic-mekan.jpg"
                  alt="Çalışma alanı"
                />
                <span>TWINSLED / 02</span>
              </div>

            </div>

          </div>

        </div>

      </section>


      <section className="blog-articles">

        <div className="blog-container">

          <div className="blog-section-head blog-section-head--articles">

            <div>
              <span className="blog-section-tag">
                JOURNAL
              </span>

              <h2>
                Işık hakkında
                <span> konuşalım.</span>
              </h2>
            </div>

            <span className="blog-counter">
              04 STORIES
            </span>

          </div>


          <div className="blog-article-grid">

            {articles.map((article, index) => (

              <article
                key={article.id}
                className={`blog-article-card blog-article-card--${article.accent}`}
              >

                <a
                  href="/contact"
                  className="blog-article-card__image"
                >

                  <img
                    src={article.image}
                    alt={article.title}
                  />

                  <div className="blog-article-card__image-overlay" />

                  <span className="blog-article-card__index">
                    0{index + 1}
                  </span>

                  <span className="blog-article-card__launch">
                    <ArrowUpRight size={17} />
                  </span>

                </a>


                <div className="blog-article-card__content">

                  <div className="blog-card__meta">

                    <span>
                      {article.category}
                    </span>

                    <span>
                      {article.date}
                    </span>

                  </div>

                  <h3>
                    {article.title}
                  </h3>

                  <p>
                    {article.excerpt}
                  </p>

                  <a
                    href="/contact"
                    className="blog-article-card__link"
                  >
                    Detaylı Bilgi
                    <ArrowRight size={16} />
                  </a>

                </div>

              </article>

            ))}

          </div>

        </div>
      </section>


      <section className="blog-topics">

        <div className="blog-container">

          <div className="blog-section-head">

            <div>
              <span className="blog-section-tag">
                EXPLORE
              </span>

              <h2>
                Merak ettiğin
                <span> konu?</span>
              </h2>
            </div>

            <p>
              TWINSLED'in öne çıkan çalışma alanlarını
              keşfet ve kendi projen için ilham al.
            </p>

          </div>


          <div className="blog-topics__grid">

            {topics.map((topic) => {

              const Icon = topic.icon

              return (
                <a
                  key={topic.number}
                  href="/contact"
                  className="blog-topic"
                >
                  <div className="blog-topic__top">
                    <span>{topic.number}</span>
                    <Icon size={21} />
                  </div>

                  <h3>{topic.title}</h3>

                  <p>{topic.text}</p>

                  <ArrowUpRight
                    size={18}
                    className="blog-topic__arrow"
                  />
                </a>
              )
            })}

          </div>
        </div>
      </section>


      <section className="blog-social">

        <div className="blog-container">

          <div className="blog-social__inner">

            <div>
              <span className="blog-section-tag">
                FOLLOW THE GLOW
              </span>

              <h2>
                Yeni işler,
                <span> yeni ışıklar.</span>
              </h2>

              <p>
                TWINSLED'in yeni çalışmalarını ve neon
                dünyasından içerikleri sosyal kanallarımızdan takip et.
              </p>
            </div>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="blog-instagram"
            >
              <Sparkles size={20} />
              Instagram
              <ArrowUpRight size={17} />
            </a>

          </div>

        </div>
      </section>


      <section className="blog-cta">

        <div className="blog-cta__glow" />

        <div className="blog-container">

          <div className="blog-cta__inner">

            <Sparkles size={22} />

            <h2>
              Bir sonraki
              <br />
              <span>hikâye seninki.</span>
            </h2>

            <p>
              Kendi neonunu tasarla veya projen için
              TWINSLED ile iletişime geç.
            </p>

            <div className="blog-cta__actions">

              <a
                href="/designer"
                className="blog-button blog-button--light"
              >
                Kendin Tasarla
                <ArrowRight size={18} />
              </a>

              <a
                href="/contact"
                className="blog-button blog-button--outline"
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

export default Blog
