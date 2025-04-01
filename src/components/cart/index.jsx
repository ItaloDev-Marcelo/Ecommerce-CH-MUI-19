
import {Stack } from '@mui/material'
import Badge from '@mui/material/Badge';
import CartIcon from '../../assets/images/icon-cart.svg';
import React, {useContext} from 'react'
import {GlobalContext} from  '../../context/index';


export default function Cart() {

   const {cart} =  useContext(GlobalContext)

  return (
     <Badge badgeContent={cart} color='warning'    >
        <Stack width={{xs: '25px', lg: '20px'}}>
        <img src={CartIcon} alt='cart icon' />
        </Stack>
     </Badge>
  )
}