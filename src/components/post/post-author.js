import React from 'react';
import { Link } from 'react-router-dom';

const PostAuthor = (props) => {

  const { imageUrl, linkUrl, name, position, text } = props;

  return (
    <div className="blog-post-author d-flex">
      <div className="author-thumbnail">
        <img src={`img/${imageUrl}`} alt="" />
      </div>
      <div className="author-info">
        <Link to={linkUrl} className="author-name">{name}, <span>{position}</span></Link>
        <p>{text}</p>
      </div>
    </div>
  )
};

export default PostAuthor;