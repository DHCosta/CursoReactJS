import React from 'react'
import Item from './Item'
import { Grid } from '@mui/material'

const ItemList = ({cursos}) => {

  return (
    <>
        {
            cursos.map((curso) => {
                return (
                  <Grid key={curso.nombre} item xs={4} sx={{ display: 'flex', alignItems: 'stretch'}}>
                    <Item curso={curso}/>
                  </Grid>
                )                
            })
        }
    </>
  )
}

export default ItemList