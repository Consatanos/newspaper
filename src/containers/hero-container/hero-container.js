import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { withInfoService } from '../../components/hoc';

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
      <>
        <div className="col-12 col-lg-8">
          {/* Breaking News Widget */}
          <div className="breaking-news-area d-flex align-items-center">
            <div className="news-title">
              <p>Breaking News</p>
              <div id="breakingNewsTicker" className="ticker">
                <ul>
                  {/* <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></li>
                  <li><a href="#">Welcome to Colorlib Family.</a></li>
                  <li><a href="#">Nam eu metus sitsit amet, consec!</a></li> */}
                </ul>
              </div>
            </div>
          </div>

          {/* Breaking News Widget */}
          <div className="breaking-news-area d-flex align-items-center mt-15">
            <div className="news-title title2">
              <p>International</p>
              <div id="internationalTicker" className="ticker">
                <ul>
                  {/* <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></li>
                  <li><a href="#">Welcome to Colorlib Family.</a></li>
                  <li><a href="#">Nam eu metus sitsit amet, consec!</a></li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
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