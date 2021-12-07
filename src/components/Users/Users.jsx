import React from 'react';
import styles from './users.module.css';


const Users = (props) => {
debugger;
if (props.users.length === 0){
    props.setUsers([
        {
            id: 1,
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPyGNr2qL63Sfugk2Z1-KBEwMGOfycBribew&usqp=CAU',
            followed: false,
            fullName: 'Dmitry',
            status: 'Hi',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 2,
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPyGNr2qL63Sfugk2Z1-KBEwMGOfycBribew&usqp=CAU',
            followed: true,
            fullName: 'Andrew',
            status: 'Happy',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: 3,
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPyGNr2qL63Sfugk2Z1-KBEwMGOfycBribew&usqp=CAU',
            followed: false,
            fullName: 'Misha',
            status: 'Champion',
            location: {city: 'Kiev', country: 'Ukraine'}
        }
    ])
}


    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                   <span>
                       <div>
                           <img className={styles.userPhoto} src={u.photoUrl}/>
                       </div>
                       <div>
                           {u.followed
                               ? <button onClick={() => {props.unfollow(u.id) }}>Unfollow</button>
                               : <button onClick={() => {props.follow(u.id)}}>Follow</button>}

                       </div>
                   </span>
                    <span>
                       <span>
                           <div>{u.fullName}</div>
                           <div>{u.status}</div>
                       </span>
                       <span>
                           <div>{u.location.country}</div>
                           <div>{u.location.city}</div>
                       </span>
                   </span>
                </div>)
            }
        </div>
    );
}

export default Users;
