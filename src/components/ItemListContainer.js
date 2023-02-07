import { Typography } from '@mui/material'
import React from 'react'

const ItemListContainer = ({greeting}) => {

    console.log(greeting);

    return (
        <Typography variant="h5" mt={15} pl={3}>{greeting}</Typography>
    )
}

export default ItemListContainer