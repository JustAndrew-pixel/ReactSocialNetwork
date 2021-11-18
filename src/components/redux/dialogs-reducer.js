

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
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
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Do you wanna hang out?'},
    ],
    newMessageBody: ''
};

export const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.messages.push({id: 4, message: body});
            state.newMessageBody = '';
            return state;
        default:
            return state;
    }

}

export const sendMessageCreator = () => {

    return {
        type: SEND_MESSAGE
    }
}

export const updateNewMessageBodyCreator = (body) => {

    return {
        type: UPDATE_NEW_MESSAGE_BODY, body: body}
}

export default dialogsReducer;