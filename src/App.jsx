import './App.css';
import Nav from './components/Nav/Nav'
import { Stack } from '@mui/material';
import SlideMobileAndTablet from './components/Slides/SlideMobileAndTablet'
import SlideDeskDevices from './components/Slides/SlideDeskDevices';

import Information from './components/cart/information'


export default function App() {

  return (
      <Stack display='flex' flexDirection={{ xs: 'column', lg: 'row' }} padding={{ xs: '0', lg: '0 13em' }}>
        <Nav />
        <Stack display={{ xs: 'block', lg: 'none' }}>
          <SlideMobileAndTablet />
        </Stack>
        <Stack display={{ xs: 'none', lg: 'block' }}>
          <SlideDeskDevices />
        </Stack>
        <Stack sx={{ position: 'relative', top: { xs: '23rem', lg: '0' }, padding: '2em' }}>
          <Information />
        </Stack>
      </Stack>
  )
}


