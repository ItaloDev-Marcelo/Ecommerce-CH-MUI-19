import React from 'react'
import { Stack,  Typography , Button} from '@mui/material';
import Cart from '../../assets/images/icon-cart.svg';

export default function Information() {
  return (
     <Stack>
         <Stack component='section'>
            <Typography component='h1'>Sneaker Company</Typography>
            <Typography component='h2'>Fall Limited Edition Sneakers</Typography>
            <Typography component='p'>These low-profile sneakers are your perfect casual wear companion. Featuring a 
            durable rubber outer sole, they’ll withstand everything the weather can offer.</Typography>
            <Stack className='information-area' component='div'>
            <Typography component='p'>
            $125.00  <span className='black'>50%</span>
            </Typography> 
            <Typography component='p' sx={{color: 'gray'}}>$250.00</Typography>
            </Stack>
            <Stack sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1em 0'}}>
               <Stack component='div' sx={{display: 'flex', flexDirection:'row', justifyContent: 'space-between', padding: '.5em', background: 'lightGray', borderRadius: '10px', width: '99%'}}>
               <Button>-</Button>
                <Button disabled>0</Button>
                <Button>+</Button>
               </Stack>
               <Button sx={{backgroundColor: 'orange', width: '100%',padding: '1em 0', height: '50px', marginTop: '1rem', borderRadius: '10px'}}> <img src={Cart} alt='cart-icon' />   Add to Cart</Button>
            </Stack>
         </Stack>
     </Stack>
  )
}
