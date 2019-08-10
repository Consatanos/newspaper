import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { withInfoService } from '../../components/hoc';
import { VideoCard } from '../../components/video';

const style = {
  backgroundImage: `url(img/bg-img/bg1.jpg)`
};

class VideoContainer extends Component {
  componentDidMount() {
    const { infoListService, loadingVideos } = this.props;
    infoListService.getInfo('videos')
      .then((data) => {
        loadingVideos(data)
      });
  };

  render() {
    const { videos } = this.props;
    return (
      <div className="video-post-area bg-img bg-overlay" style={style}>
        <div className="container">
          <div className="row justify-content-center">
            {
              videos.slice(-3).reverse().map((video) => {
                const { id, imageUrl, videoUrl } = video;
                return (
                  <VideoCard
                    key={id}
                    imageUrl={imageUrl}
                    videoUrl={videoUrl} />
                )
              })
            }
          </div>
        </div>
      </div>
    )
  };
};

const mapStateToProps = ({ videos }) => {
  return {
    videos
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadingVideos: (videos) => {
      dispatch({
        type: 'LOADING_VIDEOS',
        payload: videos
      })
    }
  };
};

export default compose(
  withInfoService(),
  connect(mapStateToProps, mapDispatchToProps)
)(VideoContainer);