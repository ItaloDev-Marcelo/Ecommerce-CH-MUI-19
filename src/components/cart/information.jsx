import React, { useState , useContext} from 'react'
import { Stack,  Typography , Button} from '@mui/material';
import {GlobalContext} from  '../../context/index'
import Cart from '../../assets/images/icon-cart.svg';
import minus from '../../assets/images/icon-minus.svg';
import plus from  '../../assets/images/icon-plus.svg';

export default function Information() {

   const {Up, Down, cart, ShowTme} =  useContext(GlobalContext)



  return (
     <Stack>
         <Stack component='section' id='informationSection' maxWidth={{lg: '700px'}} marginTop={{xs: '4em', sm: '37rem', md: '45rem', lg: '4em'}} >
            <Typography component='h1' fontSize={{xs: '1em'}} sx={{textTransform: 'uppercase', margin: '1em 0'}}>Sneaker Company</Typography>
            <Typography component='h2' lineHeight='37px' sx={{fontWeight: 700}}>Fall Limited Edition Sneakers</Typography>
            <Typography component='p' lineHeight='25px' paddingBottom='1em'>These low-profile sneakers are your perfect casual wear companion. Featuring a 
            durable rubber outer sole, they’ll withstand everything the weather can offer.</Typography>
            <Stack className='information-area' component='div' sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <Typography component='p' margin='0 0 .4em 0'>
            <span id='price'>$125.00</span>  <span id='black'>50%</span>
            </Typography> 
            <Typography component='p' sx={{color: 'gray', fontWeight:700, fontSize: '1.2em', textDecoration: 'line-through'}}>$250.00</Typography>
            </Stack>
            <Stack sx={{display: 'flex', flexDirection: {xs: 'column', lg: 'row'}, alignItems: 'center', padding: '1em 0'}}>
               <Stack component='div' sx={{display: 'flex', flexDirection:'row', justifyContent: 'space-between', padding: '.5em', marginTop: {lg: '1em'}, background: ' hsl(223, 64%, 98%)', borderRadius: '10px', width: {xs: '99%', lg: '37%'}}}>
               <Button onClick={Down} ><img src={minus} alt='minus'/>  </Button>
                <Button disabled sx={{fontWeight: 700, fontSize: '1.1em', position: 'relative', left: '-.5em'}}  > {cart} </Button>
                <Button sx={{position: 'relative', left: {lg: '-1.2em'}}} onClick={Up} ><img src={plus} alt='minus'/> </Button>
               </Stack>
               <Button className='btn-orange' onClick={ShowTme} id='orange-btn' sx={{backgroundColor: 'hsl(26, 100%, 55%)',color: '#000', marginLeft: {lg: '1em'} ,
               fontWeight: 700, textTransform: 'lowercase', width: '100%',padding: '1em 0', height: '50px', marginTop: '1rem', borderRadius: '10px',textTransform: 'lowercase'}}> <img src={Cart} alt='cart-icon' id='cart-icon' style={{width: '20px', marginRight: '1em'}} />  <Typography  fontWeight='700' textTransform='capitalize'>A</Typography>  dd to cart</Button>
            </Stack>
      
         </Stack>
     </Stack>
  )
}
