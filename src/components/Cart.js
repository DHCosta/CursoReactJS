import { Box } from '@mui/material'
import React, { useContext } from 'react'
import { CartContext } from './context/CartContext'

const Cart = () => {
  const { cart } = useContext(CartContext)
  return (
    <>
      <Box pt={15}>
        {cart
          ? cart.map((curso) => (
            <Box key={`${curso.id}`}>
              <div>
                <h3>{curso.nombre}</h3>
                <h3>{curso.quantity}</h3>
              </div>
            </Box>
          ))
          : 'loading...'}
      </Box>
    </>
  )
}

export default Cart
