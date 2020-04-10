import React from 'react';
import classes from './Post.module.css';
import Like from "./Like";


const Post = (props) => {



    return (
        <div className={classes.item}>
            <img src='https://avatars.mds.yandex.net/get-pdb/231404/0a7f7fe8-304d-494d-a455-b5d262fa8d88/s1200'/>
            {props.message}
            <div >
                <span>
                   <Like quality={props.like} />
                  {/* <Like quality='9' />*/}
                </span>
            </div>

        </div>


    )
}

export default Post;