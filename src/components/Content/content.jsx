import React from 'react';
import classes from './content.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Content = () => {

    return (
        <div >
            <ProfileInfo/>
            <MyPosts/>
        </div>
    )
}

export default Content;