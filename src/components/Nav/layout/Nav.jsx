import {Stack, Box} from '@mui/material';
import Mobile from '../Mobile';
import Desk from '../Desk'


export default function NavLayout() {

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
