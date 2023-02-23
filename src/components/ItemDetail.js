
import React, { useState } from 'react'
import { Box, Grid, Typography } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import EndBuy from './EndBuy';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';

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
            <Box sx={{display:'flex', mt:3}}>
                {viewIC
                    ? <ItemCount stock={3} initial={1} onAdd={onAdd}/>
                    : <Link to={'/cart'}>
                        <EndBuy />
                      </Link>
                }
            </Box>
        </Grid>
    </Grid>
  )
}

export default ItemDetail