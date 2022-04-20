import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return (
        <header className={s.header}>
            <img src='https://www.adobe.com/de/express/create/logo/media_149e117390bf90a8193acf0490559504e1adbd3af.png?width=400&format=png&optimize=medium'/>

            <div className={s.loginBlock}>
                {props.isAuth ? props.login  :  <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>
    );
}

export default Header;
