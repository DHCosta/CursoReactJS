import React from 'react'
import { Typography, TextField, Box, Button, Container } from '@mui/material'
import SellIcon from '@mui/icons-material/Sell'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

const FormBuy = () => {
  return (
    <Container fixed mt={2} pl={25}>
      <Typography variant='h6' mt={20} pb={3}>
        Por favor, complete el siguiente formulario con sus datos
      </Typography>
      <Box
        mb={2}
        maxWidth={600}
        component='form'
        noValidate
        autoComplete='off'
        display='flex'
        gap={1}
      >
        <TextField id='outlined-basic' label='Nombre' variant='outlined' />
        <TextField id='outlined-basic' label='Apellido' variant='outlined' />
        <TextField id='outlined-basic' label='email' variant='outlined' />
      </Box>
      <Button variant='contained' endIcon={<SellIcon />}>
        Confirmar
      </Button>
    </Container>
  )
}

export default FormBuy
