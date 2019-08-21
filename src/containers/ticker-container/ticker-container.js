import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { withInfoService } from '../../components/hoc';
import Ticker from '../../components/ticker';

class TickerContainer extends Component {

    componentDidMount() {
        const { infoListService, loadingNews } = this.props;
        infoListService.getInfo('news')
            .then((data) => {
                loadingNews(data)
            });
        this.setStartState();
        this.switchTicker();
    };

    state = {
        messageText: '',
        messageUrl: ''
    };

    setStartState = () => {
        setTimeout(() => {
            const { news } = this.props;
            this.setState({
                messageText: news[0].title,
                messageUrl: news[0].linkUrl
            });
        }, 1);
    }

    switchTicker = () => {
        let id = 0;
        setInterval(() => {
            const { news } = this.props;
            id === news.length - 1 ? id = 0 : id++;
            this.setState({
                messageText: news[id].title,
                messageUrl: news[id].linkUrl
            });
        }, 2000)
    };


    render() {
        const { messageText, messageUrl } = this.state;
        return (
            <Ticker
                messageText={messageText}
                messageUrl={messageUrl} />
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
)(TickerContainer);
