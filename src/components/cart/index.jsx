
import {Stack, Typography, Button} from '@mui/material'
import Badge from '@mui/material/Badge';
import CartIcon from '../../assets/images/icon-cart.svg';
import React, {useContext, useState} from 'react'
import Lixo from '../../assets/images/icon-delete.svg' ;
import Mini from '../../assets/images/image-product-1-thumbnail.jpg' ;
import {GlobalContext} from  '../../context/index';


export default function Cart() {

   const {cart, Delete, show } =  useContext(GlobalContext)
   const [open, setOpen] = useState(false) 
   const Result =  open ? 'block' : 'none';
   let price = 125.00 * cart;

   const OpenMenu = () => {
       setOpen(prev => !prev)
   }

  return (
    <div>
         <Badge badgeContent={show ? cart : 0} onClick={OpenMenu} color='warning'>
        <Stack width={{xs: '25px', lg: '20px'}}>
        <img src={CartIcon} alt='cart icon' />
        </Stack>
     </Badge>

       <Stack display={Result} justifyContent='center' position='absolute' top={{xs: '5.5rem', lg: '10rem'}} right={{xs: '.6rem', lg: '15em'}} sx={{width: {xs: '340px', sm: '95%', lg: '325px', borderRadius: '7px'}  ,height:{xs: '200px', 'sm': '300px', lg: '200px'}  , backgroundColor: '#fff', boxShadow: '1px 1px 3px #000'}}>
            <Typography component='h5' padding='1em'>Cart</Typography>
            <hr/>
            {
              cart > 0 ?    <Stack id='container' display='flex' flexDirection='column'>
              <Stack display='flex' flexDirection='row' alignContent='center'>
                <Stack id='block-miniatura'>
                   <img src={Mini} alt='' />
                </Stack>
                <Stack id='information-cart'>
                  <Typography component='p'>Fall Limited Edition Sneakers $125.00 {cart} <strong> {price} </strong> </Typography>
                </Stack>
                <Stack id='lixeira'>
                   <Button onClick={Delete}><img src={Lixo} alt='' /></Button>
                </Stack>
             </Stack>
             <Button>Checkout</Button>
              </Stack> : <Typography component='h5' marginTop='4em' display='flex' justifyContent='center'  textAlign='center' >Your Cart is empty.</Typography>
            }            
       </Stack>
    </div>
  )
}