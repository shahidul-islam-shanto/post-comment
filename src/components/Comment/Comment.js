import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import CommentDetail from './commentDetail/CommentDetail';



const Comment = () => {
    const {detailId} = useParams()
    const [comment, setComment ] = useState([])
    console.log(comment);
   
     
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${detailId}`
        fetch(url)
              .then(res => res.json())
              .then(data => setComment(data))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
 
        <div>
            {
                comment.map(pd => <CommentDetail comment={pd}></CommentDetail>)
            }
            {/* <h1>This is a Comment :{detailId}</h1>
            <p>{}</p> */}
          
        </div>
    );
};

export default Comment;