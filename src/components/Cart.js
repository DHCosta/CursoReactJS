import { Box, Container, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { CartContext } from './context/CartContext'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import Divider from '@mui/material/Divider'
import Paper from '@mui/material/Paper'

const Cart = () => {
  const { cart, removeItem } = useContext(CartContext)

  function calTotal () {
    return cart.reduce((a, b) => a + (b.precio * b.quantity), 0)
  }

  return (
    <>
      <Box sx={{ maxWidth: 'sm', boxShadow: 1 }} mt={15} ml={25}>
        {cart
          ? cart.map((curso) => (
            <List key={`${curso.id}`}>
              <ListItem secondaryAction={
                // eslint-disable-next-line no-restricted-globals
                <IconButton edge='end' aria-label='delete' onClick={removeItem(event.target.id)}>
                  <DeleteIcon />
                </IconButton>
              }
              >
                <ListItemAvatar>
                  <img src={curso.imagen} width={80} alt={curso.nombre} />
                </ListItemAvatar>
                <ListItemText className='item-list'>{curso.nombre} x {curso.quantity}</ListItemText>
                <ListItemText>${curso.precio * curso.quantity}</ListItemText>
              </ListItem>
              <Divider />
            </List>
          ))
          : 'loading...'}
      </Box>
      {cart.length
        ? <Paper sx={{ maxWidth: 'sm', elevation: 3, display: 'flex', justifyContent: 'flex-end', ml: 25, py: 3 }}><Typography sx={{ pr: 5 }}>TOTAL ${calTotal()}</Typography></Paper>
        : 'No posee cursos agregados al Carrito'}
    </>
  )
}

export default Cart
