import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { withInfoService } from '../../components/hoc';
import { PostCard } from '../../components/post';

class PostCardContainer extends Component {
  componentDidMount() {
    const { infoListService, loadingPosts } = this.props;
    infoListService.getInfo('posts')
      .then((data) => {
        loadingPosts(data)
      });
  };

  render() {
    const { posts } = this.props;
    return (
      <div className="blog-posts-area">
        {
          posts.slice(-4).reverse().map((post) => {
            const { id, imageUrl, author, title, descr, category, commentCount, likeCount } = post;
            return (
              <PostCard
                key={id}
                id={id}
                imageUrl={imageUrl}
                category={category}
                title={title}
                likeCount={likeCount}
                commentCount={commentCount}
                author={author}
                descr={descr} />
            )
          })
        }
      </div>
    )
  };
};

const mapStateToProps = ({ posts }) => {
  return {
    posts
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadingPosts: (posts) => {
      dispatch({
        type: 'LOADING_POSTS',
        payload: posts
      })
    }
  };
};

export default compose(
  withInfoService(),
  connect(mapStateToProps, mapDispatchToProps)
)(PostCardContainer);