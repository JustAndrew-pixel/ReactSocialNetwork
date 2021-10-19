import React from 'react';
import '../App.css';


const Profile = (props) => {
    return (
        <div className='content'>
            <img src='https://photocasa.ru/uploads/posts/2017-01/1485218882_img_5932.jpg'/>
            <div>
                ava+description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div>
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
