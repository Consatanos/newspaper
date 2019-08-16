import React from 'react';
import { Link } from 'react-router-dom';

const PostAside = (props) => {
  const { id, imageUrl, category, title, time, date } = props;

  return (
    <div className="single-blog-post small-featured-post d-flex">
      <div className="post-thumb">
        <Link to={{ pathname: "/post", state: { id: id } }}><img src={`img/${imageUrl}`} alt="" /></Link>
      </div>
      <div className="post-data">
        <Link to={{ pathname: "/categories", state: { category: category } }} className="post-catagory">{category}</Link>
        <div className="post-meta">
          <Link to={{ pathname: "/post", state: { id: id } }} className="post-title">
            <h6>{title}</h6>
          </Link>
          <p className="post-date"><span>{time}</span> | <span>{date}</span></p>
        </div>
      </div>
    </div>
  )
};

export default PostAside;