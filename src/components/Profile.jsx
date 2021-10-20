import React from 'react';
import s from './Profile.module.css';


const Profile = (props) => {
    return (
        <div className={s.content}>
            <img src='https://photocasa.ru/uploads/posts/2017-01/1485218882_img_5932.jpg'/>
            <div>
                ava+description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div className={s.posts}>
                    <div className={s.item}>
                        post 1
                    </div>
                    <div className={s.item}>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
