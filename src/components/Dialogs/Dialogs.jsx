import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog}>
            <img
                src={props.photo}/>
            <NavLink to={path} activeClassName={s.activeLink}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return <div className={s.dialog}> {props.message} </div>
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                <DialogItem name="Alex" id="1"
                            photo="https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png"/>
                <DialogItem name="Rodion" id="2"
                            photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCS5E33ApX7Q6LqmZcBlGxgebsIE2YWr748A&usqp=CAU"/>
                <DialogItem name="Michelle" id="3"
                            photo="https://img.freepik.com/vektoren-kostenlos/netter-spieler-maedchen-cartoon-spielt-auf-smartphone-esport-logo-vorlage_162048-177.jpg?size=338&ext=jpg"/>
            </div>


            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message=" How are you?"/>
                <Message message=" Do you wanna hang out?"/>


            </div>

        </div>
    );
}

export default Dialogs;
