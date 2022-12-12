import React, { useState } from 'react';
import './CommentDetail.css';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const CommentDetail = (props) => {
    const { name, email, body } = props.comment

    //like click
    const [color, setColor]  = useState('')
   
    return (
    <div className='post-detail' id='comment'>
         <div className='img-area'>
            <img src="https://i.postimg.cc/pd1KMDXD/images-5.jpg" alt="" />
         </div>
        <div className='comment'>
            <h3>Name: {name}</h3>
            <h4>Email: {email}</h4>
            <p>{body}</p>
        </div>
        <ThumbUpIcon className='icon' onClick={()=> setColor(color ? "" : 'primary')} color={color} ></ThumbUpIcon>
        </div> 
    );
};

export default CommentDetail;