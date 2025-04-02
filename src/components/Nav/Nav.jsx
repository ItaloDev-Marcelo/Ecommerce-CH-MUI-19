import {Stack, Box} from '@mui/material';
import Mobile from '../Nav/Mobile';
import Desk from '../Nav/Desk'


export default function Navbar() {

  return (
        <Box>
          <Stack display={{xs: 'block', lg: 'none'}}>
             <Mobile/>
          </Stack>
          <Stack display={{xs: 'none', lg: 'block'}}>
             <Desk/>
          </Stack>
        </Box>
  )
}
