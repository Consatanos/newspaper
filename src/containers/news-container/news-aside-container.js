import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { withInfoService } from '../../components/hoc';
import { NewsAside } from '../../components/news';

class NewsAsideContainer extends Component {
  componentDidMount() {
    const { infoListService, loadingNews } = this.props;
    infoListService.getInfo('news')
      .then((data) => {
        loadingNews(data)
      });
  };

  render() {
    const { news } = this.props;
    console.log(news);
    return (
      <div className="popular-news-widget mb-50">
        <h3>4 Most Popular News</h3>
        {
          news.slice(-4).reverse().map((item, index) => {
            const { id, title, date } = item;
            return (
              <NewsAside
                key={id}
                num={index + 1}
                title={title}
                date={date} />
            )
          })
        }
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
)(NewsAsideContainer);