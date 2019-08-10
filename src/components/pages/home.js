import React from 'react';
import FooterAdd from '../footer-add';
import VideoContainer from '../../containers/video-container';
import { SectionHeader } from '../section';

const Home = () => {
  return (
    <>
      HOME PAGE

        {/* Popular News Area */}
      <div className="popular-news-area section-padding-80-50">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
              <SectionHeader
                title="Popular News" />
            </div>
            <div className="col-12 col-lg-4">
              <SectionHeader
                title="Info" />
              {/* Popular News Widget */}

              {/* Newsletter Widget */}

            </div>
          </div>
        </div>
      </div>

      <VideoContainer />
      <FooterAdd />
    </>
  )
};

export default Home;