import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ItemCount from './ItemCount';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Item = ({curso}) => {

  const {nombre, detalle, imagen} = curso

  return (
    <Card>
      <CardMedia
        component="img"
        alt={nombre}
        image={imagen}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {nombre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {detalle}
        </Typography>
      </CardContent>
      <CardActions sx={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
          <ItemCount stock={3} initial={1}/>
          <Button size="small">
            <AddShoppingCartIcon sx={{ fontSize: 30}}/>
          </Button>
      </CardActions>
    </Card>
  )
}

export default Item

