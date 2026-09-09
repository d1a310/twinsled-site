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

function formatPrice(value) {
  return new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
    maximumFractionDigits: 0,
  }).format(Number(value) || 0)
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

function getWordStyles(item, lineIndex) {
  if (
    Array.isArray(item.wordStyles) &&
    Array.isArray(item.wordStyles[lineIndex])
  ) {
    return item.wordStyles[lineIndex]
  }

  return []
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
    totalPrice,
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

  const goToCheckout = () => {
    if (!cart.length) {
      return
    }

    onClose()

    window.location.href = '/checkout'
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
                                const wordStyles =
                                  getWordStyles(
                                    item,
                                    lineIndex,
                                  )

                                const fallbackColor =
                                  getLineColor(
                                    item,
                                    lineIndex,
                                  )

                                const fallbackFont =
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

                                      {wordStyles.length > 0 ? (
                                        <div className="cart-word-styles">
                                          {wordStyles.map(
                                            (
                                              word,
                                              wordIndex,
                                            ) => (
                                              <div
                                                className="cart-word-style"
                                                key={`${word.text}-${wordIndex}`}
                                              >
                                                <span className="cart-word-style__text">
                                                  {word.text}
                                                </span>

                                                <span className="cart-word-style__meta">
                                                  {word.color && (
                                                    <span className="cart-word-style__color">
                                                      <i
                                                        style={{
                                                          backgroundColor:
                                                            word.color.value,
                                                          boxShadow: `0 0 7px ${word.color.value}`,
                                                        }}
                                                      />
                                                      {word.color.name}
                                                    </span>
                                                  )}

                                                  {word.font && (
                                                    <span
                                                      className="cart-word-style__font"
                                                      style={{
                                                        fontFamily: `"${word.font.family}", sans-serif`,
                                                      }}
                                                    >
                                                      {word.font.name}
                                                    </span>
                                                  )}
                                                </span>
                                              </div>
                                            ),
                                          )}
                                        </div>
                                      ) : (
                                        <div className="cart-custom-line__meta">
                                          {fallbackColor && (
                                            <span>
                                              <i
                                                style={{
                                                  backgroundColor:
                                                    fallbackColor.value,
                                                  boxShadow: `0 0 7px ${fallbackColor.value}`,
                                                }}
                                              />

                                              {fallbackColor.name}
                                            </span>
                                          )}

                                          {fallbackFont && (
                                            <span
                                              className="cart-custom-line__font"
                                              style={{
                                                fontFamily: `"${fallbackFont.family}", sans-serif`,
                                              }}
                                            >
                                              {fallbackFont.name}
                                            </span>
                                          )}
                                        </div>
                                      )}
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

                        <strong className="cart-item__price">
                          {formatPrice(
                            item.totalPrice,
                          )}
                        </strong>
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
            <div className="cart-total">
              <span>TOPLAM</span>

              <strong>
                {formatPrice(totalPrice)}
              </strong>
            </div>

            <button
              type="button"
              className="cart-checkout"
              onClick={goToCheckout}
            >
              Siparişi Tamamla

              <ArrowRight size={17} />
            </button>

            <p className="cart-footer-note">
              Sipariş bilgilerini bir sonraki
              adımda tamamlayabilirsiniz.
            </p>
          </div>
        )}
      </aside>
    </>
  )
}

export default Cart