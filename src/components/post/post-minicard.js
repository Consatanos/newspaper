import React from 'react';
import { Link } from 'react-router-dom';
import chat from './chat.png';
import like from './like.png';

const PostMinicard = (props) => {
  const { id, imageUrl, category, title, likeCount, commentCount } = props;

  return (
    <div className="col-12 col-md-6">
      <div className="single-blog-post style-3 mb-80">
        <div className="post-thumb">
          <Link to={{ pathname: "/post", state: { id: id } }}><img src={`img/${imageUrl}`} alt="" /></Link>
        </div>
        <div className="post-data">
          <Link to={{ pathname: "/post", state: { id: id } }} className="post-catagory">{category}</Link>
          <Link to={{ pathname: "/post", state: { id: id } }} className="post-title">
            <h6>{title}</h6>
          </Link>
          <div className="post-meta d-flex align-items-center">
            <Link to="/" className="post-like"><img src={like} alt="" /> <span>{likeCount}</span></Link>
            <Link to="/" className="post-comment"><img src={chat} alt="" /> <span>{commentCount}</span></Link>
          </div>
        </div>
      </div>
    </div>
  )
};

export default PostMinicard;