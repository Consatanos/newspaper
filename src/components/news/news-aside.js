import React from 'react';
import { Link } from 'react-router-dom';

const NewsAside = (props) => {
  const { title, date, num } = props;

  return (
    <div className="single-popular-post">
      <Link to="/">
        <h6><span>{num}.</span> {title}</h6>
      </Link>
      <p>{date}</p>
    </div>
  )
};

export default NewsAside;