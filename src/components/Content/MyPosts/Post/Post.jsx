import React from 'react';
import classes from './Post.module.css';



const Post = (props) => {



    return (
        <div className={classes.item}>
            <img src='https://avatars.mds.yandex.net/get-pdb/231404/0a7f7fe8-304d-494d-a455-b5d262fa8d88/s1200'/>
            {props.message}
            <div >
                <span>
                   like
                </span>{props.likesCount }
            </div>

        </div>


    )
}

export default Post;