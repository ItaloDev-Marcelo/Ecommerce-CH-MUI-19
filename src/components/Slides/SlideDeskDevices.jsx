import { useState } from 'react';
import {Stack, Button }from '@mui/material';
import UpSlider from './anotherSlider';
import ImageBank from '../comum-components/imageBank';
import Img from '../comum-components/image';

export default function SlideDeskDevices() {

    const [displayImage, setDisplayImage] = useState(0);
    const {ImageProduct1, ImageProduct2, ImageProduct3, ImageProduct4,thumbnail1 ,thumbnail2, thumbnail3, thumbnail4} = ImageBank
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
             <Img imageUrl={arrowOfSlider[displayImage]} chose={0} />
             </Button>
           </Stack>
           <Stack>
               <ul>
                  <li className={thumbnail === 0 ? 'thumbnail active' : 'thumbnail'} onClick={() => BulletSlide(0)}><Img imageUrl={thumbnail1} name='mini' chose={2} /></li>
                  <li className={thumbnail === 1 ? 'thumbnail active' : 'thumbnail'} onClick={() => BulletSlide(1)}><Img imageUrl={thumbnail2} name='mini' chose={2}  /></li>
                  <li className={thumbnail === 2 ? 'thumbnail active' : 'thumbnail'} onClick={() => BulletSlide(2)}><Img imageUrl={thumbnail3} name='mini' chose={2}  /></li>
                  <li className={thumbnail === 3 ? 'thumbnail active' : 'thumbnail'} onClick={() => BulletSlide(3)}><Img imageUrl={thumbnail4} name='mini' chose={2}   /></li>
               </ul>
           </Stack>
           </Stack>
        </Stack>
        {newSlider && <Stack zIndex='100' className={newSlider ? 'subSlder active': 'subSlder'}   > <Stack id='subSlide-Container'  maxWidth='75%'   position='relative' top='-6em'><UpSlider closeZone={closeZone}  /></Stack> </Stack> } 
        </>
    )
}