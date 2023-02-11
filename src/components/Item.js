import { Container } from '@mui/material'
import React from 'react'

const Item = ({curso}) => {
  return (
    <Container flexed>
        <h3>{curso.title}</h3>
        <p>${curso.price}</p>
    </Container>
  )
}

export default Item