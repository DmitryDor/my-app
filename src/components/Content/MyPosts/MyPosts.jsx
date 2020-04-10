import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

class MyPosts extends React.Component {


    state = {
        posts: [
            {id: 1, message: '1111', like: 1},
            {id: 2, message: '2222', like: 2}
        ]
    };

    render() {

        return (
            <div>
                My posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>

                </div>
                <div className={classes.posts}>
                    <Post message={this.state.posts[0].message} like={this.state.posts[0].like}/>
                    <Post message={this.state.posts[1].message} like={this.state.posts[1].like}/>
                </div>
            </div>

        )
    }
}

export default MyPosts;