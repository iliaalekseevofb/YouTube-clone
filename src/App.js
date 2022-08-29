import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { Navbar } from './components';
import { Feed, VideoDetail, ChannelDetail, SearchFeed } from './pages';

const App = () => (
  <Box sx={{backgroundColor: '#000'}}>
    <Navbar />
    <Routes>
      <Route exact path='/' element={<Feed />} />
      <Route path='/video/:id' element={<VideoDetail />} />
      <Route path='/channel/:id' element={<ChannelDetail />} />
      <Route path='/search/:searchTerm' element={<SearchFeed />} />
    </Routes>
  </Box>
)

export default App