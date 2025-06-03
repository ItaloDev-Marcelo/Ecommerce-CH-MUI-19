import { useContext} from 'react'
import { Stack,  Typography , Button} from '@mui/material';
import {GlobalContext} from  '../../context/index'
import Img from '../comum-components/image';
import ImageBank from '../comum-components/imageBank';
export default function Information() {

   const {Up, Down, cart, ShowTme} =  useContext(GlobalContext)
   const  { CartIcon ,  minus, plus} = ImageBank
   const style2 = {width: '20px', marginRight: '1em'}


  return (
     <Stack>
         <Stack component='section' id='informationSection' maxWidth={{lg: '700px'}} marginTop={{xs: '1.5em', sm: '37rem', md: '45rem', lg: '4em'}} >
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
               <Button onClick={Down} sx={{minWidth: {lg: '30%'}}} >
                  <Img imageUrl={minus} chose={0}/>  </Button>
                <Button disabled 
                ={{fontWeight: 700, fontSize: '1.1em', position: 'relative', 
                left: '-.5em'}}  > {cart} </Button>
                <Button sx={{position: 'relative', left: {lg: '-1.2em'}}} onClick={Up} >
                  <Img imageUrl={plus} chose={0}/> </Button>
               </Stack>
               <Button className='btn-orange' 
               onClick={ShowTme} id='orange-btn'
                sx={{backgroundColor: 'hsl(26, 100%, 55%)',color: '#000', marginLeft: {lg: '1em'} ,
               fontWeight: 700, width: '100%',padding: '1em 0', height: '50px', marginTop: '1rem', borderRadius: '10px', textTransform: 'lowercase'}}> 
               <Img imageUrl={CartIcon}  chose={1} styles={style2} /> 
                <Typography  fontWeight='700' textTransform='capitalize'>A</Typography>  dd to cart</Button>
            </Stack>
      
         </Stack>
     </Stack>
  )
}
