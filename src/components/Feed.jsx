import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Sidebar, Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => setVideos(data.items))
  }, [selectedCategory]);

  return (
    <Stack sx={{flexDirection: {xs: 'column', md: 'row'}}}>
      <Box sx={{height: {xs: 'auto', md: '90vh'}, borderRight: '1px solid #3d3d3d', px: {xs: 0, md: 2}}}>
        <Sidebar 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className='copyright'
          variant='body2'
          sx={{mt: 1, color: '#9e9e9e'}}
        >
          Copyright 2022 YouTube-clone
        </Typography>
      </Box>
      <Box 
        p={2}
        sx={{overflowY: 'auto', height: '84vh', flex: 2}}
      >
        <Typography
          variant='h4'
          fontWeight='bold'
          mb={2}
          sx={{color: 'white'}}
        >
          {selectedCategory}
          <span style={{marginLeft: '10px', color: '#f31503'}}>
            videos
          </span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed