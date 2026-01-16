import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

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
    <div className={darkMode ? 'dark-mode' : ''}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      <DarkModeToggle darkMode={darkMode} onToggle={toggleDarkMode} />

      <label>Filter by Category: </label>
      <select value={category} onChange={handleCategoryChange}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList category={category} onAddToCart={addToCart} />

      <Cart cartItems={cart} />
    </div>
  )
}

export default App
