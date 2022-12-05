import React, {useEffect, useState} from 'react';
import PostDetails from '../PoatDetails/PostDetails';
 
const Post = () => {
    const [post, setPost] = useState([])
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPost(data))
    }, []);
    return (
        <div> 
             {
                post.map(pd => <PostDetails post={pd}></PostDetails>)
             }
            
        </div>
    );
};

export default Post;