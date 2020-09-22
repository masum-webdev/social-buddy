import React from 'react';
import './Comment.css';
const Comment = (props) => {
  const { name, email, body } = props.comment;
  const id = Math.ceil(Math.random() * 99);
  return (
    <div className="border-success row mb-3" style={{ maxWidth: '100%' }}>
      <div className="col-md-2 text-center ">
        <img src={`https://randomuser.me/api/portraits/women/${id}.jpg`} alt="" />
      </div>
      <div className="col-md-10 text-success ">
        <b >{name}</b>
        <p><i className="text-info"><u>{email}</u></i>-{body}</p>
      </div>
    </div>
  );
};

export default Comment;