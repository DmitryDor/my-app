import React from 'react';
import classes from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div >
            <div>
                <img
                    src='https://i.pinimg.com/originals/9a/d4/5c/9ad45c6956e4b9e8c34b5113de2322bc.jpg'/>
            </div>
            <div className={classes.descriptionBlock}>
                ava + discription
            </div>
        </div>
    )
}

export default ProfileInfo;