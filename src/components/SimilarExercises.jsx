import React from 'react'
import { Typography, Stack, Box } from '@mui/material'

import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'


const SimilarExercises = ({ targetMuscleExercises, eqipmentExercises }) => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0, // Sayfanın en üstüne gitmek için 0 değerini kullanıyoruz.
            behavior: 'smooth', // Bu, yavaşça kaydırma efekti ekler.
        })
    };

  return (
    <Box sx={{ mt:{lg:'100px', xs:'0'}}}>
        <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="33px">
            Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> exercises
        </Typography>
        <Stack
            sx={{p:'2', position:'relative'}}
            onClick={() => scrollToTop()}
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
            onClick={() => scrollToTop()}
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
