import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PostContext } from '../App';
import './Post.css'

const Post = (props) => {
  const [postData, setPostData] = useContext(PostContext);
  const post = props.post;
  const { id, title, body } = post;
  return (
    <div className="card post-card">
      <div className="card-body box">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{body}</p>
        <Link to={`/post/${id}`} >
          <button className="btn btn-success" onClick={() => setPostData(post)}>See Comments</button>
        </Link>
      </div>
    </div>
  );
};

export default Post;