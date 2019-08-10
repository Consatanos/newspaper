import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { withInfoService } from '../../components/hoc';
import { PostAside } from '../../components/post';

class PostAsideContainer extends Component {
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
      <div className="latest-posts-widget mb-50">
        {
          posts.slice(-4).reverse().map((post) => {
            const { id, imageUrl, category, title, time, date } = post;
            return (
              <PostAside
                key={id}
                imageUrl={imageUrl}
                category={category}
                title={title}
                time={time}
                date={date} />
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
)(PostAsideContainer);