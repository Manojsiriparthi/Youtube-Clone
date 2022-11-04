import './VideoCard.css'
import React from 'react'
import { Avatar } from '@mui/material';

function VideoCard({ image, title, channel, views, timestamp, channelImage }) {
  return (
    <div className='videoCard'>
      <img className='videoCard_thumbnail' src={image} alt=''/>
      <div className='videoCard__info'>
        <Avatar 
          className="videoCard__avatar" 
          alt={channel} 
          src={channelImage} 
        />
        <div className='video__text'>
          <h4>{title}</h4>
          <p className='videoCard__other'>{channel}</p>
          <p className='videoCard__other'>
            {views} * {timestamp}
          </p>
        </div>
      
      </div>
    </div>
  )
}

export default VideoCard