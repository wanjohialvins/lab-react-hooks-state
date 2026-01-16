import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import './App.css'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [cart, setCart] = useState([])
  const [category, setCategory] = useState('all')

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
  }

  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : ''}`}>
      <div className="content-wrapper">
        <header className="app-header">
          <h1>🛒 Shopping App</h1>
          <DarkModeToggle darkMode={darkMode} onToggle={toggleDarkMode} />
        </header>

        <section className="intro">
          <p>
            Welcome! Your task is to implement filtering, cart management, and dark
            mode.
          </p>
        </section>

        <section className="filter-section">
          <label htmlFor="category-select">Filter by Category: </label>
          <select
            id="category-select"
            value={category}
            onChange={handleCategoryChange}
            className="styled-select"
          >
            <option value="all">All</option>
            <option value="Fruits">Fruits</option>
            <option value="Dairy">Dairy</option>
          </select>
        </section>

        <main>
          <ProductList category={category} onAddToCart={addToCart} />
        </main>

        <footer className="cart-footer">
          <Cart cartItems={cart} />
        </footer>
      </div>
    </div>
  )
}

export default App
