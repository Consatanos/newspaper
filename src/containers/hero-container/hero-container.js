import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { withInfoService } from '../../components/hoc';
import Ticker from '../../components/ticker';

class HeroContainer extends Component {
  componentDidMount() {
    const { infoListService, loadingNews } = this.props;
    infoListService.getInfo('news')
      .then((data) => {
        loadingNews(data)
      });
  };

  render() {
    const { news } = this.props;
    return (
      <div className="col-12 col-lg-8">
        {/* Breaking News Widget */}
        <div className="breaking-news-area d-flex align-items-center">
          <div className="news-title">
            <p>Breaking News</p>
          </div>
          <Ticker />
        </div>

        {/* Breaking News Widget */}
        <div className="breaking-news-area d-flex align-items-center mt-15">
          <div className="news-title title2">
            <p>International</p>
          </div>
          <Ticker />
        </div>
      </div>
    )
  };
};

const mapStateToProps = ({ news }) => {
  return {
    news
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadingNews: (news) => {
      dispatch({
        type: 'LOADING_NEWS',
        payload: news
      })
    }
  };
};

export default compose(
  withInfoService(),
  connect(mapStateToProps, mapDispatchToProps)
)(HeroContainer);