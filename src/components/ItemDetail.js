
import React, { useState } from 'react'
import { Grid, Typography } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Cart from './Cart';
import ItemCount from './ItemCount';

const ItemDetail = ({item}) => {

    const {detalle, imagen, precio, nombre} = item;

    const [viewIC, setViewIC] = useState(true);

    const onAdd = (count) => {
        console.log(`el usuario selecciono ${count} `);
        setViewIC(false);
    };

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
            {viewIC
                ? <ItemCount stock={3} initial={1} onAdd={onAdd}/>
                : <Cart />
            }
        </Grid>
    </Grid>
  )
}

export default ItemDetail