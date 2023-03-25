import React, { useState, useContext } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import CardMedia from '@mui/material/CardMedia'
import EndBuy from './EndBuy'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from './context/CartContext'

const ItemDetail = ({ item }) => {
  const { detalle, imagen, precio, nombre, cupo } = item
  const [viewIC, setViewIC] = useState(true)

  const { addItem } = useContext(CartContext)

  const onAdd = (count) => {
    setViewIC(false)
    addItem(item, count)
  }

  return (
    <Grid container spacing={6} px={20}>
      <Grid item xs={6}>
        <CardMedia
          component='img'
          alt={nombre}
          image={imagen}
        />
      </Grid>
      <Grid item xs={6}>
        <Typography variant='h4'>{nombre}</Typography>
        <Typography variant='h5' color='#0080ff' py={2}>${precio}</Typography>
        <Typography variant='body2' color='text.secondary'>{detalle}</Typography>
        <Box sx={{ display: 'flex', mt: 3 }}>
          {viewIC
            ? <ItemCount stock={cupo} initial={1} onAdd={onAdd} />
            : <Link to='/cart'> <EndBuy /> </Link>}
        </Box>
      </Grid>
    </Grid>
  )
}

export default ItemDetail
