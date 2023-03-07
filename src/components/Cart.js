import { Box, Container, Typography, Button } from '@mui/material'
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
import { Link } from 'react-router-dom'

const Cart = () => {
  const { cart, removeItem, clear } = useContext(CartContext)

  function calTotal () {
    return cart.reduce((a, b) => a + (b.precio * b.quantity), 0)
  }

  return (
    <>
      {!cart.length ||
          (
            <Box sx={{ maxWidth: 'sm', display: 'flex', justifyContent: 'flex-end', mt: 15, ml: 25, py: 2 }}>
              <Button variant='contained' onClick={clear}>Vaciar</Button>
            </Box>
          )}
      <Box sx={{ maxWidth: 'sm', boxShadow: 1 }} pt={3} ml={25}>
        {cart
          ? cart.map((curso) => (
            <List key={`${curso.id}`}>
              <ListItem secondaryAction={
                <IconButton edge='end' aria-label='delete' onClick={() => removeItem(curso.id)}>
                  <DeleteIcon />
                </IconButton>
              }
              >
                <ListItemAvatar>
                  <img src={curso.imagen} width={80} alt={curso.nombre} />
                </ListItemAvatar>
                <ListItemText className='item-list'>
                  <Typography variant='subtitle1' sx={{ display: 'inline-block' }}>{curso.nombre}</Typography>
                  <Typography variant='subtitle2' sx={{ display: 'inline-block', pl: 1 }}>x ({curso.quantity})</Typography>
                </ListItemText>
                <ListItemText>
                  <Typography variant='subtitle1'>
                    ${curso.precio * curso.quantity}
                  </Typography>
                </ListItemText>
              </ListItem>
              <Divider />
            </List>
          ))
          : 'loading...'}
      </Box>
      {cart.length
        ? (
          <Paper sx={{ maxWidth: 'sm', elevation: 3, display: 'flex', justifyContent: 'flex-end', bgcolor: '#7986cb', color: 'white', ml: 25, py: 3 }}>
            <Typography variant='h6' sx={{ pr: 5 }}>TOTAL ${calTotal()}</Typography>
          </Paper>
          )
        : (
          <Container sx={{ display: 'flex', flexDirection: 'column', mt: 15 }}>
            <Typography variant='h5' py={3}>
              No posee cursos agregados al Carrito
            </Typography>
            <Link to='/'>
              <Button variant='contained'>Volver</Button>
            </Link>
          </Container>)}
    </>
  )
}

export default Cart
