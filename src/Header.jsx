import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

function Header() {
  return (
    <div className='header'>
      <a href="/">
        <img className = "header__icon" src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" alt="" />
      </a>
        <div className="header__center">
            <input type="text" />
            <SearchIcon />
        </div>
        <div className="header__right">
            <p>Become a Host</p>
            <LanguageIcon sx={{".MuiPaper-root":{minHeight: "20px"}}}/>
            <ExpandMoreIcon />
            <AccountCircleRoundedIcon />
        </div>
    </div>
  )
}

export default Header