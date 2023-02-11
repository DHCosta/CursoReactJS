import React, { useState } from 'react';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box } from '@mui/material';

const ItemCount = ({stock, initial, onAdd}) => {

  const [contador, setContador] = useState(initial);

  const addCont = () => {
    if (contador < stock) setContador(contador + 1);
  }

  const remCont = () => {
    if (contador > 0) setContador(contador - 1);
  }

  /*  const handlerSelect = () => {
    if (stock > 0) onAdd(count);
  };*/

  return (
    <Container fixed>
        <Box sx={{ display: 'inline-flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <IconButton aria-label="add" onClick={addCont}>
                <AddIcon />
            </IconButton>
            <Typography px={2}>{contador}</Typography>
            <IconButton aria-label="delete" onClick={remCont}>
                <RemoveIcon />
            </IconButton>
        </Box>
    </Container>
  )
}

export default ItemCount