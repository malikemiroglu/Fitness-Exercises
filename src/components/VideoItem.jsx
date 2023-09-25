import React, { useState } from 'react'
import { Box, Typography} from '@mui/material'
import VideoModal from './VideoModal';

const VideoItem = ({video}) => {
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <>
    {isVideoModalOpen && <VideoModal title={video.title} videoId={video.videoId}  onClose={() => setIsVideoModalOpen(false)} />}
    <Box onClick={() => setIsVideoModalOpen(true)}>
        <img style={{ borderTopLeftRadius: '20px' }} src={video.thumbnails.length ? video.thumbnails[0].url : ""} alt={video.title} />
        <Box>
            <Typography sx={{ fontSize: { lg: '28px', xs: '18px' } }} fontWeight={600} color="#000">
                {video.title}
            </Typography>
            <Typography fontSize="14px" color="#000">
                {video.channelName}
            </Typography>
        </Box>
    </Box>
    </>
  )
}

export default VideoItem
