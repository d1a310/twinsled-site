import { useMemo, useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  Check,
  MapPin,
  MessageCircle,
  Package,
  Phone,
  User,
} from 'lucide-react'

import { useCart } from '../../context/CartContext'
import './Checkout.css'

const WHATSAPP_NUMBERS = [
  {
    label: 'WhatsApp 1',
    number: '905439103247',
  },
  {
    label: 'WhatsApp 2',
    number: '905439103246',
  },
]

function formatPrice(value) {
  return new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
    maximumFractionDigits: 0,
  }).format(Number(value) || 0)
}

function isCustomDesign(item) {
  return (
    Array.isArray(item.lines) &&
    item.lines.length > 0
  )
}

function getWordStyles(item, lineIndex) {
  if (
    Array.isArray(item.wordStyles) &&
    Array.isArray(item.wordStyles[lineIndex])
  ) {
    return item.wordStyles[lineIndex]
  }

  return []
}

function getLineColor(item, index) {
  if (Array.isArray(item.colors) && item.colors[index]) {
    return item.colors[index]
  }

  return item.color || null
}

function getLineFont(item, index) {
  if (Array.isArray(item.fonts) && item.fonts[index]) {
    return item.fonts[index]
  }

  return null
}

function Checkout() {
  const {
    cart,
    totalPrice,
  } = useCart()

  const [customer, setCustomer] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    district: '',
    address: '',
    note: '',
  })

  const [orderSent, setOrderSent] = useState(false)
  const [sentTo, setSentTo] = useState('')

  const totalItems = useMemo(
    () =>
      cart.reduce(
        (total, item) =>
          total + (Number(item.quantity) || 0),
        0,
      ),
    [cart],
  )

  const updateField = (field, value) => {
    setCustomer((current) => ({
      ...current,
      [field]: value,
    }))

    if (orderSent) {
      setOrderSent(false)
      setSentTo('')
    }
  }

  const buildOrderMessage = () => {
    const lines = [
      'Merhaba, NEONLAB üzerinden sipariş vermek istiyorum.',
      '',
      '--- MÜŞTERİ BİLGİLERİ ---',
      `Ad Soyad: ${customer.name}`,
      `Telefon: ${customer.phone}`,
      `E-posta: ${customer.email || '-'}`,
      '',
      '--- TESLİMAT BİLGİLERİ ---',
      `İl: ${customer.city}`,
      `İlçe: ${customer.district}`,
      `Adres: ${customer.address}`,
      '',
    ]

    if (customer.note.trim()) {
      lines.push('--- SİPARİŞ NOTU ---')
      lines.push(customer.note.trim())
      lines.push('')
    }

    lines.push('--- SİPARİŞ DETAYLARI ---')
    lines.push('')

    cart.forEach((item, index) => {
      lines.push(
        `${index + 1}. ${item.name}`,
      )

      if (isCustomDesign(item)) {
        lines.push('Özel Tasarım:')

        item.lines.forEach(
          (line, lineIndex) => {
            lines.push(
              `  Satır ${lineIndex + 1}: ${line}`,
            )

            const wordStyles = getWordStyles(
              item,
              lineIndex,
            )

            if (wordStyles.length > 0) {
              wordStyles.forEach((word) => {
                lines.push(
                  `    ${word.text} → ${word.color?.name || '-'} / ${word.font?.name || '-'}`,
                )
              })
            } else {
              const color = getLineColor(
                item,
                lineIndex,
              )

              const font = getLineFont(
                item,
                lineIndex,
              )

              lines.push(
                `    Renk: ${color?.name || '-'}`,
              )

              lines.push(
                `    Font: ${font?.name || '-'}`,
              )
            }
          },
        )
      } else {
        lines.push(
          `Renk: ${item.color?.name || '-'}`,
        )
      }

      lines.push(
        `Ölçü: ${item.size?.value || '-'}`,
      )

      lines.push(
        `Adet: ${item.quantity}`,
      )

      lines.push(
        `Tutar: ${formatPrice(item.totalPrice)}`,
      )

      lines.push('')
    })

    lines.push('--- TOPLAM ---')
    lines.push(
      `Toplam: ${formatPrice(totalPrice)}`,
    )

    return lines.join('\n')
  }

  const sendOrderToWhatsApp = (
    event,
    whatsappNumber,
    whatsappLabel,
  ) => {
    event.preventDefault()

    if (
      !customer.name.trim() ||
      !customer.phone.trim() ||
      !customer.city.trim() ||
      !customer.district.trim() ||
      !customer.address.trim()
    ) {
      return
    }

    const message = buildOrderMessage()

    const whatsappUrl =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

    window.open(
      whatsappUrl,
      '_blank',
      'noopener,noreferrer',
    )

    setOrderSent(true)
    setSentTo(whatsappLabel)
  }

  if (cart.length === 0) {
    return (
      <main className="checkout-page">
        <div className="checkout-empty">
          <div className="checkout-empty__icon">
            <Package size={28} />
          </div>

          <span>NEONLAB / CHECKOUT</span>

          <h1>Sepetin boş.</h1>

          <p>
            Sipariş oluşturabilmek için önce
            sepete bir ürün eklemelisin.
          </p>

          <a href="/products">
            Ürünleri Keşfet
            <ArrowRight size={17} />
          </a>
        </div>
      </main>
    )
  }

  return (
    <main className="checkout-page">
      <div className="checkout-bg-glow checkout-bg-glow--one" />
      <div className="checkout-bg-glow checkout-bg-glow--two" />

      <div className="checkout-container">
        <div className="checkout-header">
          <a
            href="/products"
            className="checkout-back"
          >
            <ArrowLeft size={16} />
            Alışverişe Dön
          </a>

          <span>NEONLAB / CHECKOUT</span>

          <h1>
            Siparişini
            <span> tamamla.</span>
          </h1>

          <p>
            Sipariş detaylarını kontrol et,
            bilgilerini gir ve WhatsApp üzerinden
            talebini gönder.
          </p>
        </div>

        <div className="checkout-layout">
          <section className="checkout-main">
            <div className="checkout-card">
              <div className="checkout-card__header">
                <div className="checkout-step">
                  01
                </div>

                <div>
                  <span>MÜŞTERİ BİLGİLERİ</span>
                  <h2>Sen kimsin?</h2>
                </div>
              </div>

              <div className="checkout-form-grid">
                <label className="checkout-field">
                  <span>Ad Soyad *</span>

                  <div className="checkout-input">
                    <User size={16} />

                    <input
                      type="text"
                      value={customer.name}
                      onChange={(event) =>
                        updateField(
                          'name',
                          event.target.value,
                        )
                      }
                      placeholder="Adınız ve soyadınız"
                      required
                    />
                  </div>
                </label>

                <label className="checkout-field">
                  <span>Telefon *</span>

                  <div className="checkout-input">
                    <Phone size={16} />

                    <input
                      type="tel"
                      value={customer.phone}
                      onChange={(event) =>
                        updateField(
                          'phone',
                          event.target.value,
                        )
                      }
                      placeholder="05xx xxx xx xx"
                      required
                    />
                  </div>
                </label>
              </div>

              <label className="checkout-field">
                <span>E-posta</span>

                <div className="checkout-input">
                  <input
                    type="email"
                    value={customer.email}
                    onChange={(event) =>
                      updateField(
                        'email',
                        event.target.value,
                      )
                    }
                    placeholder="ornek@mail.com"
                  />
                </div>
              </label>
            </div>

            <div className="checkout-card">
              <div className="checkout-card__header">
                <div className="checkout-step">
                  02
                </div>

                <div>
                  <span>TESLİMAT</span>
                  <h2>Nereye gönderelim?</h2>
                </div>
              </div>

              <div className="checkout-form-grid">
                <label className="checkout-field">
                  <span>İl *</span>

                  <div className="checkout-input">
                    <MapPin size={16} />

                    <input
                      type="text"
                      value={customer.city}
                      onChange={(event) =>
                        updateField(
                          'city',
                          event.target.value,
                        )
                      }
                      placeholder="İl"
                      required
                    />
                  </div>
                </label>

                <label className="checkout-field">
                  <span>İlçe *</span>

                  <div className="checkout-input">
                    <MapPin size={16} />

                    <input
                      type="text"
                      value={customer.district}
                      onChange={(event) =>
                        updateField(
                          'district',
                          event.target.value,
                        )
                      }
                      placeholder="İlçe"
                      required
                    />
                  </div>
                </label>
              </div>

              <label className="checkout-field">
                <span>Adres *</span>

                <textarea
                  value={customer.address}
                  onChange={(event) =>
                    updateField(
                      'address',
                      event.target.value,
                    )
                  }
                  placeholder="Mahalle, sokak, bina no, daire no..."
                  rows={5}
                  required
                />
              </label>
            </div>

            <div className="checkout-card">
              <div className="checkout-card__header">
                <div className="checkout-step">
                  03
                </div>

                <div>
                  <span>EK NOT</span>
                  <h2>Bir şey eklemek ister misin?</h2>
                </div>
              </div>

              <label className="checkout-field">
                <span>Sipariş Notu</span>

                <textarea
                  value={customer.note}
                  onChange={(event) =>
                    updateField(
                      'note',
                      event.target.value,
                    )
                  }
                  placeholder="Özel bir isteğin, teslimat notun veya belirtmek istediğin başka bir detay..."
                  rows={4}
                />
              </label>
            </div>
          </section>

          <aside className="checkout-summary">
            <div className="checkout-summary__header">
              <div>
                <span>SİPARİŞ ÖZETİ</span>

                <h2>
                  {totalItems} ürün
                </h2>
              </div>

              <div className="checkout-summary__icon">
                <Package size={19} />
              </div>
            </div>

            <div className="checkout-order-items">
              {cart.map((item, index) => {
                const custom =
                  isCustomDesign(item)

                return (
                  <article
                    className="checkout-order-item"
                    key={item.cartId}
                  >
                    <div className="checkout-order-item__top">
                      <span>
                        {String(index + 1).padStart(
                          2,
                          '0',
                        )}
                      </span>

                      <div>
                        <strong>
                          {item.name}
                        </strong>

                        <small>
                          {item.category}
                        </small>
                      </div>

                      <b>
                        {formatPrice(
                          item.totalPrice,
                        )}
                      </b>
                    </div>

                    {custom && (
                      <div className="checkout-order-custom">
                        {item.lines.map(
                          (
                            line,
                            lineIndex,
                          ) => {
                            const wordStyles =
                              getWordStyles(
                                item,
                                lineIndex,
                              )

                            return (
                              <div
                                className="checkout-order-line"
                                key={`${line}-${lineIndex}`}
                              >
                                <span>
                                  {lineIndex + 1}.
                                </span>

                                <div>
                                  <strong>
                                    {line}
                                  </strong>

                                  {wordStyles.length >
                                    0 && (
                                    <div className="checkout-word-list">
                                      {wordStyles.map(
                                        (
                                          word,
                                          wordIndex,
                                        ) => (
                                          <span
                                            key={`${word.text}-${wordIndex}`}
                                            style={{
                                              fontFamily: `"${word.font?.family || 'Poppins'}", sans-serif`,
                                              color:
                                                word.color?.value ||
                                                '#ffffff',
                                            }}
                                          >
                                            {word.text}
                                          </span>
                                        ),
                                      )}
                                    </div>
                                  )}
                                </div>
                              </div>
                            )
                          },
                        )}
                      </div>
                    )}

                    <div className="checkout-order-item__meta">
                      <span>
                        Ölçü:{' '}
                        {item.size?.value || '-'}
                      </span>

                      <span>
                        Adet: {item.quantity}
                      </span>
                    </div>
                  </article>
                )
              })}
            </div>

            <div className="checkout-summary__total">
              <span>TOPLAM</span>

              <strong>
                {formatPrice(totalPrice)}
              </strong>
            </div>

            <form className="checkout-submit-area">
              <div className="checkout-consent">
                <Check size={16} />

                <span>
                  Sipariş bilgilerimin WhatsApp
                  üzerinden iletilmesini kabul
                  ediyorum.
                </span>
              </div>

              <button
                type="button"
                className="checkout-submit"
                onClick={(event) =>
                  sendOrderToWhatsApp(
                    event,
                    WHATSAPP_NUMBERS[0].number,
                    WHATSAPP_NUMBERS[0].label,
                  )
                }
              >
                <MessageCircle size={18} />

                WhatsApp 1&apos;den Sipariş Ver

                <ArrowRight size={18} />
              </button>

              <button
                type="button"
                className="checkout-submit"
                onClick={(event) =>
                  sendOrderToWhatsApp(
                    event,
                    WHATSAPP_NUMBERS[1].number,
                    WHATSAPP_NUMBERS[1].label,
                  )
                }
              >
                <MessageCircle size={18} />

                WhatsApp 2&apos;den Sipariş Ver

                <ArrowRight size={18} />
              </button>

              {orderSent && (
                <div className="checkout-success">
                  <Check size={17} />

                  <span>
                    Sipariş mesajı {sentTo} üzerinden
                    açıldı. WhatsApp ekranında
                    mesajı göndererek işlemi
                    tamamlayabilirsin.
                  </span>
                </div>
              )}
            </form>
          </aside>
        </div>
      </div>
    </main>
  )
}

export default Checkout