import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router';
import Comment from '../Comment/Comment';
import PostDetails from '../PoatDetails/PostDetails';



const DetailsPost = () => {
      const { detailId } = useParams()
       const [detailAll, setDetailAll] = useState([])
     
       useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${detailId}`
      fetch(url)
            .then(res => res.json())
            .then(data => setDetailAll(data))
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])
   
    return (
        <div> 
           <PostDetails post={detailAll}></PostDetails>
           <Comment></Comment>
        </div>
    );
};

export default DetailsPost;