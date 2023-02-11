import { Container } from '@mui/material'
import React from 'react'
import Item from './Item'

const ItemList = ({cursos}) => {

  return (
    <Container>
        {
            cursos.map((curso) => {
                return <Item key={curso.id} curso={curso}/>
            })
        }
    </Container>
  )
}

export default ItemList