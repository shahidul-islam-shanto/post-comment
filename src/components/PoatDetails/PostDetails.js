import React from 'react';
import './PostDetails.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';



const PostDetails = (props) => {
       const {title, body, id} = props.post
    
    return (
        <div className='post-detail'>
                <h2>{title}</h2>
                <p>{body}</p>
            <Link to={'/details/' + id}>{<Button className='button' variant="outlined">Details</Button>}</Link>
            
        </div>
    );
};

export default PostDetails;