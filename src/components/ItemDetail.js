
import React from 'react'
import { Box, Grid, Typography } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';

const ItemDetail = ({item}) => {

    const {detalle, imagen, precio, nombre} = item;

  return (
    <Grid container spacing={6} px={20}>
        <Grid item xs={6}>
            <CardMedia
                component="img"
                alt={nombre}
                image={imagen}
            />
        </Grid>
        <Grid item xs={6}>
            <Typography variant='h4'>{nombre}</Typography>
            <Typography variant="h5" color="#0080ff" py={2}>${precio}</Typography>
            <Typography variant="body2" color="text.secondary">{detalle}</Typography>
        </Grid>
    </Grid>
  )
}

export default ItemDetail