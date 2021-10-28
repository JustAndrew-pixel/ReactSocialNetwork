import React from 'react';
import s from './ProfileInfo.module.css';



const ProfileInfo = (props) => {
    return (
        <div>
        <div className={s.content}>
            <img src='https://photocasa.ru/uploads/posts/2017-01/1485218882_img_5932.jpg'/>
            </div>
                <div className={s.descriptionBlock}>
                ava+description
            </div>

        </div>
    );
}

export default ProfileInfo;
