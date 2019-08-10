import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { withInfoService } from '../../components/hoc';
import { CommentAside } from '../../components/comment';

class CommentAsideContainer extends Component {
  componentDidMount() {
    const { infoListService, loadingComments } = this.props;
    infoListService.getInfo('comments')
      .then((data) => {
        loadingComments(data)
      });
  };

  render() {
    const { comments } = this.props;
    return (
      <div className="latest-comments-widget">
        <h3>Latest Comments</h3>
        {
          comments.map((comment) => {
            const { id, imageUrl, name, position, date } = comment;
            return (
              <CommentAside
                key={id}
                imageUrl={imageUrl}
                name={name}
                position={position}
                date={date} />
            )
          })
        }
      </div>
    )
  };
};

const mapStateToProps = ({ comments }) => {
  return {
    comments
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadingComments: (comments) => {
      dispatch({
        type: 'LOADING_COMMENTS',
        payload: comments
      })
    }
  };
};

export default compose(
  withInfoService(),
  connect(mapStateToProps, mapDispatchToProps)
)(CommentAsideContainer);