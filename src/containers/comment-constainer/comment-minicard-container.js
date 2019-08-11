import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { withInfoService } from '../../components/hoc';
import { CommentMinicard } from '../../components/comment';

class CommentMinicardContainer extends Component {
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
      <div className="comment_area clearfix">
        <h5 className="title">3 Comments</h5>
        <ol>
          {
            comments.map((comment) => {
              const { id, date, text, name, imageUrl } = comment;
              return (
                <CommentMinicard
                  key={id}
                  date={date}
                  text={text}
                  name={name}
                  imageUrl={imageUrl} />
              )
            })
          }
        </ol>
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
)(CommentMinicardContainer);