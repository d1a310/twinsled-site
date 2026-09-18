import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Check,
  ChevronRight,
  Lightbulb,
  MapPin,
  MessageCircle,
  Sparkles,
  Wand2,
  Zap,
} from 'lucide-react'

import './About.css'

const services = [
  {
    number: '01',
    icon: Sparkles,
    title: 'Neon LED Tabela',
    text: 'Markalara, işletmelere ve kişisel alanlara özel neon LED tasarımlar hazırlıyoruz.',
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'LED Aydınlatma',
    text: 'Bahçe, ofis ve farklı kullanım alanları için LED aydınlatma çözümleri sunuyoruz.',
  },
  {
    number: '03',
    icon: Building2,
    title: 'Dükkan Dekorasyonu',
    text: 'İşletmelerin atmosferini güçlendiren dekoratif ve ışıklı uygulamalar geliştiriyoruz.',
  },
  {
    number: '04',
    icon: Wand2,
    title: 'Özel Tasarım',
    text: 'İstediğin yazı, logo, renk, ölçü ve forma göre kişiselleştirilmiş çalışmalar oluşturuyoruz.',
  },
]

const process = [
  {
    number: '01',
    title: 'Fikrini Anlat',
    text: 'Neon tabela, logo veya aydınlatma fikrini bizimle paylaş.',
  },
  {
    number: '02',
    title: 'Tasarlayalım',
    text: 'İhtiyacına ve kullanım alanına uygun tasarımı birlikte şekillendirelim.',
  },
  {
    number: '03',
    title: 'Üretelim',
    text: 'Onaylanan tasarımın üretim sürecini başlatalım.',
  },
  {
    number: '04',
    title: 'Işığa Dönüştürelim',
    text: 'Hazırlanan çalışmayı mekânının karakterine dönüştürelim.',
  },
]

