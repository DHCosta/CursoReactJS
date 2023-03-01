import React, { createContext, useState, useEffect } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [quantityC, setQuantityC] = useState(0)

  useEffect(() => {
    setQuantityC(cart.reduce((a, b) => a?.quantity + b?.quantity, 0))
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
    const newCart = cart.filter(curso => curso.id !== itemId)
    setCart(newCart)
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
