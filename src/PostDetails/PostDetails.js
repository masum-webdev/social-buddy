import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PostContext } from '../App';
import Comment from '../Comment/Comment';
const PostDetails = () => {
  const [postData]=useContext(PostContext);
  const {title, body }=postData;
  const {id}=useParams();
  const [postDetails,setPostDetails]=useState([]);  
  useEffect(()=>{    
    const postDetailsApi=`https://jsonplaceholder.typicode.com/comments?postId=${id}`;
    fetch(postDetailsApi)
    .then(res=>res.json())
    .then(data=>setPostDetails(data));
  },[]);
  return (
    <div>
      <div class="jumbotron">
  <h1 class="display-4">{title}</h1>
  <p class="lead">{body}</p>
  <hr class="my-4"/>
  <h5>{postDetails.length} Comments</h5>
  <hr class="my-4"/>
  
  {
    postDetails.map(c=><Comment comment={c}></Comment>)
  }
 
</div>
    </div>
  );
};

export default PostDetails;