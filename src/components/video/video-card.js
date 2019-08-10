import React from 'react';

const VideoCard = (props) => {
  const { imageUrl, videoUrl } = props;

  return (
    <div className="col-12 col-sm-6 col-md-4">
      <div className="single-video-post">
        <img src={`img/${imageUrl}`} alt="" />
        <div className="videobtn">
          <a href={videoUrl} className="videoPlayer"><i className="fa fa-play" aria-hidden="true"></i></a>
        </div>
      </div>
    </div>
  )
};

export default VideoCard;