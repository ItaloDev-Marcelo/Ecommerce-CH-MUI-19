import {Stack, Button} from '@mui/material';
import { useState } from 'react';
import Data from './Data/index';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Information from '../information/index'

export default function SliderForMobileDevices() {
    
    const [currentSliderItem, setCurrrentSliderItem] = useState(0) 
    const slideLength = Data.length;

    const PreviousItem = ()  => {
         setCurrrentSliderItem(currentSliderItem === 0 ? slideLength - 1 : currentSliderItem - 1) 
    }

    const NextItem = ()  => {
        setCurrrentSliderItem(currentSliderItem === slideLength - 1 ? 0 : currentSliderItem + 1) 
   }


   

    return (
        <Stack>
             <Stack component='figure'>
            {
              Data.map((slideImg, index) => {
                 return (
                     index === currentSliderItem && <div className='slide'><img key={index} src={slideImg.img} alt=''/></div>
                 )
              } )
            }
            <Stack className='btn-itens'>
            <Button className='btn-left' onClick={NextItem}>
                <KeyboardArrowRightIcon fontSize='large' color='#000' />
            </Button>
            <Button className='btn-right'  onClick={PreviousItem }>
                <KeyboardArrowLeftIcon  fontSize='large' color='#000' />
            </Button>
            </Stack>
             </Stack>
        <Stack sx={{position: 'relative', top: '17rem', padding: '2em'}}>
        <Information/>
        </Stack>
        </Stack>
    )
} 