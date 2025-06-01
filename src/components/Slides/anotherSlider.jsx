
import { useState } from 'react';
import {Stack, Button} from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ImageBank from '../comum-components/imageBank';
import Img from '../comum-components/image';


export default function UpSlider({closeZone}) {
     const {ImageProduct1, ImageProduct2, ImageProduct3, 
      ImageProduct4,thumbnail1 ,thumbnail2, thumbnail3, thumbnail4, Close} = ImageBank
      const style3 = {
         borderRadius:'10px'
      }
      const arrowOfSlider = [ImageProduct1, ImageProduct2, ImageProduct3, ImageProduct4];
      const [slide, setSlide] = useState(0)
      const [thumbnail, setThumbnail] = useState(0)

      const prevSlider = () => {
           setSlide(prev => prev <= 0 ? 0 : prev -= 1) 
      }

      const nextSlider = () => {
         setSlide(prev => prev === 3 ? 3 : prev += 1) 
      }


      const bullet = (item) => {
        setSlide(item) 
        setThumbnail(item) 
      }



      return (
       <Stack  >
           <Stack className='slide-area'>     
              <Stack  position='relative' top='-2em' width='105%' display='flex' alignItems='flex-end'><Button className='close' onClick={closeZone}><img src={Close} alt=''/> </Button></Stack>
              <Stack className='display' position='relative'  top='-1em' component='figure' >
                 <Img  imageUrl={arrowOfSlider[slide]} chose={1} styles={style3}  alt=''/>
                 <Stack className='bt' sx={{position: 'absolute', left: '1%', top: '13rem', zIndex: '1000', display: 'inline-block'}}>
                 <Button className='btn-arrow'  sx={{backgroundColor: '#fff', position: 'absolute', left: '-2rem',  borderRadius: '50%',
        width: 50,
        height: 50,
        minWidth: 0,
        padding: 0}} onClick={prevSlider}><KeyboardArrowLeftIcon/></Button>
                 <Button className='btn-arrow'  sx={{backgroundColor: '#fff', position: 'absolute', left: '22.7rem',  borderRadius: '50%',
        width: 50,
        height: 50,
        minWidth: 0,
        padding: 0,}}  onClick={nextSlider}><KeyboardArrowRightIcon   /></Button>
                 </Stack>
               </Stack>
               
               <Stack className='row another-row'>
               
                   <ul className='another-slider'>
                      <li className={thumbnail === 0 ? 'thumbnail active' : 'thumbnail'} onClick={()  => bullet(0)}><Img imageUrl={thumbnail1} name='mini' chose={2} /></li>
                      <li className={thumbnail === 1 ? 'thumbnail active' : 'thumbnail'} onClick={()  => bullet(1)}><Img imageUrl={thumbnail2} name='mini' chose={2} /></li>
                      <li className={thumbnail === 2 ? 'thumbnail active' : 'thumbnail'} onClick={()  => bullet(2)}><Img imageUrl={thumbnail3} name='mini' chose={2} /></li>
                      <li className={thumbnail === 3 ? 'thumbnail active' : 'thumbnail'} onClick={()  => bullet(3)}><Img imageUrl={thumbnail4} name='mini' chose={2} /></li>
                   </ul>
                  
               </Stack>
           </Stack>
       </Stack>
    )
}



