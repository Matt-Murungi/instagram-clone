import React from 'react';
import Avatar from '@material-ui/core/Avatar';

import './Post.css';

function Post() {
    return (
        <div className="post">
            <div className="post_header">
                <Avatar
                    className="post_avatar"
                    alt="Murungi"
                    src="https://www.pexels.com/photo/low-angle-photography-of-woman-sitting-on-a-concrete-wall-3214734/"
                />
                <h3>Username</h3>

            </div>
            {/* header -> avatar + username */}


            <img className="post_image" src="https://picsum.photos/id/237/700/400" alt="" srcset="" />
            {/* Image */}

            <h4 className="post_text"><strong>Murungi Matthew </strong>caption</h4>
            {/* username + caption */}
        </div>
    )
}

export default Post
