import React, { createContext, useEffect, useState } from 'react';
import Post from '../Post/Post';

const Home = () => {
  // const PostContext=createContext();
  const [posts,setPosts]=useState([]);
  useEffect(()=>{
    const postApi="https://jsonplaceholder.typicode.com/posts";
    fetch(postApi)
    .then(res=>res.json())
    .then(data=>setPosts(data));
  },[]);
  console.log("post",posts)
  return (
    <div>
      {
        posts.map(p=><Post post={p} key={p.id}/>)
      }
    </div>
  );
};

export default Home;