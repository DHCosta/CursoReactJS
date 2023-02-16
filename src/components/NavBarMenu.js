import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

export default function NavBarMenu({items}){

    return (
        <Box sx={{mx: 5}}>
            {items.map((item) => (
                <NavLink key={item} to={item.categoria}>
                    <Button sx={{ color: '#fff' }}>
                    {item}
                    </Button>
                </NavLink>
            ))}
        </Box>   
    )
}