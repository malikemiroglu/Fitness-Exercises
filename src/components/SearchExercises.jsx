import React, { useEffect, useState } from 'react'
import { Box, Stack, Typography, Button, TextField } from '@mui/material'

import { exerciseOptions, fetchData } from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'


function SearchExercises({ setExercises, bodyPart, setBodyPart}) {
  const [search, setSearch] = useState('')
  const [bodyParts, setBodyParts] = useState([])

  useEffect(() => {
    const fetchExercisesData = async () => {
      try {
        const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
        setBodyParts(['all', ...bodyPartsData]);
      } catch (error) {
        console.error('Fetch işlemi sirasinda bir hata olustu:', error);
      }
    }

    fetchExercisesData()
  }, [])


  const handleSearch = async () => {
    if(search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=1000', exerciseOptions);
     
      const filteredExercises = exercisesData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search) 
        || exercise.target.toLowerCase().includes(search) 
        || exercise.equipment.toLowerCase().includes(search) 
        || exercise.bodyPart.toLowerCase().includes(search)
      );

      const exercise = document.querySelector('#exercises');
      
      setExercises(filteredExercises);
      
      window.scrollTo({
        top: exercise.offsetTop,
        behavior: 'smooth',
      });
    }
  } 

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography 
        fontWeight={700} 
        sx={{ fontSize: { lg: '44px', sx: '30px'}}} 
        mb="50px" 
        textAlign="center"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>

      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { 
              fontWeight:'700', 
              border:'none', 
              borderRadius:'4px'
            },
            width: { lg: '800px', xs: '350px' },
            backgroundColor: '#fff', borderRadius: '40px',
          }}
          height="76px" 
          value={search}
          onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
          placeholder='Search Exercises'
          type='text'
        />

        <Button className='search-btn'
          sx={{
            bgcolor:'#ff2625',
            color:'#fff',
            textTransform:'none',
            width: { lg:'175px', xs:'80px' },
            fontSize: { lg:'20px', xs:'14px' },
            height:'56px',
            position:'absolute',
            right:'0',
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>

      <Box sx={{ position:'relative', width:'100%', p:'20px'}}>
        <HorizontalScrollbar 
          data={bodyParts} 
          bodyPart={bodyPart} 
          setBodyPart={setBodyPart}
          isBodyParts
        />
      </Box>
    </Stack>
  )
}

export default SearchExercises
