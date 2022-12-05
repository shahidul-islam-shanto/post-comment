import React from 'react';
import './CommentDetail.css';

const CommentDetail = (props) => {
    const { name, email, body } = props.comment
    console.log(props);
    return (
    <div className='post-detail' id='comment'>
         <div className='img-area'>
            <img src="https://i.postimg.cc/jjVvfsSs/images-5.jpg" alt="" />
         </div>
        <div className='comment'>
            <h3>Name: {name}</h3>
            <h4>Email: {email}</h4>
            <p>{body}</p>
        </div>
    </div>
    );
};

export default CommentDetail;