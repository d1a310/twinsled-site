import { useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  HelpCircle,
  Lightbulb,
  MessageCircle,
  Sparkles,
  Zap,
} from 'lucide-react'

import './FAQ.css'

const faqItems = [
  {
    category: 'SİPARİŞ',
    question: 'Neon tabela nasıl sipariş verebilirim?',
    answer:
      'Hazır ürünlerden birini inceleyebilir veya Kendin Tasarla bölümünden kendi neon tasarımını oluşturabilirsin. Projene özel bilgi ve teklif için WhatsApp üzerinden bize ulaşabilirsin.',
  },
  {
    category: 'TASARIM',
    question: 'Kendi neon tabelamı tasarlayabilir miyim?',
    answer:
      'Evet. Tasarım Stüdyosu üzerinden metnini oluşturabilir, renk ve yazı stilini seçebilir, ölçünü belirleyebilir ve tasarımını önizleyebilirsin.',
  },
  {
    category: 'ÖLÇÜ',
    question: 'İstediğim ölçüde neon üretilebilir mi?',
    answer:
      'Özel projelerde kullanılacak alana göre farklı ölçüler üzerinde çalışılabilir. Tasarımın ölçüsünü ve kullanım alanını bize ileterek uygun üretim detaylarını birlikte netleştirebiliriz.',
  },
  {
    category: 'RENK',
    question: 'Farklı neon renkleri seçebilir miyim?',
    answer:
      'Evet. Tasarım Stüdyosu içinde farklı neon renk seçenekleri bulunuyor. Hazır ürünlerde ise ürünün mevcut renk seçenekleri üzerinden ilerleniyor.',
  },
  {
    category: 'ZEMİN',
    question: 'Neon tabela için farklı zemin seçenekleri var mı?',
    answer:
      'Projeye göre zemin kullanılmadan üretim veya pleksi, ahşap ve farklı şekilli zemin seçenekleri değerlendirilebilir. Kullanım alanına göre en uygun çözüm belirlenir.',
  },
  {
    category: 'UYGULAMA',
    question: 'Kurulum ve uygulama konusunda yardımcı oluyor musunuz?',
    answer:
      'Projenin kapsamına göre uygulama detayları ayrıca değerlendirilir. Sipariş öncesinde ölçü, montaj ve kullanım alanı bilgilerini paylaşman yeterli.',
  },
  {
    category: 'TESLİMAT',
    question: 'Türkiye geneline gönderim yapıyor musunuz?',
    answer:
      'Sipariş ve proje detayına göre teslimat seçenekleri belirlenir. Güncel teslimat bilgisini sipariş sırasında WhatsApp üzerinden netleştirebilirsin.',
  },
  {
    category: 'İLETİŞİM',
    question: 'TWINSLED ile en hızlı nasıl iletişime geçebilirim?',
    answer:
      'En hızlı yol WhatsApp üzerinden iletişime geçmek. Sayfadaki iki WhatsApp hattından sana uygun olanı kullanabilirsin.',
  },
]

