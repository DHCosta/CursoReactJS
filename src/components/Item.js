import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ItemCount from './ItemCount';
import Container from '@mui/material/Container';

const Item = ({curso}) => {
  return (
    <Card>
      <CardMedia
        component="img"
        alt={curso.nombre}
        image={curso.imagen}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {curso.nombre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {curso.detalle}
        </Typography>
      </CardContent>
      <CardActions>
        <Container sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <ItemCount stock={3} initial={1}/>
          <Button size="small">Agregar al carrito</Button>
        </Container>
      </CardActions>
    </Card>
  )
}

export default Item

