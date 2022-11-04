import React from 'react';
import './Header.css';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { Avatar } from '@mui/material';


function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <MenuOutlinedIcon className='menuIcon' />
                <img
                    alt="YouTube Logo"
                    className="header__logo"
                    src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg" />

            </div>

            <div className="header__input">
            <input  placeholder='Search' type="text" />
            <SearchIcon className=' header__inputButton'/>
            <MicOutlinedIcon className='mic'/>
            </div>            

            <div className='header__icons'>
                <VideoCallOutlinedIcon className='header__icon' />
                <NotificationsNoneOutlinedIcon className='header__icon' />
                <Avatar
                    alt="Gauri Shirkande"
                    src="https://media-exp1.licdn.com/dms/image/D4D03AQGKUyKmj-mWOQ/profile-displayphoto-shrink_800_800/0/1666365767873?e=1672876800&v=beta&t=Nq6xIO5W8zs7RzFXav7jpQdhcHQiFZgX__6sgjY2QU0"
                />
            </div>

        </div>
    )
}

export default Header;