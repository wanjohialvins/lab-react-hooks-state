import React from 'react'

const Cart = ({ cartItems }) => {
  return (
    <div className="cart-container">
      <h2 className="section-title">Shopping Cart</h2>
      {cartItems.length > 0 ? (
        <ul className="cart-list">
          {cartItems.map((item, index) => (
            <li key={index} className="cart-item">
              {item.name} is in your cart.
            </li>
          ))}
        </ul>
      ) : (
        <p className="empty-cart">Your cart is empty.</p>
      )}
    </div>
  )
}

export default Cart
