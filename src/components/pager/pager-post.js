import React from 'react';
import { Link } from 'react-router-dom';

const PagerPost = () => {
  return (
    <div className="pager d-flex align-items-center justify-content-between">
      <div className="prev">
        <Link to="/" className="active"><i className="fa fa-angle-left"></i> previous</Link>
      </div>
      <div className="next">
        <Link to="/">Next <i className="fa fa-angle-right"></i></Link>
      </div>
    </div>
  )
};

export default PagerPost;