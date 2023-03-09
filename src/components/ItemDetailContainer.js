import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { Typography, Grid } from '@mui/material'
import { useParams } from 'react-router-dom'
import { db } from './../firebase/firebase'
import { doc, getDoc, collection } from 'firebase/firestore'

const ItemDetailContainer = () => {
  const [item, setItem] = useState({})
  const [error, setError] = useState(false)
  const { id } = useParams()
  // const URL = '/data/data.json'

  useEffect(() => {
    const cursosCollection = collection(db, 'cursos')
    const refDoc = doc(cursosCollection, id)

    const getItem = async () => {
      try {
        const resp = await getDoc(refDoc)
        const item = {
          id: resp.id,
          ...resp.data()
        }
        setItem(item)
      } catch {
        setError(true)
      }
    }

    /* const getItem = async () => {
      try {
        const res = await fetch(URL)
        const data = await res.json()
        setItem(data[id - 1])
      } catch {
        setError(true)
      }
    } */

    getItem()
  }, [])

  return (
    <>
      {!error
        ? (
          <>
            {
              item
                ? (
                  <Grid container spacing={5} mt={15} px={20} py={5}>
                    <ItemDetail item={item} />
                  </Grid>
                  )
                : (
                  <Typography>Cargando detalle del curso...</Typography>
                  )
            }
          </>
          )
        : (
          <Typography>Hubo un problema al carga el detalle del curso</Typography>
          )}
    </>
  )
}

export default ItemDetailContainer
