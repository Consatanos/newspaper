import React from 'react';
import { Link } from 'react-router-dom';
import chat from './chat.png';
import like from './like.png';
import { connect } from 'react-redux';

const PostFeatured = (props) => {
  const { posts } = props;
  const post = posts[posts.length - 1];

  if (post) {
    const { imageUrl, category, title, author, likeCount, commentCount, descr } = post;

    return (
      <div className="col-12 col-lg-7">
        <div className="single-blog-post featured-post">
          <div className="post-thumb">
            <Link to="/"><img src={`img/${imageUrl}`} alt="" /></Link>
          </div>
          <div className="post-data">
            <Link to="/" className="post-catagory">{category}</Link>
            <Link to="/" className="post-title">
              <h6>{title}</h6>
            </Link>
            <div className="post-meta">
              <p className="post-author">By <Link to="/">{author}</Link></p>
              <p className="post-excerp">{descr}</p>
              {/* Post Like & Post Comment */}
              <div className="d-flex align-items-center">
                <Link to="/" className="post-like"><img src={like} alt="" /> <span>{likeCount}</span></Link>
                <Link to="/" className="post-comment"><img src={chat} alt="" /> <span>{commentCount}</span></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <></>
  )
};

const mapStateToProps = ({ posts }) => {
  return {
    posts
  };
};

export default connect(mapStateToProps)(PostFeatured);