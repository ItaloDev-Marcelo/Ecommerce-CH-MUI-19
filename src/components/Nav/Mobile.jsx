import { useState } from 'react';
import { AppBar, Button, IconButton  } from '@mui/material';
import NavLeft from '../NavLeft/index'
import ImageBank from '../comum-components/imageBank';
import Img from '../comum-components/image';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
export default function Mobile() {

   const {Logo, Close, Menu} = ImageBank

    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };

    
    const DrawerList = (
        <Box sx={{ width: {xs: 250, sx: 350, sm: 500}, padding: '1em 0'}} role="presentation" >
           <Button color='red' backgroundColor='purple' onClick={toggleDrawer(false)}>
              <Img imageUrl={Close} chose={0} />
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
      <AppBar sx={{display:'flex', flexDirection:'row', justifyContent:'space-between', padding:'1em 0 ', alignItems:'center', boxShadow: 'none'}} color='inherit' >
           <Box>
           <Button color='red' backgroundColor='purple' onClick={toggleDrawer(true)}>
              <Img imageUrl={Menu} chose={0} />
           </Button>
           <IconButton>
               <Img imageUrl={Logo} chose={0} />
           </IconButton>
           </Box>
           <Box sx={{marginRight: '1em'}}>
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
