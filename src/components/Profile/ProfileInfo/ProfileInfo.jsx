import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";



const ProfileInfo = (props) => {
  if(!props.profile){
      return <Preloader/>
  }


    return (
        <div>
        <div className={s.content}>
            <img src='https://photocasa.ru/uploads/posts/2017-01/1485218882_img_5932.jpg'/>
            </div>
                <div className={s.descriptionBlock}>
                    <img src={props.profile.photos.large}/>
                ava+description
            </div>

        </div>
    );
}

export default ProfileInfo;
