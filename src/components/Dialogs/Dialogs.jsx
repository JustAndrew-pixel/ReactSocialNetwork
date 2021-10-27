import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                <div className={`${s.dialog} ${s.active}`}>
                   <img src="https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png" />
                    <NavLink to="/dialogs/1" activeClassName={s.activeLink}>Alex</NavLink>
                </div>

                <div className={s.dialog}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCS5E33ApX7Q6LqmZcBlGxgebsIE2YWr748A&usqp=CAU" />
                    <NavLink to="/dialogs/2" activeClassName={s.activeLink}>Rodion</NavLink>
                </div>

                <div className={s.dialog}>
                    <img src="https://img.freepik.com/vektoren-kostenlos/netter-spieler-maedchen-cartoon-spielt-auf-smartphone-esport-logo-vorlage_162048-177.jpg?size=338&ext=jpg" />
                    <NavLink to="/dialogs/3" activeClassName={s.activeLink}>Michelle</NavLink>
                </div>

            </div>


            <div className={s.messages}>
                <div className={s.dialog}>
                    Hi
                </div>

                <div className={s.dialog}>
                    How are you?
                </div>

                <div className={s.dialog}>
                    Do you wanna hang out?
                </div>

            </div>

        </div>
    );
}

export default Dialogs;
