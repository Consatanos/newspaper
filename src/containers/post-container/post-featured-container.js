import React from 'react';
import { connect } from 'react-redux';

import { PostFeatured } from '../../components/post';

const PostFeaturedContainer = (props) => {
  const { posts } = props;
  const post = posts[posts.length - 1];

  if (post) {
    const { id, imageUrl, category, title, author, likeCount, commentCount, descr } = post;

    return (
      <PostFeatured
        id={id}
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

export default connect(mapStateToProps)(PostFeaturedContainer);