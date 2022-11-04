import React from 'react'
import "./Sidebar.css"
import SidebarRow from "./SidebarRow"
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';

function Sidebar() {
  return (
    <div className='sidebar'>

        <SidebarRow selected Icon={HomeIcon} title="Home" />
        <SidebarRow Icon={WhatshotIcon} title="Shorts"/>
        <SidebarRow Icon={SubscriptionsIcon} title="Subscriptions"/>
        <hr/>
        <SidebarRow Icon={VideoLibraryOutlinedIcon} title="Library"/>
        <SidebarRow Icon={HistoryOutlinedIcon} title="History"/>
        <SidebarRow Icon={SlideshowOutlinedIcon} title="Your videos"/>
        <SidebarRow Icon={WatchLaterOutlinedIcon} title="Watch later"/>
        <SidebarRow Icon={ThumbUpOutlinedIcon} title="Liked videos"/>
        <hr/>
    </div>
  )
}

export default Sidebar;