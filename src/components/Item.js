import React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/system'
import { Link } from 'react-router-dom'
import { storage } from './../firebase/firebase'
import { ref } from 'firebase/storage'

const Item = ({ curso }) => {
  const { id, nombre, detalleAb, imagen, precio } = curso
  const pathReference = ref(storage)

  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <CardMedia
        component='img'
        alt={nombre}
        image={'https://firebasestorage.googleapis.com/v0/b/' + pathReference.bucket + '/o/' + imagen + '?alt=media&token=dcdca079-6cd1-479f-ae8e-11e6e1af5275'}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {nombre}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {detalleAb}
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
