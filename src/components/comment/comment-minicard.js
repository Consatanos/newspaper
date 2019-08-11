import React from 'react';
import { Link } from 'react-router-dom';

const CommentMinicard = (props) => {
  const { date, text, name, imageUrl } = props;

  return (
    <li className="single_comment_area">
      {/* Comment Content */}
      <div className="comment-content d-flex">
        {/* Comment Author */}
        <div className="comment-author">
          <img src={`img/${imageUrl}`} alt="author" />
        </div>
        {/* Comment Meta */}
        <div className="comment-meta">
          <Link to="/" className="post-author">{name}</Link>
          <Link to="/" className="post-date">{date}</Link>
          <p>{text}</p>
        </div>
      </div>
    </li>
  )
};

export default CommentMinicard;