let rerenderEntireTree = () => {
    console.log("state has been changed");
}

let state = {
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

}

window.state = state;

export const addPost = () => {

    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {

    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}



export default state;