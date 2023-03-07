import React, { createContext, useState, useEffect } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [quantityC, setQuantityC] = useState(0)

  useEffect(() => {
    setQuantityC(cart.reduce((a, b) => a + b?.quantity, 0))
  }, [cart])

  function isInCart (id) {
    return cart.some((curso) => curso.id === id)
  }

  function addItem (item, qty) {
    if (isInCart(item.id)) {
      // --> entiendo que no puedo hacer lo siguiente pq estoy modificando el estado sin usar el setter
      // cart.forEach(curso => curso.id === item.id && (curso.quantity = (curso.quantity + qty)))
      const itemCarrito = cart.find(curso => curso.id === item.id)
      itemCarrito.quantity += qty

      const newCart = cart.filter(curso => curso.id !== item.id)

      setCart([...newCart, itemCarrito])
    } else {
      const quantity = qty
      setCart([...cart, { ...item, quantity }])
    }
    // setQuantity(quantity + qty)
  }

  function removeItem (itemId) {
    setCart(cart.filter(curso => curso.id !== itemId))
  }

  function clear () {
    setCart([])
  }

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear, quantityC }}>
      {children}
    </CartContext.Provider>
  )
}
