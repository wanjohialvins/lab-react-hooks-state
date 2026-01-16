import React from 'react'

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className={`product-card ${!product.inStock ? 'out-of-stock' : ''}`}>
      <div className="card-top">
        <h3>{product.name}</h3>
        <span className={`status-badge ${product.inStock ? 'in-stock' : 'no-stock'}`}>
          {product.inStock ? 'In Stock' : 'Out of Stock'}
        </span>
      </div>
      <p className="price">Price: {product.price}</p>

      <button
        className="add-to-cart-btn"
        data-testid={'product-' + product.id}
        onClick={() => onAddToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard
