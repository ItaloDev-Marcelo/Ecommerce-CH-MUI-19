import './App.css';
import Mobile from './components/Nav/Mobile';
import Desk from './components/Nav/Desk';
import { Stack } from '@mui/material';
import SlideMobileAndTablet from './components/Slides/SlideMobileAndTablet'
import SlideDeskDevices from './components/Slides/SlideDeskDevices';

import Information from './components/information/index'

export default function App() {

  return (
    <>
      <Stack display={{ xs: 'block', lg: 'none' }}>
        <Mobile />
        <SlideMobileAndTablet />
      </Stack>

      <Stack display={{ xs: 'none', lg: 'block' }}>
        <Desk />
        <SlideDeskDevices />
      </Stack>




    </>
  )
}


