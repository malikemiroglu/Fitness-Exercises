import React, { useContext } from 'react'
import { Box, Typography } from '@mui/material'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import 'react-horizontal-scrolling-menu/dist/styles.css'

import BodyPart from './BodyPart'
import ExerciseCard from './ExerciseCard'

import LeftArrowIcon from '../assets/icons/left-arrow.png'
import RightArrowIcon from '../assets/icons/right-arrow.png'

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
        <Typography onClick={() => scrollPrev()} className="left-arrow">
            <img src={LeftArrowIcon} alt="left-arrow" />
        </Typography>
    )
}

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
        <Typography onClick={() => scrollNext()} className="right-arrow">
            <img src={RightArrowIcon} alt="right-arrow" />
        </Typography>
    )
}

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyParts }) => {
    if(!data.length) return null;
    return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {data.map((item) => (
                    <Box
                        key={item.id || item}
                        itemID={item.id || item}
                        title={item.id || item}
                        sx={{ margin: { lg:'0 40px', xs:'0 10px'}}}
                    >
                        {isBodyParts 
                            ? <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
                            : <ExerciseCard exercise={item} />
                        }
                    </Box>
                )
            )}
        </ScrollMenu>
    )
}

export default HorizontalScrollbar
