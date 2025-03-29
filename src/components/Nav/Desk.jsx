
import { AppBar, IconButton, Button, Stack} from '@mui/material';
import Logo from '../../assets/images/logo.svg';
import NavLeft from '../NavLeft/index'
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

export default function Desk() {




  return (
     
   
        <Box>
             <AppBar className='header' sx={{display:'flex', flexDirection:'row', justifyContent:'space-between', padding:'3em 10em ', alignItems:'center', boxShadow: 'none'}} color='inherit'  >
           <Box sx={{display:'flex', flexDirection:'row'}}>
           <IconButton>
               <img src={Logo} alt='' title='help' />
           </IconButton>
           <Box className='row-links' sx={{display: 'flex', alignItems: 'center', width: '470px',  marginLeft: '4em', justifyContent: 'space-between'}}>
           <Button sx={{textTransform: 'capitalize', color: 'gray'}} >Collections</Button>
           <Button sx={{textTransform: 'capitalize', color: 'gray'}}  >Men</Button>
           <Button sx={{textTransform: 'capitalize', color: 'gray'}} >Women</Button>
           <Button sx={{textTransform: 'capitalize', color: 'gray'}} >About</Button>
           <Button sx={{textTransform: 'capitalize', color: 'gray'}} >Contatc</Button>
           </Box>
           </Box>
           <Box>
            <NavLeft/>
           </Box>

      </AppBar>
        </Box>

  )
}
