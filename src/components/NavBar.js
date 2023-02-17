import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CartWidget from './CartWidget';
import NavBarMenu from './NavBarMenu';
import { Link } from 'react-router-dom';

export default function NavBar(){
    
    return(
        <AppBar component="nav">
            <Toolbar sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between'}}>
                <Link to={'/'}>
                    <Typography variant="h4">
                        NOESARTE
                    </Typography>
                </Link>
                <Box sx={{display: 'flex', alignItems: 'center', mr: '1rem'}}>
                    <NavBarMenu/>
                    <Link to={'/cart'}>
                        <CartWidget/>
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
