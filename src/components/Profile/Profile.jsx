import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";


const Profile = (props) => {
    return (
        <div className={s.content}>
            <img src='https://photocasa.ru/uploads/posts/2017-01/1485218882_img_5932.jpg'/>
            <div>
                ava+description
            </div>
           <MyPosts/>
        </div>
    );
}

export default Profile;
