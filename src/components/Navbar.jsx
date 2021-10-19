import React from 'react';
import '../App.css';


const Navbar = (props) => {
    return (<nav className='navbar'>
            <div>
                <a>Profile</a>
            </div>
            <div>
                <a>Messages</a>
            </div>
            <div>
                <a>Friends</a>
            </div>
            <div>
                <a>Settings</a>
            </div>

        </nav>
    );
}

export default Navbar;
