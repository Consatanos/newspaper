import React from 'react';
import { connect } from 'react-redux';

import { Post } from '../../components/post';

const PostContainer = (props) => {
  const { id, posts } = props;
  const post = posts.find(x => x.id === id);

  if (post) {
    const { id, imageUrl, category, title, author, likeCount, commentCount, descr } = post;

    return (
      <Post
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

export default connect(mapStateToProps)(PostContainer);