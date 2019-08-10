import React from 'react';
import { FormNewsletter } from '../form';
import { PostAsideContainer, PostCardContainer } from '../../containers/post-container';
import { NewsAsideContainer } from '../../containers/news-container';
import { CommentAsideContainer } from '../../containers/comment-constainer';

const Categories = () => {
  return (
    <>
      <div className="blog-area section-padding-0-80">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
              <PostCardContainer />
            </div>
            <div className="col-12 col-lg-4">
              {/* Latest Posts Widget */}
              <PostAsideContainer />
              {/* Popular News Widget */}
              <NewsAsideContainer />
              {/* Newsletter Widget */}
              <FormNewsletter />
              {/* Latest Comments Widget */}
              <CommentAsideContainer />
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Categories;