import {
  ArrowRight,
  ArrowUpRight,
  Clock3,
  Copy,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Sparkles,
  Store,
  Zap,
} from 'lucide-react'

import './Contact.css'

const WHATSAPP_1 = '905439103247'
const WHATSAPP_2 = '905439103246'

function openWhatsApp(number, message) {
  const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`
  window.open(url, '_blank', 'noopener,noreferrer')
}

function Contact() {
  const defaultMessage =
    'Merhaba, TWINSLED hakkında bilgi almak istiyorum.'

  return (
    <main className="contact-page">

      <section className="contact-hero">

        <div className="contact-hero__noise" />
        <div className="contact-hero__grid" />

        <div className="contact-glow contact-glow--pink" />
        <div className="contact-glow contact-glow--cyan" />
        <div className="contact-glow contact-glow--purple" />

        <div className="contact-container contact-hero__container">

          <div className="contact-hero__content">

            <div className="contact-eyebrow">
              <span className="contact-eyebrow__dot" />
              <span>TWINSLED / CONTACT</span>
            </div>

            <span className="contact-kicker">
              HAZIR MISIN? KONUŞALIM.
            </span>

            <h1>
              Fikrini
              <br />
              <span>bize anlat.</span>
            </h1>

            <p>
              Özel neon tasarım, hazır ürün, aydınlatma veya
              proje hakkında konuşmak için bize doğrudan ulaş.
            </p>

            <div className="contact-hero__actions">

              <button
                type="button"
                className="contact-button contact-button--primary"
                onClick={() => openWhatsApp(WHATSAPP_1, defaultMessage)}
              >
                WhatsApp 1
                <MessageCircle size={18} />
              </button>

              <button
                type="button"
                className="contact-button contact-button--secondary"
                onClick={() => openWhatsApp(WHATSAPP_2, defaultMessage)}
              >
                WhatsApp 2
                <ArrowUpRight size={17} />
              </button>

            </div>

            <div className="contact-hero__numbers">

              <span>+90 543 910 32 47</span>

              <i />

              <span>+90 543 910 32 46</span>

            </div>

          </div>


          <div className="contact-hero__visual">

            <div className="contact-orbit contact-orbit--one" />
            <div className="contact-orbit contact-orbit--two" />

            <div className="contact-signal">

              <div className="contact-signal__top">
                <span>TWINSLED</span>
                <span>LIVE / CONTACT</span>
              </div>

              <div className="contact-signal__center">

                <span>LET'S</span>

                <strong>
                  GLOW
                </strong>

                <small>
                  TOGETHER
                </small>

              </div>

              <div className="contact-signal__bottom">
                <span>NEON / LED / DESIGN</span>
                <span>TR</span>
              </div>

            </div>

            <div className="contact-floating contact-floating--one">
              <Phone size={16} />
              <div>
                <strong>WhatsApp</strong>
                <span>Hızlı iletişim</span>
              </div>
            </div>

            <div className="contact-floating contact-floating--two">
              <MapPin size={16} />
              <div>
                <strong>Kayseri</strong>
                <span>İki lokasyon</span>
              </div>
            </div>

          </div>

        </div>

      </section>


      <section className="contact-channels">

        <div className="contact-container">

          <div className="contact-section-head">

            <div>
              <span className="contact-section-tag">
                CONTACT CHANNELS
              </span>

              <h2>
                Sana en yakın
                <span> kanalı seç.</span>
              </h2>
            </div>

            <p>
              Mail alanını kaldırdık. İletişim tarafında
              doğrudan WhatsApp, telefon ve mağaza konumları
              üzerinden ilerliyoruz.
            </p>

          </div>


          <div className="contact-channel-grid">

            <button
              type="button"
              className="contact-channel contact-channel--pink"
              onClick={() => openWhatsApp(WHATSAPP_1, defaultMessage)}
            >

              <div className="contact-channel__top">
                <span>01 / WHATSAPP</span>
                <MessageCircle size={21} />
              </div>

              <div className="contact-channel__content">
                <small>ANA HAT</small>
                <h3>+90 543 910 32 47</h3>
                <p>Teklif, ürün ve özel proje konuşmaları.</p>
              </div>

              <span className="contact-channel__bottom">
                WhatsApp'ta Aç
                <ArrowUpRight size={16} />
              </span>

            </button>


            <button
              type="button"
              className="contact-channel contact-channel--cyan"
              onClick={() => openWhatsApp(WHATSAPP_2, defaultMessage)}
            >

              <div className="contact-channel__top">
                <span>02 / WHATSAPP</span>
                <MessageCircle size={21} />
              </div>

              <div className="contact-channel__content">
                <small>ALTERNATİF HAT</small>
                <h3>+90 543 910 32 46</h3>
                <p>Ürün ve teklif bilgisi için doğrudan ulaş.</p>
              </div>

              <span className="contact-channel__bottom">
                WhatsApp'ta Aç
                <ArrowUpRight size={16} />
              </span>

            </button>


            <a
              href={`tel:+90${WHATSAPP_1}`}
              className="contact-channel contact-channel--purple"
            >

              <div className="contact-channel__top">
                <span>03 / PHONE</span>
                <Phone size={21} />
              </div>

              <div className="contact-channel__content">
                <small>DOĞRUDAN ARA</small>
                <h3>+90 543 910 32 47</h3>
                <p>Telefon üzerinden doğrudan iletişim kur.</p>
              </div>

              <span className="contact-channel__bottom">
                Ara
                <ArrowUpRight size={16} />
              </span>

            </a>

          </div>

        </div>
      </section>


      <section className="contact-locations">

        <div className="contact-container">

          <div className="contact-section-head">

            <div>
              <span className="contact-section-tag">
                TWO LOCATIONS
              </span>

              <h2>
                Kayseri'de
                <span> buluşalım.</span>
              </h2>
            </div>

            <p>
              TWINSLED'in iki farklı noktası için şimdilik
              ilçe/bölge seviyesinde bilgileri gösteriyoruz.
              Doğrulanmamış sokak ve kapı numarası kullanmıyoruz.
            </p>

          </div>


          <div className="contact-location-grid">

            <article className="contact-location-card">

              <div className="contact-location-card__visual contact-location-card__visual--pink">

                <div className="contact-location-card__glow" />

                <div className="contact-location-sign">
                  <span>TWINSLED / 01</span>
                  <strong>ESENTEPE</strong>
                  <small>MELİKGAZİ / KAYSERİ</small>
                </div>

                <div className="contact-location-card__grid" />

              </div>

              <div className="contact-location-card__content">

                <div className="contact-location-card__meta">
                  <span>01 / STORE</span>
                  <span>TWINSLED</span>
                </div>

                <h3>Esentepe</h3>

                <p>
                  Kayseri / Melikgazi, Esentepe bölgesindeki
                  TWINSLED noktası.
                </p>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=TWINSLED+Esentepe+Kayseri"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-location-link"
                >
                  Haritada Ara
                  <Navigation size={16} />
                </a>

              </div>

            </article>


            <article className="contact-location-card">

              <div className="contact-location-card__visual contact-location-card__visual--cyan">

                <div className="contact-location-card__glow" />

                <div className="contact-location-sign">
                  <span>TWINSLED / 02</span>
                  <strong>ESKİ SANAYİ</strong>
                  <small>KAYSERİ / TÜRKİYE</small>
                </div>

                <div className="contact-location-card__grid" />

              </div>

              <div className="contact-location-card__content">

                <div className="contact-location-card__meta">
                  <span>02 / STORE</span>
                  <span>CURRENT</span>
                </div>

                <h3>Eski Sanayi</h3>

                <p>
                  TWINSLED'in güncel çalışma noktası Kayseri
                  Eski Sanayi bölgesindedir.
                </p>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=TWINSLED+Eski+Sanayi+Kayseri"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-location-link"
                >
                  Haritada Ara
                  <Navigation size={16} />
                </a>

              </div>

            </article>

          </div>

        </div>
      </section>


      <section className="contact-info">

        <div className="contact-container">

          <div className="contact-info__box">

            <div className="contact-info__intro">

              <span className="contact-section-tag">
                BEFORE YOU MESSAGE
              </span>

              <h2>
                Daha hızlı cevap
                <span> için.</span>
              </h2>

              <p>
                Projen için mesaj gönderirken mümkünse tabela
                metnini, yaklaşık ölçüyü, istediğin rengi ve
                kullanım alanını yaz. Böylece görüşmeyi daha
                hızlı başlatabiliriz.
              </p>

            </div>

            <div className="contact-info__tips">

              <div className="contact-tip">
                <Sparkles size={18} />
                <div>
                  <strong>Tasarım</strong>
                  <span>Metin / logo / örnek görsel</span>
                </div>
              </div>

              <div className="contact-tip">
                <Zap size={18} />
                <div>
                  <strong>Ölçü</strong>
                  <span>Yaklaşık genişlik ve yükseklik</span>
                </div>
              </div>

              <div className="contact-tip">
                <Clock3 size={18} />
                <div>
                  <strong>Kullanım Alanı</strong>
                  <span>İç mekân / dış mekân / işletme</span>
                </div>
              </div>

              <div className="contact-tip">
                <Copy size={18} />
                <div>
                  <strong>Referans</strong>
                  <span>Beğendiğin bir örneği paylaş</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>


      <section className="contact-cta">

        <div className="contact-cta__glow contact-cta__glow--pink" />
        <div className="contact-cta__glow contact-cta__glow--cyan" />

        <div className="contact-container">

          <div className="contact-cta__inner">

            <span className="contact-cta__tag">
              TWINSLED / YOUR IDEA
            </span>

            <h2>
              Hadi
              <br />
              <span>ışığı yakalım.</span>
            </h2>

            <p>
              Kendi neonunu tasarla veya doğrudan bize ulaş.
            </p>

            <div className="contact-cta__actions">

              <a
                href="/designer"
                className="contact-button contact-button--light"
              >
                Kendin Tasarla
                <ArrowRight size={18} />
              </a>

              <button
                type="button"
                className="contact-button contact-button--outline"
                onClick={() => openWhatsApp(WHATSAPP_1, defaultMessage)}
              >
                WhatsApp
                <MessageCircle size={17} />
              </button>

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}

export default Contact
