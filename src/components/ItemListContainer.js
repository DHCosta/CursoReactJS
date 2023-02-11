import React, { useState, useEffect } from 'react'
import ItemCount from './ItemCount';
import { Typography } from '@mui/material'
import ItemList from './ItemList';

const ItemListContainer = ({greeting}) => {

    const [cursos, setCursos] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        const getCursos = async () => {
            try{
                const res = await fetch('http://localhost:3000/CursoReactJS/data/data.json');
                const data = await res.json();
                setCursos(data.data);
            }
            catch{
                setError(true);
            }
        }

        getCursos();
    }, []);
    

    return (
        <>
            <Typography variant="h5" mt={15} pl={3}>{greeting}</Typography>
            <ItemCount stock={3} initial={1}/>

            {!error ? (
                <>
                    {
                    cursos.length ? (
                        <ItemList cursos={cursos}/>   
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