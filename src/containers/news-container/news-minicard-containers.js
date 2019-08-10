import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { withInfoService } from '../../components/hoc';
import { NewsMinicard } from '../../components/news';

class NewsMinicardContainer extends Component {
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
        {
          news.slice(-4).reverse().map((item) => {
            const { id, date, title, imageUrl } = item;
            return (
              <NewsMinicard
                key={id}
                title={title}
                date={date}
                imageUrl={imageUrl} />
            )
          })
        }
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
)(NewsMinicardContainer);