import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function NavBarMenu({items}){

    return (
        <Box sx={{mx: 5}}>
            {items.map((item) => (
                <Button key={item} sx={{ color: '#fff' }}>
                {item}
                </Button>
            ))}
        </Box>   
    )
}