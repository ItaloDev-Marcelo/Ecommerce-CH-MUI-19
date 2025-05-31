
import { AppBar, IconButton, Button} from '@mui/material';
import NavLeft from '../NavLeft/index'
import Box from '@mui/material/Box';
import ImageBank from '../comum-components/imageBank';
import Img from '../comum-components/image';
export default function Desk() {


  const {Logo} = ImageBank



  return (
     
   
        <Box>
          <AppBar className='header' sx={{display:'flex', flexDirection:'row', justifyContent:'space-between', padding:'3em 10em ', alignItems:'center', boxShadow: 'none'}} color='inherit'  >
           <Box sx={{display:'flex', flexDirection:'row'}}>
           <IconButton>
               <Img imageUrl={Logo} chose={0} />
           </IconButton>
           <Box className='row-links' sx={{display: 'flex', alignItems: 'center', width: '470px',  marginLeft: '4em', justifyContent: 'space-between'}}>
           <Button className='btn-item' sx={{textTransform: 'capitalize', color: 'gray'}} >Collections</Button>
           <Button  className='btn-item' sx={{textTransform: 'capitalize', color: 'gray'}}  >Men</Button>
           <Button  className='btn-item' sx={{textTransform: 'capitalize', color: 'gray'}} >Women</Button>
           <Button  className='btn-item' sx={{textTransform: 'capitalize', color: 'gray'}} >About</Button>
           <Button  className='btn-item' sx={{textTransform: 'capitalize', color: 'gray'}} >Contatc</Button>
           </Box>
           </Box>
           <Box>
            <NavLeft/>
           </Box>

          </AppBar>
        </Box>
        

  )
}
