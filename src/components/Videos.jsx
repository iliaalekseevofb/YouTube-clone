import React from 'react';
import { Stack, Box, Grid} from '@mui/material';
import { VideoCard, ChannelCard } from './';

const Videos = ({videos, detail}) => {
  if (!videos?.length) return 'Loading...';
  
  return (
    <Grid container spacing={2}>
      {videos.map((item, index) => (
        <Grid xs={12} sm={6} md={detail || 4} xl={detail || 3} item key={index}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Grid>
      ))}
    </Grid>
  )
}

export default Videos