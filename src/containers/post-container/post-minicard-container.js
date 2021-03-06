import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { withInfoService } from '../../components/hoc';
import { PostMinicard } from '../../components/post';

class PostMinicardContainer extends Component {
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
      <div className="row">
        {
          posts.slice(-4).reverse().map((post) => {
            const { id, imageUrl, category, title, likeCount, commentCount } = post;
            return (
              <PostMinicard
                key={id}
                id={id}
                imageUrl={imageUrl}
                category={category}
                title={title}
                likeCount={likeCount}
                commentCount={commentCount} />
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
)(PostMinicardContainer);