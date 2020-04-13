import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {

    return (

        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
                <Post message="Hi, how are you" likesCount="23"/>
                <Post message="It's my ferst post" likesCount="5"/>

            </div>
        </div>
    )
}

export default MyPosts;