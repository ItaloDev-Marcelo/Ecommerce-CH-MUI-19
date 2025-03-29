import React from 'react'
import {Stack } from '@mui/material'
import Badge from '@mui/material/Badge';
import CartIcon from '../../assets/images/icon-cart.svg';

export default function Cart() {
  return (
     <Badge badgeContent={5} color='warning'    sx={{ '& .MuiBadge-badge': { fontSize: '4px',  height: '20px', minWidth: '20px' } }} >
        <Stack width={{xs: '25px', lg: '20px'}}>
        <img src={CartIcon} alt='cart icon' />
        </Stack>
     </Badge>
  )
}
