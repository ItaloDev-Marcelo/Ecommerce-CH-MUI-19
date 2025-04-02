
import {Stack } from '@mui/material'
import Badge from '@mui/material/Badge';
import CartIcon from '../../assets/images/icon-cart.svg';
import React, {useContext, useState} from 'react'
import {GlobalContext} from  '../../context/index';


export default function Cart() {

   const {cart} =  useContext(GlobalContext)
   const [open, setOpen] = useState(false) 
   const Result =  open ? 'block' : 'none';

   const OpenMenu = () => {
       setOpen(prev => !prev)
   }

  return (
    <div>
         <Badge badgeContent={cart} onClick={OpenMenu} color='warning'>
        <Stack width={{xs: '25px', lg: '20px'}}>
        <img src={CartIcon} alt='cart icon' />
        </Stack>
     </Badge>

       <Stack display={Result} position='absolute' top={{xs: '5.5rem', lg: '10rem'}} right={{xs: '.6rem', lg: '15em'}} sx={{width: {xs: '340px', sm: '95%', lg: '325px', borderRadius: '7px'}  ,height:{xs: '200px', 'sm': '300px', lg: '200px'}  , backgroundColor: 'red'}}></Stack>
    </div>
  )
}