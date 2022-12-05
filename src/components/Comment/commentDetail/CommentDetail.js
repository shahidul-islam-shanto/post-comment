import React from 'react';
import './CommentDetail.css';

const CommentDetail = (props) => {
    const { name, email, body } = props.comment
    console.log(props);
    return (
        <div className='post-detail' id='comment'>
            <h3>{name}</h3>
            <p>{email}</p>
            <p>{body}</p>
        </div>
    );
};

export default CommentDetail;