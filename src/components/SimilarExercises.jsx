import React from 'react'
import { Typography, Stack, Box } from '@mui/material'

import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'


const SimilarExercises = ({ targetMuscleExercises, eqipmentExercises }) => {

    const scrollToTop = (e) => {
        if(e.target.parentNode.classList.contains('left-arrow') || e.target.parentNode.classList.contains('right-arrow')) return;
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

  return (
    <Box sx={{ mt:{lg:'100px', xs:'0'}}}>
        <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="33px">
            Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> exercises
        </Typography>
        <Stack
            sx={{p:'2', position:'relative'}}
            onClick={(e) => scrollToTop(e)}
        >
            {targetMuscleExercises.length !== 0 ?
            <HorizontalScrollbar data={targetMuscleExercises} />
            : <Loader />
            }
        </Stack>
        <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }} fontWeight={700} color="#000" mb="33px">
            Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Equipment</span> exercises
        </Typography>
        <Stack
            sx={{p:'2', position:'relative'}}
            onClick={(e) => scrollToTop(e)}
        >
            {eqipmentExercises.length !== 0 ?
            <HorizontalScrollbar data={eqipmentExercises} />
            : <Loader />
            }
        </Stack>
    </Box>
  )
}

export default SimilarExercises
