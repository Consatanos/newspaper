import React from 'react';
import { Link } from 'react-router-dom';
import chat from './chat.png';
import like from './like.png';

const Post = (props) => {
  const { id, imageUrl, category, title, author, likeCount, commentCount } = props;

  return (
    <div className="single-blog-post featured-post single-post">
      <div className="post-thumb">
        <Link to={{ pathname: "/post", state: { id: id } }}><img src={`img/${imageUrl}`} alt="" /></Link>
      </div>
      <div className="post-data">
        <Link to={{ pathname: "/post", state: { id: id } }} className="post-catagory">{category}</Link>
        <Link to={{ pathname: "/post", state: { id: id } }} className="post-title">
          <h6>{title}</h6>
        </Link>
        <div className="post-meta">
          <p className="post-author">By <Link to="/">{author}</Link></p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu metus sit amet odio sodales placerat. Sed varius leo ac leo fermentum, eu cursus nunc maximus. Integer convallis nisi nibh, et ornare neque ullamcorper ac. Nam id congue lectus, a venenatis massa. Maecenas justo libero, vulputate vel nunc id, blandit feugiat sem.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur, purus imperdiet volutpat tincidunt, eros sem mollis quam, ut placerat urna neque at massa. Proin vitae pulvinar justo. Donec vel placerat enim, at ultricies risus. In posuere luctus sem, ac dapibus felis semper quis. Integer ex ante, semper at velit nec, ultrices aliquet diam. Donec gravida non metus blandit facilisis. Cras tincidunt, lorem aliquam molestie eleifend, libero dui volutpat dui, nec sodales massa libero ut metus. Mauris pretium elit ut dapibus consequat. Nam ut lorem nec sem dignissim gravida. Duis fringilla, augue eget lacinia tincidunt, neque leo maximus sem, sed tristique enim orci id quam.</p>
          <p>Donec turpis erat, scelerisque id euismod sit amet, fermentum vel dolor. Nulla facilisi. Sed pellentesque lectus et accumsan aliquam. Fusce lobortis cursus quam, id mattis sapien. Aliquam erat volutpat. Aliquam placerat, est quis sagittis tincidunt, ipsum eros posuere mi, ut finibus quam sem eget ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec commodo quis enim ac auctor. Ut et mollis felis, sit amet ultricies est. Suspendisse sed faucibus tortor.</p>
          <Link to="/" className="related--post">Related: Facebook announces changes to combat election meddling</Link>
          <p>Donec turpis erat, scelerisque id euismod sit amet, fermentum vel dolor. Nulla facilisi. Sed pellentesque lectus et accu msan aliquam. Fusce lobortis cursus quam, id mattis sapien. Aliquam erat volutpat. Aliquam placerat, est quis sagi ttis tincidunt, ipsum eros posuere mi, ut finibus quam sem eget ex. Interdum et malesuada fames ac ante ipsum pr imis in faucibus. Donec commodo quis enim ac auctor. Ut et mollis felis, sit amet ultricies est. Suspendisse sed faucibus tortor. </p>
          <div className="newspaper-post-like d-flex align-items-center justify-content-between">
            {/* Tags */}
            <div className="newspaper-tags d-flex">
              <span>Tags:</span>
              <ul className="d-flex">
                <li><a href="#">finacial,</a></li>
                <li><a href="#">politics,</a></li>
                <li><a href="#">stock market</a></li>
              </ul>
            </div>
            {/* Post Like & Post Comment */}
            <div className="d-flex align-items-center post-like--comments">
              <Link to="/" className="post-like"><img src={like} alt="" /> <span>{likeCount}</span></Link>
              <Link to="/" className="post-comment"><img src={chat} alt="" /> <span>{commentCount}</span></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Post;