import React from 'react';
import { Link } from 'react-router-dom';

const NewsMinicard = (props) => {
  const { date, title, imageUrl } = props;

  return (
    <div className="single-blog-post style-2">
      <div className="post-thumb">
        <Link to="/"><img src={`img/${imageUrl}`} alt="" /></Link>
      </div>
      <div className="post-data">
        <Link to="/" className="post-title">
          <h6>{title}</h6>
        </Link>
        <div className="post-meta">
          <div className="post-date"><Link to="/">{date}</Link></div>
        </div>
      </div>
    </div>
  )
};

export default NewsMinicard;