import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import defaultUserPhoto from "../../../assets/images/user.png";


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
                    <img src={props.profile.photos.large != null ? props.profile.photos.large :defaultUserPhoto}/>
                ava+description
            </div>

        </div>
    );
}

export default ProfileInfo;
