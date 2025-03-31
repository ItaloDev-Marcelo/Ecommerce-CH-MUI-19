import React, { useState } from 'react';
import { AppBar, Button, IconButton  } from '@mui/material';
import Logo from '../../assets/images/logo.svg';
import Close from  '../../assets/images/icon-close.svg';
import Menu from  '../../assets/images/icon-menu.svg';
import NavLeft from '../NavLeft/index'


import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
export default function Mobile() {

    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };

    
    const DrawerList = (
        <Box sx={{ width: 250, padding: '1em 0'}} role="presentation" >
           <Button color='red' backgroundColor='purple' onClick={toggleDrawer(false)}>
              <img src={Close} alt='' />
           </Button>
           <ul id='menu-list'>
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
           </ul>
        </Box>
      );
    


  return (
     <>
      <AppBar sx={{display:'flex', flexDirection:'row', justifyContent:'space-between', padding:'1em .5em ', alignItems:'center', boxShadow: 'none'}} color='inherit' >
           <Box>
           <Button color='red' backgroundColor='purple' onClick={toggleDrawer(true)}>
              <img src={Menu} alt='' />
           </Button>
           <IconButton>
               <img src={Logo} alt='' />
           </IconButton>
           </Box>
           <Box>
            <NavLeft/>
           </Box>
      </AppBar>

<div>

<Drawer open={open} onClose={toggleDrawer(false)}>
  {DrawerList}
</Drawer>
</div></>
  )
}
