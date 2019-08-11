import React from 'react';
import { SectionHeader } from '../section';
import { PagerPost } from '../pager';
import { PostMinicardContainer, PostAsideContainer, PostContainer } from '../../containers/post-container';
import { FormComment, FormNewsletter } from '../form';
import { PostAuthor } from '../post';
import { NewsAsideContainer } from '../../containers/news-container';
import { CommentAsideContainer, CommentMinicardContainer } from '../../containers/comment-constainer';

const Post = () => {
  return (
    <>
      <div className="blog-area section-padding-0-80">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
              <PostContainer />
              <PostAuthor
                name="James Smith"
                position="The Author"
                imageUrl="bg-img/32.jpg"
                linkUrl="post"
                text="Donec turpis erat, scelerisque id euismod sit amet, fermentum vel dolor. Nulla facilisi. Sed pellen tesque lectus et accu msan aliquam. Fusce lobortis cursus quam, id mattis sapien." />
              <PagerPost />
              <SectionHeader
                title="Related" />
              <PostMinicardContainer />
              <CommentMinicardContainer />
              <FormComment />
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

export default Post;