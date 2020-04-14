import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {

    let  posts = [
        {id: 1, message: 'Hi, how are you', likesCount: 23},
        {id: 2, message: 'It\'s my ferst post', likesCount: 5},
        {id: 3, message: 'Hellooo', likesCount: 5},
        {id: 4, message: 'YYeeesss', likesCount: 5},
        {id: 5, message: 'Whyyy', likesCount: 5}
    ]

    let postsElements = posts.map (p=> <Post message={p.message} likesCount={p.likesCount}/> );

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
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;