import React from 'react'
import "./RecommendedVideo.css"
import ScrollbarComponent from './ScrollbarComponent';
import VideoCard from './VideoCard';

function RecommendedVideo() {
  return (
    <div className='recommendedVideo'>
        <div className='scrollbarContainer'>
            <ScrollbarComponent selected className="scrollComponent" name="All"/>
            <ScrollbarComponent className="scrollComponent" name="Mixes"/>
            <ScrollbarComponent className="scrollComponent" name="Music"/>
            <ScrollbarComponent className="scrollComponent" name="Sadhguru"/>
            <ScrollbarComponent className="scrollComponent" name="Motivation"/>
            <ScrollbarComponent className="scrollComponent" name="Books"/>
            <ScrollbarComponent className="scrollComponent" name="Life"/>
            <ScrollbarComponent className="scrollComponent" name="Thoughts"/>
            <ScrollbarComponent className="scrollComponent" name="Computer Programming"/>
            <ScrollbarComponent className="scrollComponent" name="Background music"/>
            <ScrollbarComponent className="scrollComponent" name="Podcasts"/>
            <ScrollbarComponent className="scrollComponent" name="Gadgets"/>
        </div>
        <div className='videoCards__alignment'>
          <VideoCard
            title="Become a Web Developer in 1 hour!!"
            views="2.3M Views"
            timestamp="3 days ago"
            channelImage="https://media-exp1.licdn.com/dms/image/D4D03AQGKUyKmj-mWOQ/profile-displayphoto-shrink_800_800/0/1666365767873?e=1672876800&v=beta&t=Nq6xIO5W8zs7RzFXav7jpQdhcHQiFZgX__6sgjY2QU0"
            channel="Gauri Shirkande"
            image="https://i.ytimg.com/vi/YCmpc3U3TVs/maxresdefault.jpg"
          />
          <VideoCard
            title="Become a Web Developer in 1 hour!!"
            views="2.3M Views"
            timestamp="3 days ago"
            channelImage="https://yt3.ggpht.com/ytc/AMLnZu_DD-SeQ3Wi2DaDI83jTjfdwB2SDPSZgAynbt4k4w=s68-c-k-c0x00ffffff-no-rj"
            channel="Pick Up Limes"
            image="https://i.ytimg.com/vi/ZK5VUuxGYr0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBpFW6yNNGaXL1dXwCgWnbvpG0KOg"
          />
          <VideoCard
            title="Become a Web Developer in 1 hour!!"
            views="2.3M Views"
            timestamp="3 days ago"
            channelImage="https://yt3.ggpht.com/HjXKmDGoAp6b-JdGYpqJYYeN4S_CMpD_kqWvldpN53cbzn-i73t6mVNo8mNki-xLPwi0BVSFi-o=s68-c-k-c0x00ffffff-no-rj"
            channel="TED_Ed"
            image="https://i.ytimg.com/vi/FWTNMzK9vG4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDN8I2bRUv9nM9P7GV6egl-ymYuUg"
          />
          <VideoCard
            title="Become a Web Developer in 1 hour!!"
            views="2.3M Views"
            timestamp="3 days ago"
            channelImage="https://yt3.ggpht.com/1byeRNaXDn6x8clpJq-QQTEKTxLtHXKL0aZ4yIFYW4fGI2EXuVzo0tsejFVA-zCKSaEIZu6kRw=s68-c-k-c0x00ffffff-no-rj"
            channel="Happy Go Lucky"
            image="https://i.ytimg.com/vi/nYrB5mOh5Ag/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAapmHNfWKpuqwO5Vn3j758iS-rBw"
          />
          <VideoCard
            title="Become a Web Developer in 1 hour!!"
            views="2.3M Views"
            timestamp="3 days ago"
            channelImage="https://media-exp1.licdn.com/dms/image/D4D03AQGKUyKmj-mWOQ/profile-displayphoto-shrink_800_800/0/1666365767873?e=1672876800&v=beta&t=Nq6xIO5W8zs7RzFXav7jpQdhcHQiFZgX__6sgjY2QU0"
            channel="Gauri Shirkande"
            image="https://i.ytimg.com/vi/YCmpc3U3TVs/maxresdefault.jpg"
          />
          <VideoCard
            title="Become a Web Developer in 1 hour!!"
            views="2.3M Views"
            timestamp="3 days ago"
            channelImage="https://yt3.ggpht.com/ytc/AMLnZu_DD-SeQ3Wi2DaDI83jTjfdwB2SDPSZgAynbt4k4w=s68-c-k-c0x00ffffff-no-rj"
            channel="Pick Up Limes"
            image="https://i.ytimg.com/vi/ZK5VUuxGYr0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBpFW6yNNGaXL1dXwCgWnbvpG0KOg"
          />
          <VideoCard
            title="Become a Web Developer in 1 hour!!"
            views="2.3M Views"
            timestamp="3 days ago"
            channelImage="https://yt3.ggpht.com/HjXKmDGoAp6b-JdGYpqJYYeN4S_CMpD_kqWvldpN53cbzn-i73t6mVNo8mNki-xLPwi0BVSFi-o=s68-c-k-c0x00ffffff-no-rj"
            channel="TED_Ed"
            image="https://i.ytimg.com/vi/FWTNMzK9vG4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDN8I2bRUv9nM9P7GV6egl-ymYuUg"
          />
          <VideoCard
            title="Become a Web Developer in 1 hour!!"
            views="2.3M Views"
            timestamp="3 days ago"
            channelImage="https://yt3.ggpht.com/1byeRNaXDn6x8clpJq-QQTEKTxLtHXKL0aZ4yIFYW4fGI2EXuVzo0tsejFVA-zCKSaEIZu6kRw=s68-c-k-c0x00ffffff-no-rj"
            channel="Happy Go Lucky"
            image="https://i.ytimg.com/vi/nYrB5mOh5Ag/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAapmHNfWKpuqwO5Vn3j758iS-rBw"
          />
        </div>
    </div>
  )
}

export default RecommendedVideo;
