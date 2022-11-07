import React from 'react'
import "./SearchPage.css"
import TuneIcon from '@mui/icons-material/Tune';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage__filter'>
                <TuneIcon />
                <h2>Filters</h2>
            </div>
            <hr />

            <ChannelRow
                image="https://www.freecodecamp.org/news/content/images/2021/05/freecodecamp-org-gravatar.jpeg"
                channel="freecodecamp"
                verified
                subs="6.62M"
                noOfVideos={1370}
                description="Learn to code for free."
            />

            <hr />

            <VideoRow
                views="1.4M"
                subs="659K"
                description="Do you want a FREE online subscription?"
                timestamp="59 seconds ago"
                title="Let's build clone application using "
                channel="freecodecamp"
                image="https://www.freecodecamp.org/news/content/images/size/w2000/2022/11/ms900.png"
            />

            <VideoRow
                views="1.4M"
                subs="659K"
                description="Learn the Kotlin programming language in this full course for beginners. Kotlin is the most popular programming language for building Android apps and it can also be can be used for any kind of development."
                timestamp="59 seconds ago"
                title="Kotlin Course - Tutorials for Beginners"
                channel="freecodecamp"
                image="https://www.freecodecamp.org/news/content/images/size/w2000/2022/10/kotlin.png"
            />

            <VideoRow
                views="1.4M"
                subs="659K"
                description="Do you want a FREE online subscription?"
                timestamp="59 seconds ago"
                title="Full Stack Web Development Course"
                channel="freecodecamp"
                image="https://www.freecodecamp.org/news/content/images/size/w2000/2022/11/webdev.png"
            />
        </div>
    )
}

export default SearchPage;