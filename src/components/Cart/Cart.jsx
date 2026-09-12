import {
  ArrowRight,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
  X,
} from 'lucide-react'
import { useCart } from '../../context/CartContext'
import './Cart.css'


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

function getLineText(item, index) {
  if (Array.isArray(item.lines) && item.lines[index]) {
    return item.lines[index]
  }

  return ''
}

function isCustomDesign(item) {
  return (
    Array.isArray(item.lines) &&
    item.lines.length > 0
  )
}

function Cart({
  isOpen,
  onClose,
}) {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    totalItems,
  } = useCart()

  const increase = (item) => {
    updateQuantity(
      item.cartId,
      item.quantity + 1,
    )
  }

  const decrease = (item) => {
    if (item.quantity <= 1) {
      return
    }

    updateQuantity(
      item.cartId,
      item.quantity - 1,
    )
  }

  const sendWhatsApp = () => {
    if (!cart.length) {
      return
    }

    const messageLines = [
      'Merhaba, NEONLAB üzerinden sipariş vermek istiyorum.',
      '',
    ]

    cart.forEach((item, index) => {
      messageLines.push(
        `${index + 1}. ${item.name}`,
      )

      if (isCustomDesign(item)) {
        messageLines.push('Özel Tasarım Detayları:')

        item.lines.forEach((line, lineIndex) => {
          const color = getLineColor(
            item,
            lineIndex,
          )

          const font = getLineFont(
            item,
            lineIndex,
          )

          messageLines.push(
            `${lineIndex + 1}. ${line}`,
          )

          messageLines.push(
            `   Renk: ${color?.name || '-'}`,
          )

          messageLines.push(
            `   Font: ${font?.name || '-'}`,
          )
        })
      } else {
        messageLines.push(
          `Renk: ${item.color?.name || '-'}`,
        )
      }

      messageLines.push(
        `Ölçü: ${item.size?.value || '-'}`,
      )

      messageLines.push(
        `Adet: ${item.quantity}`,
      )


      messageLines.push('')
    })


    window.open(
      `https://wa.me/?text=${encodeURIComponent(
        messageLines.join('\n'),
      )}`,
      '_blank',
      'noopener,noreferrer',
    )
  }

  return (
    <>
      {isOpen && (
        <button
          type="button"
          className="cart-overlay"
          onClick={onClose}
          aria-label="Sepeti kapat"
        />
      )}

      <aside
        className={`cart-drawer ${
          isOpen
            ? 'cart-drawer--open'
            : ''
        }`}
      >
        <div className="cart-drawer__header">
          <div>
            <span>NEONLAB / CART</span>

            <h2>Sepetin</h2>
          </div>

          <button
            type="button"
            className="cart-drawer__close"
            onClick={onClose}
            aria-label="Sepeti kapat"
          >
            <X size={19} />
          </button>
        </div>

        <div className="cart-drawer__count">
          {totalItems} ürün
        </div>

        <div className="cart-drawer__body">
          {cart.length === 0 ? (
            <div className="cart-empty">
              <div className="cart-empty__icon">
                <ShoppingBag size={27} />
              </div>

              <span>SEPET BOŞ</span>

              <h3>
                Biraz ışık ekleyelim.
              </h3>

              <p>
                Beğendiğin neon ürünleri sepete
                eklediğinde burada görünecek.
              </p>
            </div>
          ) : (
            <div className="cart-items">
              {cart.map((item) => {
                const customDesign =
                  isCustomDesign(item)

                return (
                  <article
                    className={`cart-item ${
                      customDesign
                        ? 'cart-item--custom'
                        : ''
                    }`}
                    key={item.cartId}
                  >
                    <div className="cart-item__image">
                      <img
                        src={item.image}
                        alt={item.name}
                      />
                    </div>

                    <div className="cart-item__content">
                      <div className="cart-item__top">
                        <div>
                          <span>
                            {item.category}
                          </span>

                          <h3>
                            {item.name}
                          </h3>
                        </div>

                        <button
                          type="button"
                          onClick={() =>
                            removeFromCart(
                              item.cartId,
                            )
                          }
                          aria-label="Ürünü sil"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>

                      {customDesign ? (
                        <div className="cart-custom-lines">
                          <div className="cart-custom-lines__heading">
                            <span>
                              TASARIM DETAYLARI
                            </span>

                            <small>
                              {item.lines.length} satır
                            </small>
                          </div>

                          <div className="cart-custom-lines__list">
                            {item.lines.map(
                              (
                                line,
                                lineIndex,
                              ) => {
                                const color =
                                  getLineColor(
                                    item,
                                    lineIndex,
                                  )

                                const font =
                                  getLineFont(
                                    item,
                                    lineIndex,
                                  )

                                return (
                                  <div
                                    className="cart-custom-line"
                                    key={`${line}-${lineIndex}`}
                                  >
                                    <div className="cart-custom-line__number">
                                      {lineIndex + 1}
                                    </div>

                                    <div className="cart-custom-line__info">
                                      <strong>
                                        {line}
                                      </strong>

                                      <div className="cart-custom-line__meta">
                                        {color && (
                                          <span>
                                            <i
                                              style={{
                                                backgroundColor:
                                                  color.value,
                                                boxShadow: `0 0 7px ${color.value}`,
                                              }}
                                            />

                                            {color.name}
                                          </span>
                                        )}

                                        {font && (
                                          <span
                                            className="cart-custom-line__font"
                                            style={{
                                              fontFamily: `"${font.family}", sans-serif`,
                                            }}
                                          >
                                            {font.name}
                                          </span>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                )
                              },
                            )}
                          </div>
                        </div>
                      ) : (
                        <div className="cart-item__options">
                          <span>
                            <i
                              style={{
                                backgroundColor:
                                  item.color?.value,
                                color:
                                  item.color?.value,
                              }}
                            />

                            {item.color?.name ||
                              '-'}
                          </span>

                          <span>
                            {item.size?.value ||
                              '-'}
                          </span>
                        </div>
                      )}

                      {customDesign && (
                        <div className="cart-custom-size">
                          <span>
                            ÖLÇÜ
                          </span>

                          <strong>
                            {item.size?.value ||
                              '-'}
                          </strong>
                        </div>
                      )}

                      <div className="cart-item__bottom">
                        <div className="cart-item__quantity">
                          <button
                            type="button"
                            onClick={() =>
                              decrease(item)
                            }
                            aria-label="Azalt"
                            disabled={
                              item.quantity <= 1
                            }
                          >
                            <Minus size={13} />
                          </button>

                          <strong>
                            {item.quantity}
                          </strong>

                          <button
                            type="button"
                            onClick={() =>
                              increase(item)
                            }
                            aria-label="Artır"
                          >
                            <Plus size={13} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-drawer__footer">

            <button
              type="button"
              className="cart-checkout"
              onClick={sendWhatsApp}
            >
              WhatsApp&apos;tan Sipariş Ver

              <ArrowRight size={17} />
            </button>

            <p className="cart-footer-note">
              Sipariş detaylarını WhatsApp üzerinden
              birlikte netleştiriyoruz.
            </p>
          </div>
        )}
      </aside>
    </>
  )
}

export default Cart