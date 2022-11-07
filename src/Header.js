import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './Header.css';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
// import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { Avatar } from '@mui/material';



function Header() {
    const [inputSearch, setInputSearch] = useState("");

    return (
        <div className="header">
            <div className="header__left">
                <MenuOutlinedIcon className='menuIcon' />
                <Link to="/">
                <img
                    alt="YouTube Logo"
                    className="header__logo"
                    src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg" />
                </Link>
            </div>

            <div className="header__input">
            <input 
                onChange={e => setInputSearch(e.target.value)} 
                value={inputSearch}
                className='input__search' 
                placeholder='Search' 
                type="text" 
            />
            <Link to={`/search/${inputSearch}`}>
            <SearchIcon className=' header__inputButton'/>
            </Link>
            {/* <MicOutlinedIcon className='mic'/> */}
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