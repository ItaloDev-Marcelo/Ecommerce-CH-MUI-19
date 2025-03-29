import React from 'react'
import Cart from '../cart/index'
import { Stack, Avatar  } from '@mui/material';

import ProfilePhoto from '../../assets/images/image-avatar.png'

export default function NavLeft() {
  return (
     <Stack display='flex' flexDirection='row' justifyContent='space-between' alignItems='center' width={{xs: '85px', lg: '100px'}} >
         <Cart/>
         <Avatar   alt='profile image' src={ProfilePhoto}  sx={{ width: {xs:   30, lg: 40}, height: {xs: 30, lg: 40}}} />
     </Stack>
  )
}
