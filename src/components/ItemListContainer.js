import React, { useState, useEffect } from 'react'
import { Typography, Grid } from '@mui/material'
import ItemList from './ItemList';

const ItemListContainer = ({greeting}) => {

    const [cursos, setCursos] = useState([]);
    const [error, setError] = useState(false);

    const getCursos = async () => {
        try{
            const res = await fetch('http://localhost:3000/data/data.json');
            const data = await res.json();
            setCursos(data);
        }
        catch{
            setError(true);
        }
    }

    useEffect(() => {
        getCursos();
    }, []);
    

    return (
        <>
            <Typography variant="h5" mt={15} pl={3} display={'flex'} justifyContent={'center'}>{greeting}</Typography>

            {!error ? (
                <>
                    {
                    cursos.length ? (
                        <Grid container spacing={5} px={20} py={5}>
                            <ItemList cursos={cursos}/>   
                        </Grid>
                    ) : (
                        <Typography>Cargando cursos...</Typography>    
                    )}
                </>
            ) : (
                <Typography>Hubo un problema al cargar los cursos</Typography>    
            )}
        </>
    );
};

export default ItemListContainer