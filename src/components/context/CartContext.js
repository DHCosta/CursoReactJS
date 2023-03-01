import React, { createContext, useState, useEffect } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  // const [quantity, setQuantity] = useState(0)

  function isInCart (id) {
    return cart.some((curso) => curso.id === id)
  }

  function addItem (item, quantity) {
    if (isInCart(item.id)) {
      // cart.forEach(curso => curso.id === item.id && (curso.quantity = (curso.quantity + quantity)))
      const itemCarrito = cart.find(curso => curso.id === item.id)
      itemCarrito.quantity += quantity

      const newCart = cart.filter(curso => curso.id !== item.id)

      setCart([...newCart, itemCarrito])
    } else {
      setCart([...cart, { item, quantity }])
      // setQty(qty + quantity)
    }
  }

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear }}>
      {children}
    </CartContext.Provider>
  )
}

/*
Al clickear comprar en ItemDetail se debe guardar en el CartContext el producto y su cantidad en forma de objeto
{ name, price, quantity, etc. } dentro del array de productos agregados
Detalle importante: CartContext debe tener la lógica incorporada de no aceptar duplicados y mantener su consistencia.
Métodos recomendados:
addItem(item, quantity) // agregar cierta cantidad de un ítem al carrito
removeItem(itemId) // Remover un item del cart por usando su id
clear() // Remover todos los items
isInCart: (id) => true|false
*/
