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

    let dialogs = [
        {
            id: 1,
            name: 'Alex',
            photo: 'https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png'
        },
        {
            id: 2,
            name: 'Rodion',
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCS5E33ApX7Q6LqmZcBlGxgebsIE2YWr748A&usqp=CAU'
        },
        {
            id: 3,
            name: 'Michelle',
            photo: 'https://img.freepik.com/vektoren-kostenlos/netter-spieler-maedchen-cartoon-spielt-auf-smartphone-esport-logo-vorlage_162048-177.jpg?size=338&ext=jpg'
        }
    ];

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Do you wanna hang out?'},
    ]

    let dialogsElements = dialogs.map((d) => <DialogItem name={d.name} id={d.id} photo={d.photo}/>)

    let messagesElements = messages.map((m) => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>

        </div>
    );
}

export default Dialogs;
