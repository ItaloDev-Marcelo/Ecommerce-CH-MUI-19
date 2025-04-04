
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
         <Badge badgeContent={show ? cart : 0} onClick={OpenMenu} color='warning' >
        <Stack width={{xs: '25px', lg: '20px'}}>
        <img src={CartIcon} alt='cart icon' />
        </Stack>
     </Badge>

       <Stack display={Result} justifyContent='center' position='absolute' top={'8em'} right={{xs: '.6rem', lg: '15em'}} sx={{width: {xs: '340px', sm: '95%', lg: '325px', borderRadius: '7px'}  ,height:{xs: '200px', 'sm': '300px', lg: '200px'}  , backgroundColor: '#fff', boxShadow: '1px 1px 3px #000'}}>
            <Typography component='h5' padding='1em' fontWeight='bold'>Cart</Typography>
            <hr/>
            {
              show ?  <Stack id='container' display='flex' flexDirection='column'>
              <Stack display='flex' flexDirection='row' marginTop={{ lg: '1em'}} padding='1em' justifyContent='space-between' alignContent='center'>
                <Stack id='block-miniatura' marginRight='1em'>
                   <img src={Mini} style={{width: '40px', borderRadius: '4px'}} alt='' />
                </Stack>
                <Stack id='information-cart' >
                  <Typography component='p'  width='210px'>Fall Limited Edition Sneakers $125.00  x{cart} <strong> ${price.toFixed(2) } </strong> </Typography>
                </Stack>
                <Stack id='lixeira' sx={{position: 'relative', right: '1em'}} alignSelf='center'>
                   <Button onClick={Delete}><img src={Lixo} alt='' /></Button>
                </Stack>
             </Stack>
             <Button className='btn-orange' sx={{backgroundColor: 'hsl(26, 100%, 55%)',color: '#000', margin: '0 1em', height:'40px', textTransform: 'capitalize', fontWeight: 'bold', borderRadius: '7px'}}>Checkout</Button>
              </Stack> : <Typography component='h5' marginTop='4em' display='flex' justifyContent='center'  textAlign='center' > <strong>Your Cart is empty.</strong> </Typography>
            }            
       </Stack>
    </div>
  )
}