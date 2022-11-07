import React from 'react'
import "./VideoRow.css"


function VideoRow({
    views,
    subs, 
    timestamp,
    channel,
    description,
    title,
    image
}) {
  return (
    <div className='videoRow' >
        <img src={image} alt=""/>
        <div className='videoRow__text'>
            <h3>{title}</h3>
            <p>{views} views • {timestamp}</p>
            <p className='videoRow_headline'>
                {channel}  
            </p>
            <p className='videoRow__description'>{description}</p>
        </div>
    </div>
  )
}

export default VideoRow