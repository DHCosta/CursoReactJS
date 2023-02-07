import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export default function CartWidget(){

  return(
    <>
      <IconButton aria-label="cart">
        <Badge badgeContent={6} color="secondary">
          <ShoppingCartOutlinedIcon sx={{ color: 'white', fontSize: 30}}/>
        </Badge>
      </IconButton>
    </>
  )
}
