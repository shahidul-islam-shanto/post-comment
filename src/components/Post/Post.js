import React, {useEffect, useState} from 'react';
import PostDetails from '../PoatDetails/PostDetails';
 
const Post = () => {
    const [post, setPost] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => {
                setPost(data)
                setLoading(false)
            })
    }, []);
    const loadingPage = <p>Page is loading</p>
    return (
        <div> 
            {loading && loadingPage}
             {
                post.map(pd => <PostDetails post={pd}></PostDetails>)
             }
            
        </div>
    );
};

export default Post;