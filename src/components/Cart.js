import { Box } from '@mui/material'
import React, { useContext } from 'react'
import { CartContext } from './context/CartContext'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import FolderIcon from '@mui/icons-material/Folder'
import DeleteIcon from '@mui/icons-material/Delete'

const Cart = () => {
  const { cart } = useContext(CartContext)

  return (
    <>
      <Box sx={{ maxWidth: 'sm', boxShadow: 1 }} mt={15} ml={25}>
        {cart
          ? cart.map((curso) => (
            <List key={`${curso.id}`}>
              <ListItem secondaryAction={
                <IconButton edge='end' aria-label='delete'>
                  <DeleteIcon />
                </IconButton>
              }
              >
                <ListItemAvatar>
                  <img src={curso.imagen} width={80} alt={curso.nombre} />
                </ListItemAvatar>
                <ListItemText className='item-list'>{curso.nombre} x {curso.quantity}</ListItemText>
                <ListItemText>${curso.precio}</ListItemText>
              </ListItem>
            </List>
          ))
          : 'loading...'}
      </Box>
    </>
  )
}

export default Cart
