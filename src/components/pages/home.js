import React from 'react';
import { SectionHeader } from '../section';
import FooterAdd from '../footer-add';
import VideoContainer from '../../containers/video-container';
import { PostMinicardContainer, PostAsideContainer } from '../../containers/post-container';
import { NewsAsideContainer, NewsCardContainer, NewsMinicardContainer } from '../../containers/news-container';
import { FormNewsletter } from '../form';
import { PostFeatured } from '../post';

const Home = () => {
  return (
    <>
      {/* Featured Post Area */}
      <div className="featured-post-area">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-8">
              <div className="row">
                <PostFeatured />
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              {/* Latest Posts Widget */}
              <PostAsideContainer />
            </div>
          </div>
        </div>
      </div>

      {/* Popular News Area */}
      <div className="popular-news-area section-padding-80-50">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
              <SectionHeader
                title="Popular News" />
              <PostMinicardContainer />
            </div>
            <div className="col-12 col-lg-4">
              <SectionHeader
                title="Info" />
              {/* Popular News Widget */}
              <NewsAsideContainer />
              {/* Newsletter Widget */}
              <FormNewsletter />
            </div>
          </div>
        </div>
      </div>

      {/* Video Post Area */}
      <VideoContainer />

      {/* Editorial Post Area */}
      <div className="editors-pick-post-area section-padding-80-50">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-7 col-lg-9">
              <SectionHeader
                title="Editor’s Pick" />
              <NewsCardContainer />
            </div>
            <div className="col-12 col-md-5 col-lg-3">
              <SectionHeader
                title="World News" />
              <NewsMinicardContainer />
            </div>
          </div>
        </div>
      </div>
      <FooterAdd />
    </>
  )
};

export default Home;