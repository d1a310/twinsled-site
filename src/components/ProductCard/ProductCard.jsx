import { ArrowRight, ExternalLink } from 'lucide-react'
import './ProductCard.css'

function ProductCard({ product, onDetail }) {
  const openTrendyol = (event) => {
    event.stopPropagation()

    if (product.sourceUrl) {
      window.open(product.sourceUrl, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <article className="product-card">
      <div
        className="product-card__image"
        onClick={onDetail}
        role="button"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            onDetail()
          }
        }}
      >
        <img src={product.image} alt={product.name} />

        {product.badge && (
          <span className="product-card__badge">
            {product.badge}
          </span>
        )}

        <button
          type="button"
          className="product-card__quick"
          onClick={(event) => {
            event.stopPropagation()
            onDetail()
          }}
        >
          <span>Detaylı İncele</span>
          <ArrowRight size={17} />
        </button>
      </div>

      <div className="product-card__content">
        <span className="product-card__category">
          {product.category}
        </span>

        <h3>{product.name}</h3>

        <p>{product.description}</p>

        <div className="product-card__bottom">
          <strong>{product.price}</strong>

          <div className="product-card__actions">
            <button
              type="button"
              className="product-card__detail"
              onClick={onDetail}
            >
              Detay
            </button>

            <button
              type="button"
              className="product-card__external"
              onClick={openTrendyol}
            >
              <ExternalLink size={15} />
              İncele
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProductCard