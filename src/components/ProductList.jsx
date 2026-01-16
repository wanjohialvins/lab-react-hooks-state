import React from 'react'
import ProductCard from './ProductCard'

// Sample product data (for display purposes only)
export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false }
]

const ProductList = ({ category, onAddToCart }) => {
  const filteredProducts =
    category === 'all'
      ? sampleProducts
      : sampleProducts.filter((p) => p.category === category)

  return (
    <div className="product-list-container">
      <h2 className="section-title">Available Products</h2>

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))
        ) : (
          <p className="no-products">No products available</p>
        )}
      </div>
    </div>
  )
}

export default ProductList
