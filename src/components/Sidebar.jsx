import React from 'react';
import { Box } from '@mui/material';
import { categories } from '../utils/constants';

const Sidebar = ({selectedCategory, setSelectedCategory}) => (
  <Box
    display='flex'
    sx={{overflowY: 'auto', height: {xs: 'auto', md: '95%'}, flexDirection: {xs: 'row', md: 'column'}}}
  >
    {categories.map((item) => (
      <button 
        onClick={() => setSelectedCategory(item.name)}
        key={item.name} 
        className='category-btn'
        style={{background: item.name === selectedCategory && '#fc1503', color: 'white'}}
      >
        <span style={{color: item.name === selectedCategory ? 'white' : 'red', marginRight: '15px'}}>{item.icon}</span>
        <span style={{opacity: item.name === selectedCategory ? '1' : '0.8'}}>{item.name}</span>
      </button>
    ))}
  </Box>
)

export default Sidebar