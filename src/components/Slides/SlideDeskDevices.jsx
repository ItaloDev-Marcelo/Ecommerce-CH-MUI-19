import { useState } from 'react';
import {Stack, Button }from '@mui/material';
import UpSlider from './anotherSlider';
import ImageProduct1 from '../../assets/images/image-product-1.jpg';
import ImageProduct2 from '../../assets/images/image-product-2.jpg';
import ImageProduct3 from '../../assets/images/image-product-3.jpg';
import ImageProduct4 from '../../assets/images/image-product-4.jpg';
import thumbnail1 from '../../assets/images/image-product-1-thumbnail.jpg';
import thumbnail2 from '../../assets/images/image-product-2-thumbnail.jpg';
import thumbnail3 from '../../assets/images/image-product-3-thumbnail.jpg';
import thumbnail4 from '../../assets/images/image-product-4-thumbnail.jpg';
export default function SlideDeskDevices() {

    const [displayImage, setDisplayImage] = useState(0);
    const [thumbnail, setThumbnail] = useState(0)
    const [newSlider, setNewSlider] = useState(false)
    const arrowOfSlider = [ImageProduct1, ImageProduct2, ImageProduct3, ImageProduct4];

   

    const BulletSlide = (Item)  => {
        setDisplayImage(Item)
        setThumbnail(Item)
    }

    const closeZone = () => {
        setNewSlider(prev => !prev)
    }

       

    return (
       <>
        <Stack className='left' sx={{position: 'relative', top: '2.5rem'}}>
           <Stack component='div'>
           <Stack className='display' component='figure' >
             <Button className='display-image' onClick={closeZone} sx={{border:'10px', bakground: 'transparent'}} >
             <img src={arrowOfSlider[displayImage]} alt='' />
             </Button>
           </Stack>
           <Stack>
               <ul>
                  <li className={thumbnail === 0 ? 'thumbnail active' : 'thumbnail'} onClick={() => BulletSlide(0)}><img src={thumbnail1} className='mini'  alt=''/></li>
                  <li className={thumbnail === 1 ? 'thumbnail active' : 'thumbnail'} onClick={() => BulletSlide(1)}><img src={thumbnail2} className='mini'    alt=''/></li>
                  <li className={thumbnail === 2 ? 'thumbnail active' : 'thumbnail'} onClick={() => BulletSlide(2)}><img src={thumbnail3} className='mini'    alt=''/></li>
                  <li className={thumbnail === 3 ? 'thumbnail active' : 'thumbnail'} onClick={() => BulletSlide(3)}><img src={thumbnail4} className='mini'    alt=''/></li>
               </ul>
           </Stack>
           </Stack>
        </Stack>
        {newSlider && <Stack zIndex='100' className={newSlider ? 'subSlder active': 'subSlder'}   > <Stack id='subSlide-Container'  maxWidth='75%'   position='relative' top='-6em'><UpSlider closeZone={closeZone}  /></Stack> </Stack> } 
        </>
    )
}