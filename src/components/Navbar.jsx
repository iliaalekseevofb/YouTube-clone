import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { logo } from '../utils/constants';
import SearchBar from './SearchBar';

const Navbar = () => (
  <Stack
    direction='row'
    alignItems='center'
    justifyContent='center'
    sx={{
      position: 'sticky', 
      top: 0,
      width: '100%',
      height: '10vh',
      zIndex: 10,
      backgroundColor: '#000'
    }}
  >
    <Box 
      display='flex' 
      justifyContent='space-between' 
      alignItems='center' 
      sx={{width: '100%', height: '100%', px: 2}}
    >
      <Link to='/' style={{display: 'flex', alignItems: 'center'}}>
        <img src={logo} alt='logo' height={45} />
        <Typography 
          variant='h5' 
          color='white' 
          sx={{paddingLeft: 1, fontWeight: 700, display: {xs: 'none', md: 'block'}}}
        >
          My YouTube clone
        </Typography>
      </Link>
      <SearchBar />
    </Box>
  </Stack>
)

export default Navbar