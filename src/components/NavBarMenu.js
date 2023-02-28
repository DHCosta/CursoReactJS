import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { NavLink } from 'react-router-dom'

export default function NavBarMenu () {
  const navItems = [
    { id: 1, name: 'Todos', route: '/' },
    { id: 2, name: 'Anuales', route: '/cursos/categorias/anuales' },
    { id: 3, name: 'Mensuales', route: '/cursos/categorias/mensuales' },
    { id: 4, name: 'Verano', route: '/cursos/categorias/verano' }
  ]

  const activeStyle = {
    textDecoration: 'underline'
  }

  return (
    <Box sx={{ mx: 5 }}>
      {navItems.map((item) => (
        <NavLink key={item.id} to={item.route} style={({ isActive }) => isActive ? activeStyle : undefined}>
          <Button sx={{ color: '#fff' }}>
            {item.name}
          </Button>
        </NavLink>
      ))}
    </Box>
  )
}
