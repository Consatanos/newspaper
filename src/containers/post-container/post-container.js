import React from 'react';
import { connect } from 'react-redux';

import { Post } from '../../components/post';

const PostContainer = (props) => {
  const { posts } = props;
  const post = posts[3];

  if (post) {
    const { imageUrl, category, title, author, likeCount, commentCount, descr } = post;

    return (
      <Post
        imageUrl={imageUrl}
        category={category}
        title={title}
        author={author}
        likeCount={likeCount}
        commentCount={commentCount}
        descr={descr} />
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

export default connect(mapStateToProps)(PostContainer);