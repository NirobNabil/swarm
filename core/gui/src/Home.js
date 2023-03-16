import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid2 from '@mui/material/Unstable_Grid2';
import { Link } from 'react-router-dom';

import Background from './static/home_background.svg';


const ButtonStyle = {
  fontSize: '1.5rem',
  color: '#FEFEFE',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  zIndex: 100,
  fontSize: '2.5rem',
  width: '100%',
  transition: '.5s',
  '&:hover': {
    backgroundColor: 'rgba(1,1,1,.5)'
  }
}

function Home() {
  return (
    <div className="App">
      <img style={{
        position: 'fixed',
        width: '100vw',
        top: '0',
        left: '0'
      }} src={Background} className="App-logo" alt="logo" />

      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alighItems: 'center',
        height: '100vh',
        flexGrow: '0'
      }} >
        <Box sx={ButtonStyle} > <Link style={{ textDecoration: 'none', color: 'white' }} to="/customer"> Customer </Link> </Box>
        <Box sx={ButtonStyle} > <Link style={{ textDecoration: 'none', color: 'white' }} to="/admin">Admin</Link> </Box>
      </Box>

    </div>
  );
}

export default Home;
