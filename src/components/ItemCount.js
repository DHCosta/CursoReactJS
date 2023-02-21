import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Paper from '@mui/material/Paper';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from '@mui/material/Button';


const ItemCount = ({stock, initial, onAdd}) => {

  const [contador, setContador] = useState(initial);

  const addCont = () => {
    if (contador < stock) setContador(contador + 1);
  }

  const remCont = () => {
    if (contador > 0) setContador(contador - 1);
  }

  const handlerSelect = () => {
    if (stock > 0) onAdd(contador);
  };

  return (
    <Paper variant="outlined" square sx={{ display: 'inline-flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <IconButton aria-label="delete" onClick={remCont}>
          <RemoveIcon sx={{ fontSize: 18}}/>
      </IconButton>
      <Typography variant="subtitle1" px={1}>{contador}</Typography>
      <IconButton aria-label="add" onClick={addCont}>
          <AddIcon sx={{ fontSize: 18}}/>
      </IconButton>
      <Button size="small" onClick={handlerSelect}>
          <AddShoppingCartIcon sx={{ fontSize: 25, color: '#0080ff'}}/>
      </Button>
    </Paper>
  )
}

export default ItemCount