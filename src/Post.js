import React from 'react';
import Avatar from '@material-ui/core/Avatar';

import './Post.css';

function Post({username, caption, imageUrl}) {
    return (
        <div className="post">
            <div className="post_header">
                <Avatar
                    className="post_avatar"
                    alt={username}
                    src="https://www.pexels.com/photo/low-angle-photography-of-woman-sitting-on-a-concrete-wall-3214734/"
                />
                <h3>{username}</h3>

            </div>
            {/* header -> avatar + username */}


            <img className="post_image" src={imageUrl} alt="" srcset="" />
            {/* Image */}

            <h4 className="post_text"><strong>{username} </strong>{caption}</h4>
            {/* username + caption */}
        </div>
    )
}

export default Post
