import React, { useState, useEffect } from 'react'
import ItemCount from './ItemCount';
import { Typography } from '@mui/material'
import ItemList from './ItemList';

const ItemListContainer = ({greeting}) => {

    const [cursos, setCursos] = useState([]);
    const [error, setError] = useState(false);

    const getCursos = async () => {
        try{
            const res = await fetch('https://raw.githubusercontent.com/DHCosta/CursoReactJS/73ba4e656fb27f5f3eb01911dd9c691a8366a69d/src/data/data.json');
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