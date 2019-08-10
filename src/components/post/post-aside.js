import React from 'react';
import { Link } from 'react-router-dom';

const PostAside = (props) => {
  const { imageUrl, category, title, time, date } = props;

  return (
    <div className="single-blog-post small-featured-post d-flex">
      <div className="post-thumb">
        <Link to="/"><img src={`img/${imageUrl}`} alt="" /></Link>
      </div>
      <div className="post-data">
        <Link to="/" className="post-catagory">{category}</Link>
        <div className="post-meta">
          <Link to="/" className="post-title">
            <h6>{title}</h6>
          </Link>
          <p className="post-date"><span>{time}</span> | <span>{date}</span></p>
        </div>
      </div>
    </div>
  )
};

export default PostAside;