const quickTopics = [
  {
    number: '01',
    title: 'Kendin Tasarla',
    text: 'Metnini, rengini, fontunu ve ölçünü seçerek kendi tasarımını oluştur.',
    icon: Sparkles,
    href: '/designer',
  },
  {
    number: '02',
    title: 'Ürünleri İncele',
    text: 'Hazır neon tasarımlarını keşfet ve detaylarını görüntüle.',
    icon: Lightbulb,
    href: '/products',
  },
  {
    number: '03',
    title: 'Bize Ulaş',
    text: 'Özel proje veya teklif için doğrudan WhatsApp üzerinden konuş.',
    icon: MessageCircle,
    href: '/contact',
  },
]

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0)

  const toggleFaq = (index) => {
    setActiveIndex((current) => (current === index ? -1 : index))
  }

  return (
    <main className="faq-page">

      <section className="faq-hero">

        <div className="faq-hero__noise" />
        <div className="faq-hero__grid" />

        <div className="faq-hero__glow faq-hero__glow--pink" />
        <div className="faq-hero__glow faq-hero__glow--cyan" />
        <div className="faq-hero__glow faq-hero__glow--purple" />

        <div className="faq-container faq-hero__container">

          <div className="faq-hero__content">

            <div className="faq-eyebrow">
              <span className="faq-eyebrow__dot" />
              <span>TWINSLED / FAQ</span>
            </div>

            <span className="faq-kicker">
              SIKÇA SORULAN SORULAR
            </span>

            <h1>
              Merak ettiğin
              <br />
              <span>her şey burada.</span>
            </h1>

            <p>
              Neon tasarımından ölçü ve sipariş sürecine kadar
              en çok merak edilen soruları tek yerde topladık.
            </p>

            <div className="faq-hero__actions">
              <a
                href="/designer"
                className="faq-button faq-button--primary"
              >
                Tasarlamaya Başla
                <ArrowRight size={18} />
              </a>

              <a
                href="/contact"
                className="faq-button faq-button--secondary"
              >
                Doğrudan Sor
                <ArrowUpRight size={17} />
              </a>
            </div>

          </div>


          <div className="faq-hero__visual">

            <div className="faq-orbit faq-orbit--one" />
            <div className="faq-orbit faq-orbit--two" />

            <div className="faq-hero-card">

              <div className="faq-hero-card__top">
                <span>TWINSLED</span>
                <span>FAQ / 001</span>
              </div>

              <div className="faq-hero-card__center">
                <div className="faq-hero-card__icon">
                  <HelpCircle size={42} />
                </div>

                <span>QUESTION</span>

                <strong>
                  ASK
                </strong>

                <strong className="faq-hero-card__accent">
                  GLOW
                </strong>

              </div>

              <div className="faq-hero-card__bottom">
                <span>NEON / LED / DESIGN</span>
                <span>TR</span>
              </div>

            </div>

            <div className="faq-floating faq-floating--one">
              <Zap size={16} />
              <div>
                <strong>Hızlı Yanıt</strong>
                <span>WhatsApp üzerinden</span>
              </div>
            </div>

            <div className="faq-floating faq-floating--two">
              <MessageCircle size={16} />
              <div>
                <strong>TWINSLED</strong>
                <span>Doğrudan iletişim</span>
              </div>
            </div>

          </div>

        </div>

      </section>


      <section className="faq-list-section">

        <div className="faq-container">

          <div className="faq-section-head">

            <div>
              <span className="faq-section-tag">
                QUESTIONS / ANSWERS
              </span>

              <h2>
                Cevaplar
                <span> burada.</span>
              </h2>
            </div>

            <p>
              Aradığın cevabı bulamadın mı?
              En hızlı çözüm bize doğrudan ulaşmak.
            </p>

          </div>


          <div className="faq-layout">

            <div className="faq-list">

              {faqItems.map((item, index) => {
                const isOpen = activeIndex === index

                return (
                  <article
                    className={`faq-item ${isOpen ? 'is-open' : ''}`}
                    key={item.question}
                  >

                    <button
                      type="button"
                      className="faq-question"
                      onClick={() => toggleFaq(index)}
                      aria-expanded={isOpen}
                    >

                      <span className="faq-question__number">
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      <span className="faq-question__main">
                        <small>{item.category}</small>
                        <strong>{item.question}</strong>
                      </span>

                      <span className="faq-question__icon">
                        <ChevronDown size={20} />
                      </span>

                    </button>


                    <div
                      className="faq-answer"
                      aria-hidden={!isOpen}
                    >
                      <div className="faq-answer__inner">
                        <p>{item.answer}</p>

                        <a
                          href="/contact"
                          className="faq-answer__link"
                        >
                          Daha fazlasını sor
                          <ArrowUpRight size={15} />
                        </a>
                      </div>
                    </div>

                  </article>
                )
              })}

            </div>


            <aside className="faq-side">

              <div className="faq-side__card">

                <span className="faq-side__label">
                  STILL CURIOUS?
                </span>

                <div className="faq-side__icon">
                  <MessageCircle size={22} />
                </div>

                <h3>
                  Cevabı
                  <br />
                  bulamadın mı?
                </h3>

                <p>
                  Hazır cevapların dışında kalan bir soru veya
                  özel projen varsa doğrudan bizimle konuş.
                </p>

                <a
                  href="/contact"
                  className="faq-side__button"
                >
                  Bize Ulaş
                  <ArrowRight size={17} />
                </a>

              </div>

              <div className="faq-side__mini">

                <div>
                  <span>TWINSLED</span>
                  <strong>NEON / LED</strong>
                </div>

                <div className="faq-side__mini-line" />

                <Zap size={18} />

              </div>

            </aside>

          </div>

        </div>

      </section>


      <section className="faq-topics">

        <div className="faq-container">

          <div className="faq-section-head">
            <div>
              <span className="faq-section-tag">
                EXPLORE
              </span>

              <h2>
                Sıradaki
                <span> adımın.</span>
              </h2>
            </div>

            <p>
              Sorunu çözdüysen şimdi fikrini ışığa dönüştür.
            </p>
          </div>


          <div className="faq-topics__grid">

            {quickTopics.map((topic) => {
              const Icon = topic.icon

              return (
                <a
                  href={topic.href}
                  className="faq-topic"
                  key={topic.number}
                >
                  <div className="faq-topic__top">
                    <span>{topic.number}</span>
                    <Icon size={22} />
                  </div>

                  <h3>{topic.title}</h3>

                  <p>{topic.text}</p>

                  <ArrowUpRight
                    size={18}
                    className="faq-topic__arrow"
                  />
                </a>
              )
            })}

          </div>

        </div>

      </section>


      <section className="faq-cta">

        <div className="faq-cta__glow" />

        <div className="faq-container">

          <div className="faq-cta__inner">

            <span className="faq-cta__tag">
              TWINSLED / LET'S TALK
            </span>

            <h2>
              Sorunu
              <br />
              <span>ışığa bağla.</span>
            </h2>

            <p>
              Özel tasarım, ürün veya proje hakkında
              konuşmak için doğrudan bizimle iletişime geç.
            </p>

            <div className="faq-cta__actions">

              <a
                href="/contact"
                className="faq-button faq-button--light"
              >
                İletişime Geç
                <ArrowRight size={18} />
              </a>

              <a
                href="/designer"
                className="faq-button faq-button--outline"
              >
                Kendin Tasarla
                <ArrowUpRight size={17} />
              </a>

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}

export default FAQ
