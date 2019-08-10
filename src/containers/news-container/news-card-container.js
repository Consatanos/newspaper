import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { withInfoService } from '../../components/hoc';
import { NewsCard } from '../../components/news';

class NewsCardContainer extends Component {
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
      <div className="row">
        {
          news.slice(-6).reverse().map((item) => {
            const { id, imageUrl, title, date } = item;
            return (
              <NewsCard
                key={id}
                title={title}
                date={date}
                imageUrl={imageUrl} />
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
)(NewsCardContainer);