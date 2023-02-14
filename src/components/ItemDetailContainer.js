import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail';
import { Typography, Grid } from '@mui/material'

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const [error, setError] = useState(false);

    const getItem = async () => {
      try{
        const res = await fetch('https://raw.githubusercontent.com/DHCosta/CursoReactJS/0bff2f1db61e11530bc761d0295d1600d6e2a7e5/src/data/data.json');
        const data = await res.json();
        setItem(data[0]);
      }
      catch{
          setError(true);
      }    
    }
    
    useEffect(() => {
      getItem();
    }, []);

  return (
    <>
      {!error ? (
          <>
              {
              item ? (
                  <Grid container spacing={5} px={20} py={5}>
                    <ItemDetail item={item}/>
                  </Grid>
              ) : (
                  <Typography>Cargando detalle del curso...</Typography>    
              )}
          </>
      ) : (
          <Typography>Hubo un problema al carga el detalle del curso</Typography>    
      )}
    </>
  )
}

export default ItemDetailContainer