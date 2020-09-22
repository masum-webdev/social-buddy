import React from 'react';
import './Comment.css';
const Comment = (props) => {
  const {name,email,body}=props.comment;
  return (
<div className="border-success row mb-3" style={{ maxWidth: '100%' }}>
<div className="col-md-2">
    <img className="float-right" src="https://randomuser.me/api/portraits/women/91.jpg" alt=""/>
</div>
<div className="col-md-10 text-success">
  <b >{name}</b>
  <p><i className="text-info"><u>{email}</u></i>-{body}</p> 
</div>
</div>
  );
};

export default Comment;