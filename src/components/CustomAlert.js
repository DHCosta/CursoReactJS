import React from 'react'
import { Grid, Alert, AlertTitle } from '@mui/material'

const CustomAlert = (props) => {
  const { tipo, titulo, mensaje } = props

  return (
    <Grid item xs={6} pt={2}>
      <Alert severity={tipo}>
        <AlertTitle>{titulo}</AlertTitle>
        {mensaje}
      </Alert>
    </Grid>
  )
}

export default CustomAlert
