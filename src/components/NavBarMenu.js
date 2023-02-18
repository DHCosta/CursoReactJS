import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

export default function NavBarMenu(){

    const navItems = [
        { id: 1, name: "Todos", route:'/' },
        { id: 2, name: "Anual", route:'/categorias/anual' },
        { id: 3, name: "Mensual", route:'/categorias/mensual'},
        { id: 4, name: "Verano", route:'/categorias/verano'}
      ];

    return (
        <Box sx={{mx: 5}}>
            {navItems.map((item) => (
                <NavLink key={item.id} to={item.route}>
                    <Button sx={{ color: '#fff' }}>
                        {item.name}
                    </Button>
                </NavLink>
            ))}
        </Box>   
    )
}