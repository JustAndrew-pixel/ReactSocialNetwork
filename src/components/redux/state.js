let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello my friend', likesCount: 7},
                {id: 2, message: "It\'s my first post", likesCount: 5}
            ],
            newPostText: 'Post text'
        },
        dialogsPage: {
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
            ]
        }

    },
    _callSubscriber() {
        console.log("state has been changed");
    },
    getState() {
        return this._state
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }

            }
};


export default store;
window.store = store;