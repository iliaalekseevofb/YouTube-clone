import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Sidebar from './Sidebar';

const Feed = () => {
  return (
    <Stack sx={{flexDirection: {xs: 'column', md: 'row'}}}>
      <Box sx={{height: {xs: 'auto', md: '92vh'}, borderRight: '1px solid #3d3d3d', px: {xs: 0, md: 2}}}>
        <Sidebar />
        <Typography
          className='copyright'
          variant='body2'
          sx={{mt: 1.5, color: '#fff'}}
        >
          Copyright 2022 YouTube-clone
        </Typography>
      </Box>
    </Stack>
  )
}

export default Feed