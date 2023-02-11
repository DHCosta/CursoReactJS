import { Container } from '@mui/material'
import React from 'react'

const Item = ({curso}) => {
  return (
    <Container>
        <h3>{curso.nombre}</h3>
        <p>{curso.detalle}</p>
        <p>${curso.precio}</p>
        <p>{curso.imagen}</p>
    </Container>
  )
}

export default Item

