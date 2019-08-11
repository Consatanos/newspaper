import React from 'react';
import { Link } from 'react-router-dom';
import chat from './chat.png';
import like from './like.png';

const PostFeaturedMinicard = (props) => {
  const { imageUrl, category, title, likeCount, commentCount } = props;

  return (
    <div className="single-blog-post featured-post-2">
      <div className="post-thumb">
        <Link to="/"><img src={`img/${imageUrl}`} alt="" /></Link>
      </div>
      <div className="post-data">
        <Link to="/" className="post-catagory">{category}</Link>
        <div className="post-meta">
          <Link to="/" className="post-title">
            <h6>{title}</h6>
          </Link>
          {/* Post Like & Post Comment */}
          <div className="d-flex align-items-center">
            <Link to="/" className="post-like"><img src={like} alt="" /> <span>{likeCount}</span></Link>
            <Link to="/" className="post-comment"><img src={chat} alt="" /> <span>{commentCount}</span></Link>
          </div>
        </div>
      </div>
    </div>
  )
};

export default PostFeaturedMinicard;