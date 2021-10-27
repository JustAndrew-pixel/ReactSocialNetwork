import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";


const Navbar = (props) => {
    return (
        <nav className={s.navbar}>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/friends">Friends</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings">Settings</NavLink>
            </div>

        </nav>
    );
}

export default Navbar;
