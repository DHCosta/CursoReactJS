import React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/system'
import { Link } from 'react-router-dom'

const Item = ({ curso }) => {
  const { id, nombre, detalle, imagen, precio } = curso

  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <CardMedia
        component='img'
        alt={nombre}
        image={imagen}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {nombre}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {detalle}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant='h5' color='#0080ff' pl={1}>
            ${precio}
          </Typography>
          <Link to={`/cursos/${id}`}>
            <Button variant='contained' color='primary'>
              Ver Detalles
            </Button>
          </Link>
        </Box>
      </CardActions>
    </Card>
  )
}

export default Item