function About() {
  return (
    <main className="about-page">

      <section className="about-hero">
        <div className="about-hero__noise" />
        <div className="about-grid-lines" />

        <div className="about-hero__glow about-hero__glow--pink" />
        <div className="about-hero__glow about-hero__glow--cyan" />
        <div className="about-hero__glow about-hero__glow--purple" />

        <div className="about-container about-hero__container">

          <div className="about-hero__content">

            <div className="about-eyebrow">
              <span className="about-eyebrow__dot" />
              <span>TWINSLED / ABOUT US</span>
            </div>

            <div className="about-kicker">
              KAYSERİ'DEN IŞIĞA
            </div>

            <h1>
              Mekânlara
              <br />
              <span>karakter katıyoruz.</span>
            </h1>

            <p>
              TWINSLED; neon LED tabelalar, LED aydınlatma ve
              dükkân dekorasyonu gibi ışık odaklı çözümleri
              tasarım anlayışıyla bir araya getiriyor.
            </p>

            <div className="about-hero__actions">
              <a
                href="/designer"
                className="about-button about-button--primary"
              >
                Kendi Neonunu Tasarla
                <ArrowRight size={18} />
              </a>

              <a
                href="/contact"
                className="about-button about-button--secondary"
              >
                Bize Ulaş
                <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="about-hero__meta">
              <span>KAYSERİ</span>
              <i />
              <span>NEON LED</span>
              <i />
              <span>AYDINLATMA</span>
              <i />
              <span>DESIGN</span>
            </div>

          </div>

          <div className="about-hero__visual">

            <div className="about-visual__orbit about-visual__orbit--one" />
            <div className="about-visual__orbit about-visual__orbit--two" />
            <div className="about-visual__halo" />

            <div className="about-neon-card">
              <div className="about-neon-card__top">
                <span>TWINSLED</span>
                <span>001 / ABOUT</span>
              </div>

              <div className="about-neon-card__center">
                <span>DESIGN</span>
                <strong>GLOW</strong>
                <span>YOUR SPACE</span>
              </div>

              <div className="about-neon-card__bottom">
                <span>NEON / LED / LIGHT</span>
                <span>TR</span>
              </div>
            </div>

            <div className="about-floating about-floating--one">
              <Zap size={16} />
              <div>
                <strong>Neon LED</strong>
                <span>Özel tasarım</span>
              </div>
            </div>

            <div className="about-floating about-floating--two">
              <MapPin size={16} />
              <div>
                <strong>Kayseri</strong>
                <span>TWINSLED</span>
              </div>
            </div>

          </div>

        </div>

        <div className="about-hero__bottom">
          <span>SCROLL TO EXPLORE</span>
          <div className="about-scroll-line" />
        </div>
      </section>


      <section className="about-intro">
        <div className="about-container">

          <div className="about-section-label">
            <span>TWINSLED / WHO WE ARE</span>
          </div>

          <div className="about-intro__grid">

            <div className="about-intro__title">
              <h2>
                Sadece
                <span> ışık </span>
                değil,
                <br />
                bir
                <span> atmosfer </span>
                tasarlıyoruz.
              </h2>
            </div>

            <div className="about-intro__text">

              <p className="about-lead">
                Bir neon tabela yalnızca bir yazı değildir.
                Bir markanın görünüşünü, bir mekânın hissini
                ve insanların hatırladığı detayı değiştirebilir.
              </p>

              <p>
                TWINSLED olarak fikri dinliyor, tasarımı
                oluşturuyor ve ışığı kullanılacağı alana göre
                şekillendiriyoruz. Neon LED, dekoratif
                aydınlatma ve özel çalışmalar aynı yaratıcı
                yaklaşım içinde buluşuyor.
              </p>

              <div className="about-signature">
                <span>TWINSLED</span>
                <small>NEON & LED STUDIO / KAYSERİ</small>
              </div>

            </div>

          </div>
        </div>
      </section>


      <section className="about-services">

        <div className="about-container">

          <div className="about-section-heading">

            <div>
              <span className="about-section-tag">
                WHAT WE DO
              </span>

              <h2>
                Işığın
                <span> dört </span>
                yüzü.
              </h2>
            </div>

            <p>
              TWINSLED'in web üzerindeki hizmet kayıtlarında
              neon LED tabela, bahçe ve ofis aydınlatması ile
              dükkân dekorasyonu öne çıkıyor.
            </p>

          </div>

          <div className="about-services__grid">

            {services.map((service) => {
              const Icon = service.icon

              return (
                <article
                  key={service.number}
                  className="about-service"
                >
                  <div className="about-service__number">
                    {service.number}
                  </div>

                  <div className="about-service__icon">
                    <Icon size={23} />
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.text}</p>

                  <div className="about-service__line" />

                  <ArrowUpRight
                    size={19}
                    className="about-service__arrow"
                  />
                </article>
              )
            })}

          </div>
        </div>
      </section>


      <section className="about-story">

        <div className="about-container">

          <div className="about-story__grid">

            <div className="about-story__visual">

              <div className="about-story__visual-glow" />

              <div className="about-story__visual-grid" />

              <div className="about-story__sign">
                <span>TWINS</span>
                <strong>LED</strong>
                <small>LIGHTING / NEON / DESIGN</small>
              </div>

              <div className="about-story__micro about-story__micro--top">
                KAYSERİ
              </div>

              <div className="about-story__micro about-story__micro--bottom">
                EST. / TWINSLED
              </div>

            </div>

            <div className="about-story__content">

              <span className="about-section-tag">
                THE IDEA
              </span>

              <h2>
                Mekânın
                <br />
                <span>imzası ışık</span>
                olabilir.
              </h2>

              <p>
                Kafe, restoran, mağaza, ofis veya kişisel bir
                alan… Doğru ışık, bulunduğu yerin atmosferini
                tek başına değiştirebilir.
              </p>

              <p>
                Bu yüzden bizim için tasarım; yalnızca güzel
                görünen bir tabela hazırlamak değil, ürünün
                kullanılacağı alanı da düşünmektir.
              </p>

              <a
                href="/projects"
                className="about-story__link"
              >
                Çalışmalarımızı Gör
                <ArrowUpRight size={17} />
              </a>

            </div>

          </div>

        </div>
      </section>


      <section className="about-values">
        <div className="about-container">

          <div className="about-values__box">

            <div className="about-values__glow" />

            <div className="about-values__left">

              <span className="about-section-tag">
                OUR APPROACH
              </span>

              <h2>
                Fikrini alıyoruz.
                <br />
                <span>Işığa dönüştürüyoruz.</span>
              </h2>

              <p>
                Hazır kalıplarla sınırlı kalmak yerine,
                çalışmanın kullanılacağı alanı, ölçüyü,
                rengi ve görsel dili birlikte düşünüyoruz.
              </p>

            </div>

            <div className="about-values__right">

              <div className="about-value-item">
                <Check size={17} />
                <span>Tasarım odaklı yaklaşım</span>
              </div>

              <div className="about-value-item">
                <Check size={17} />
                <span>Farklı neon renk seçenekleri</span>
              </div>

              <div className="about-value-item">
                <Check size={17} />
                <span>Özel ölçü seçenekleri</span>
              </div>

              <div className="about-value-item">
                <Check size={17} />
                <span>Mekâna özel uygulamalar</span>
              </div>

            </div>

          </div>
        </div>
      </section>


      <section className="about-process">

        <div className="about-container">

          <div className="about-process__header">

            <div>
              <span className="about-section-tag">
                THE PROCESS
              </span>

              <h2>
                Fikirden
                <span> ışığa.</span>
              </h2>
            </div>

            <p>
              Basit bir fikirden özel bir neon çalışmasına
              kadar süreci adım adım ilerletiyoruz.
            </p>

          </div>

          <div className="about-process__grid">

            {process.map((item, index) => (
              <div
                key={item.number}
                className="about-process__item"
              >

                <div className="about-process__top">
                  <span>{item.number}</span>

                  {index < process.length - 1 && (
                    <ChevronRight size={18} />
                  )}
                </div>

                <h3>{item.title}</h3>
                <p>{item.text}</p>

              </div>
            ))}

          </div>
        </div>
      </section>


      <section className="about-locations">

        <div className="about-container">

          <div className="about-section-heading about-section-heading--location">

            <div>
              <span className="about-section-tag">
                TWO LOCATIONS
              </span>

              <h2>
                Kayseri'de
                <span> iki </span>
                nokta.
              </h2>
            </div>

            <p>
              Osman Kavuncu ve Eski Sanayi olmak üzere iki farklı
              konumla TWINSLED'i yerinde keşfedebilirsin.
            </p>

          </div>


          <div className="about-location-grid">

            <article className="about-location-card">

              <div className="about-location-card__visual">

                <div className="location-photo location-photo--esentepe">
                  <div className="location-photo__overlay" />

                  <div className="location-photo__fake-neon">
                    <span>TWINS</span>
                    <strong>LED</strong>
                  </div>

                  <div className="location-photo__label">
                    <span>01</span>
                    <small>Osman Kavuncu</small>
                  </div>
                </div>

              </div>

              <div className="about-location-card__content">

                <div className="location-card__eyebrow">
                  <span>01 / LOCATION</span>
                  <span>Osman Kavuncu</span>
                </div>

                <h3>
                  Osman Kavuncu
                </h3>

                <p>
                  TWINSLED'in internet üzerindeki eski işletme
                  kayıtlarında Osman Kavuncu bölgesinde yer alan
                  mağaza bilgileri bulunuyor.
                </p>

                <div className="location-link location-link--static">
                  <MapPin size={16} />
                  Osman Kavuncu / Melikgazi / Kayseri
                </div>

              </div>

            </article>


            <article className="about-location-card">

              <div className="about-location-card__visual">

                <div className="location-photo location-photo--sanayi">
                  <div className="location-photo__overlay" />

                  <div className="location-photo__fake-neon location-photo__fake-neon--cyan">
                    <span>LIGHT</span>
                    <strong>SPACE</strong>
                  </div>

                  <div className="location-photo__label">
                    <span>02</span>
                    <small>ESKİ SANAYİ</small>
                  </div>
                </div>

              </div>

              <div className="about-location-card__content">

                <div className="location-card__eyebrow">
                  <span>02 / LOCATION</span>
                  <span>CURRENT</span>
                </div>

                <h3>
                  Eski Sanayi
                </h3>

                <p>
                  Güncel çalışma noktası Kayseri Eski Sanayi
                  bölgesindedir. Yeni mağaza ve çalışma alanı
                  görselleri eklendiğinde bu alanı doğrudan
                  gerçek fotoğraflarla güncelleyeceğiz.
                </p>

                <div className="location-link location-link--static">
                  <MapPin size={16} />
                  Eski Sanayi / Kayseri
                </div>

              </div>

            </article>

          </div>

          <div className="about-location-note">
            <span className="about-location-note__dot" />
            <p>
              Not: İnternette eski Osman Kavuncu adresi hâlâ bazı
              satış ve işletme kayıtlarında görünüyor. Bu nedenle
              eski sokak ve kapı numarasını güncel adres olarak
              göstermiyoruz.
            </p>
          </div>

        </div>
      </section>


      <section className="about-contact-strip">

        <div className="about-container">

          <div>
            <span className="about-section-tag">
              VISIT / CONTACT
            </span>

            <h2>
              Işığı yakından
              <span> gör.</span>
            </h2>
          </div>

          <div className="about-contact-strip__right">

            <p>
              Mağaza, tasarım veya özel proje için
              TWINSLED ile iletişime geç.
            </p>

            <div className="about-contact-strip__buttons">

              <a
                href="/contact"
                className="about-button about-button--primary"
              >
                İletişime Geç
                <ArrowRight size={18} />
              </a>

              <a
                href="/designer"
                className="about-button about-button--secondary"
              >
                Tasarım Stüdyosu
                <ArrowUpRight size={17} />
              </a>

            </div>

          </div>

        </div>
      </section>


      <section className="about-cta">

        <div className="about-cta__noise" />
        <div className="about-cta__glow about-cta__glow--one" />
        <div className="about-cta__glow about-cta__glow--two" />

        <div className="about-container">

          <div className="about-cta__inner">

            <div className="about-cta__label">
              <MessageCircle size={15} />
              <span>LET'S CREATE SOMETHING</span>
            </div>

            <h2>
              Mekânının
              <br />
              <span>imza ışığı</span>
              hazır mı?
            </h2>

            <p>
              Kendi neon tasarımını oluştur veya projen için
              doğrudan bizimle iletişime geç.
            </p>

            <div className="about-cta__actions">

              <a
                href="/designer"
                className="about-button about-button--light"
              >
                Kendin Tasarla
                <ArrowRight size={18} />
              </a>

              <a
                href="/contact"
                className="about-button about-button--outline"
              >
                İletişime Geç
                <ArrowUpRight size={17} />
              </a>

            </div>

          </div>
        </div>
      </section>

    </main>
  )
}

export default About
