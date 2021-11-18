import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }


    let onNewMessageChange = (body) => {

        let action = updateNewMessageBodyCreator(body);
        props.store.dispatch(action)

    }

    return <Dialogs dialogsPage={state}
                    newMessageBody={state.newMessageBody}
                    sendMessage={onSendMessageClick}
                    onNewMessageChange={onNewMessageChange}/>;
}

export default DialogsContainer;