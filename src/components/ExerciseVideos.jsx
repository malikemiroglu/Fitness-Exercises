import React from 'react';
import { Typography, Box, Stack } from '@mui/material';
import Loader from './Loader';
import VideoItem from './VideoItem';

const ExerciseVideos = ({ exerciseVideos=[], name }) => {
    if (!exerciseVideos.length) return <Loader />;

    return (
        <Box sx={{ marginTop: { lg: '203px', xs: '20px' } }} p="20px" >
            <Typography sx={{ fontSize: { lg: '44px', xs: '25px' } }} fontWeight={700} color="#000" mb="33px">
                Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
            </Typography>
            <Stack sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '0px' } }} justifyContent="flex-start" flexWrap="wrap" alignItems="flex-start">
                {exerciseVideos?.slice(0, 3)?.map((item, index) => (
                   <VideoItem key={index} video={item.video} /> 
                ))}
            </Stack>
        </Box>
    );
};

export default ExerciseVideos;