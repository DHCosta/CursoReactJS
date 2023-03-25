import React, { useContext, useState } from 'react'
import { Typography, TextField, Box, Button, Grid } from '@mui/material'
import SellIcon from '@mui/icons-material/Sell'
import { db } from '../firebase/firebase'
import { collection, addDoc, serverTimestamp, doc, updateDoc, getDoc } from 'firebase/firestore'
import { CartContext } from './context/CartContext'
import CustomAlert from './CustomAlert'

const FormBuy = () => {
  const { cart, quantityC, total } = useContext(CartContext)
  const [idCompra, setIdCompra] = useState('')

  const [error, setError] = useState('')

  const [showAlertOK, setShowAlertOK] = useState(false)
  const [showAlertER, setShowAlertER] = useState(false)
  const [showAlertW, setShowAlertW] = useState(false)
  const [mgsW, setmgsW] = useState(false)

  const [nombre, setNombre] = useState('')
  const [errorNombre, setErrorNombre] = useState({
    error: false,
    message: ''
  })
  const [apellido, setApellido] = useState('')
  const [errorApellido, setErrorApellido] = useState({
    error: false,
    message: ''
  })

  const [email, setEmail] = useState('')
  const [errorEmail, setErrorEmail] = useState({
    error: false,
    message: ''
  })

  const handleNombreValueChange = (event) => {
    setNombre(event.target.value)
    validarNombre(event.target.value)
  }
  const handleApellidoValueChange = (event) => {
    setApellido(event.target.value)
    validarApellido(event.target.value)
  }
  const handleEmailValueChange = (event) => {
    setEmail(event.target.value)
    validarEmail(event.target.value)
  }

  const nameValidation = (nombre) => {
    const regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
    return regex.test(nombre)
  }

  const emailValidation = (email) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    return regex.test(email)
  }

  const validarNombre = (nombre) => {
    if (!nameValidation(nombre)) {
      setErrorNombre({
        error: true,
        message: 'El nombre no es valido'
      })
      return
    }
    setErrorNombre({
      error: false,
      message: ''
    })
  }
  const validarApellido = (apellido) => {
    if (!nameValidation(apellido)) {
      setErrorApellido({
        error: true,
        message: 'El apellido no es valido'
      })
      return
    }
    setErrorApellido({
      error: false,
      message: ''
    })
  }
  const validarEmail = (email) => {
    if (!emailValidation(email)) {
      setErrorEmail({
        error: true,
        message: 'El email no es valido'
      })
      return
    }
    setErrorEmail({
      error: false,
      message: ''
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()

    validarNombre(nombre)
    validarApellido(apellido)
    validarEmail(email)

    setShowAlertOK(false)
    setShowAlertER(false)
    setShowAlertW(false)

    if (quantityC < 1) {
      setmgsW('El carrito de compra se encuentra vacio')
      setShowAlertW(true)
    } else if (!errorNombre.error && !errorApellido.error && !errorEmail.error) {
      const alumno = {
        nombre,
        apellido,
        email
      }

      const inscripCollection = collection(db, 'inscripciones')
      addDoc(
        inscripCollection,
        {
          alumno,
          items: cart,
          total,
          time: serverTimestamp()
        }
      )
        .then(result => {
          actualizarStock()
          setIdCompra(result.id)
          setShowAlertOK(true)
        })
        .catch(err => {
          setError(err)
          setShowAlertER(true)
        })
    }
  }

  const getItem = async (refDoc) => {
    try {
      const resp = await getDoc(refDoc)
      const item = {
        id: resp.id,
        ...resp.data()
      }
      return item
    } catch {
      setError('Error al recuperar el curso')
      setShowAlertER(true)
    }
  }

  const actualizarStock = () => {
    const cursosCollection = collection(db, 'cursos')

    cart.forEach(async curso => {
      const refDoc = doc(cursosCollection, curso.id)
      const item = await getItem(refDoc)
      const cupoNuevo = (item.cupo - curso.quantity)
      const docReference = doc(db, 'cursos', curso.id)
      updateDoc(docReference, { cupo: cupoNuevo })
    })
  }

  return (
    <Grid container spacing={2} mt={2} pl={25} component='form' onSubmit={onSubmit}>
      <Grid item xs={12}>
        <Typography variant='h6' mt={20} pb={3}>
          Por favor, complete el siguiente formulario con sus datos
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Box
          maxWidth={612}
          noValidate
          autoComplete='off'
          display='flex'
          gap={1}
        >
          <TextField
            label='Nombre'
            variant='outlined'
            id='nombre'
            fullWidth
            error={errorNombre.error}
            helperText={errorNombre.message}
            onChange={handleNombreValueChange}
            value={nombre}

          />
          <TextField
            label='Apellido'
            variant='outlined'
            id='apellido'
            fullWidth
            error={errorApellido.error}
            helperText={errorApellido.message}
            onChange={handleApellidoValueChange}
            value={apellido}
          />
        </Box>
      </Grid>
      <Grid item xs={6}>
        <TextField
          label='Email'
          variant='outlined'
          id='email'
          fullWidth
          error={errorEmail.error}
          helperText={errorEmail.message}
          onChange={handleEmailValueChange}
          value={email}
        />
      </Grid>
      <Grid item xs={12}>
        <Button type='submit' variant='contained' endIcon={<SellIcon />}>
          Confirmar
        </Button>
        {
          showAlertOK && (<CustomAlert tipo='success' titulo='Inscripcion Exitosa' mensaje={`Su inscripcion se registro con el identificador — ${idCompra}`} />)
        }
        {
          showAlertER && (<CustomAlert tipo='error' titulo='Ocurrio un error durante su inscripcion' mensaje={error} />)
        }
        {
          showAlertW && (<CustomAlert tipo='warning' titulo={mgsW} />)
        }
      </Grid>
    </Grid>
  )
}

export default FormBuy
