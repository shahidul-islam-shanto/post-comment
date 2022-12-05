import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import CommentDetail from './commentDetail/CommentDetail';
//import fakeData from '../../fakeData/FakeData.json';


const Comment = () => {
    const {detailId} = useParams()
    
    const [comment, setComment ] = useState([])
    
     
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${detailId}`
        fetch(url)
              .then(res => res.json())
              .then(data => setComment(data))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        
        <div>       
            <h1 id='comment'>Comments</h1>  
          {
             comment.map(pd => <CommentDetail comment={pd}></CommentDetail>)
          }
        </div>
    );
};

export default Comment;