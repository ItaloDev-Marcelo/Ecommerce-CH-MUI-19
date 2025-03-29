
import { useState } from 'react';
import {Stack, Button} from '@mui/material';
import Data from './Data/index';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import ImageProduct1 from '../../assets/images/image-product-1.jpg';
import ImageProduct2 from '../../assets/images/image-product-2.jpg';
import ImageProduct3 from '../../assets/images/image-product-3.jpg';
import ImageProduct4 from '../../assets/images/image-product-4.jpg';

import thumbnail1 from '../../assets/images/image-product-1-thumbnail.jpg';
import thumbnail2 from '../../assets/images/image-product-2-thumbnail.jpg';
import thumbnail3 from '../../assets/images/image-product-3-thumbnail.jpg';
import thumbnail4 from '../../assets/images/image-product-4-thumbnail.jpg';


export default function UpSlider({closeZone}) {
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
              <Stack className='display' component='figure' >
                 <img  src={arrowOfSlider[slide]} alt=''/>
                 <Stack className='btn-items' sx={{position: 'relative', left: '-1%', top: '-40rem', zIndex: '1000'}}>
                 <Button className='btn-left' onClick={prevSlider}><KeyboardArrowLeftIcon/></Button>
                 <Button className='btn-right' onClick={nextSlider}><KeyboardArrowRightIcon/></Button>
                
                 </Stack>
               </Stack>
               
               <Stack className='row'>
                   <ul>
                      <li className={thumbnail === 0 ? 'thumbnail active' : 'thumbnail'} onClick={()  => bullet(0)}><img src={thumbnail1} className='mini' alt=''/></li>
                      <li className={thumbnail === 1 ? 'thumbnail active' : 'thumbnail'} onClick={()  => bullet(1)}><img src={thumbnail2} className='mini' alt=''/></li>
                      <li className={thumbnail === 2 ? 'thumbnail active' : 'thumbnail'} onClick={()  => bullet(2)}><img src={thumbnail3} className='mini' alt=''/></li>
                      <li className={thumbnail === 3 ? 'thumbnail active' : 'thumbnail'} onClick={()  => bullet(3)}><img src={thumbnail4} className='mini' alt=''/></li>
                   </ul>
                   <Button onClick={closeZone}>X</Button>
               </Stack>
           </Stack>
       </Stack>
    )
}



