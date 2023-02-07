import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CartWidget from './CartWidget';
import NavBarMenu from './NavBarMenu';

export default function NavBar(){
    
    const navItems = ['Home', 'About', 'Contact'];

    return(
        <AppBar component="nav">
            <Toolbar sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between'}}>
                <Typography variant="h4">
                    NOESARTE
                </Typography>
                <Box sx={{display: 'flex', alignItems: 'center', mr: '1rem'}}>
                    <NavBarMenu items={navItems}/>
                    <CartWidget/>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
