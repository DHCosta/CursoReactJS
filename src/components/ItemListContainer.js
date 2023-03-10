import React, { useState, useEffect } from 'react'
import { Typography, Grid } from '@mui/material'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { db } from './../firebase/firebase'
import { getDocs, collection, query } from 'firebase/firestore'

const ItemListContainer = ({ greeting }) => {
  const [cursos, setCursos] = useState([])
  const [error, setError] = useState(false)
  const { name } = useParams()
  // const URL = name ? `http://localhost:3000/data/data.json/categorias/${name}` : `http://localhost:3000/data/data.json`;
  // const URL = '/data/data.json'

  useEffect(() => {
    const cursosCollection = collection(db, 'cursos')
    const consulta = query(cursosCollection)

    function esLaCategoria (elemento) {
      return elemento.categoria === name
    }

    getDocs(consulta).then(
      (data) => {
        const list = data.docs.map(cursos => {
          return {
            ...cursos.data(),
            id: cursos.id
          }
        })
        name ? setCursos(list.filter(esLaCategoria)) : setCursos(list)
      }
    )
      .catch(() => { setError(true) })

    // Comento la invocacion con fetch
    /* function esLaCategoria (elemento) {
      return elemento.categoria === name
    }

    const getCursos = async () => {
      try {
        const res = await fetch(URL)
        const data = await res.json()

        name ? setCursos(data.filter(esLaCategoria)) : setCursos(data)
      } catch {
        setError(true)
      }
    }

    getCursos() */
  }, [name])

  return (
    <>
      <Typography variant='h4' mt={20} pl={3} display='flex' justifyContent='center'>{greeting}</Typography>

      {!error
        ? (
          <>
            {
              cursos.length
                ? (
                  <Grid container spacing={5} justifyContent='center' px={20} py={5}>
                    <ItemList cursos={cursos} />
                  </Grid>
                  )
                : (
                  <Typography>Cargando cursos...</Typography>
                  )
            }
          </>
          )
        : (
          <Typography>Hubo un problema al cargar los cursos</Typography>
          )}
    </>
  )
}

export default ItemListContainer
