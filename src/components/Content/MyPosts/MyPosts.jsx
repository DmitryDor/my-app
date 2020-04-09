import React from 'react';
import classes from './MyPosts.module.css';

const MyPosts = () => {
    return (

        <div>
            My posts
            <div>
                New post
            </div>
            <div className={classes.posts}>
                <div className={classes.item}>new post 1</div>
                <div className={classes.item}>new post 2</div>
                <div className={classes.item}>new post 3</div>
            </div>
        </div>

    )
}

export default MyPosts;