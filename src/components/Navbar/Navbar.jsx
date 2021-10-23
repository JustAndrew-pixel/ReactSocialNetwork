import React from 'react';
import s from './Navbar.module.css';


const Navbar = (props) => {
    return (<nav className={s.navbar}>
            <div className={`${s.item} ${s.active}`}>
                <a>Profile</a>
            </div>
            <div className={s.item}>
                <a>Messages</a>
            </div>
            <div className={s.item}>
                <a>Friends</a>
            </div>
            <div className={s.item}>
                <a>Settings</a>
            </div>

        </nav>
    );
}

export default Navbar;
