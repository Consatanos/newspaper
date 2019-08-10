import React from 'react';
import { Link } from 'react-router-dom';

const CommentAside = (props) => {
  const { imageUrl, name, position, date } = props;

  return (
    <div className="single-comments d-flex">
      <div className="comments-thumbnail mr-15">
        <img src={`img/${imageUrl}`} alt="" />
      </div>
      <div className="comments-text">
        <Link to="/">{name} <span>on</span> {position}</Link>
        <p>{date}</p>
      </div>
    </div>
  )
};

export default CommentAside;