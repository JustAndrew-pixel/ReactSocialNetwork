import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return (
        <header className={s.header}>
            <img src='https://www.pngix.com/pngfile/middle/644-6441818_black-and-white-phoenix-bird-logo-hd-png.png'/>

            <div className={s.loginBlock}>
                {props.isAuth ? props.login  :  <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>
    );
}

export default Header;
