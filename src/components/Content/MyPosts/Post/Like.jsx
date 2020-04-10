import React from 'react';
import classes from './Like.module.css';

const Like = (props) => {

    return (
        <div className={classes.item}>
            <div>
                <span>
                    {props.quality}
                </span>
            </div>
        </div>

    )
}

export default Like;