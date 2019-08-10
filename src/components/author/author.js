import React from 'react';

const Author = (props) => {
  const { name, position, imageUrl } = props;

  return (
    <div className="col-12 col-sm-6 col-lg-3">
      <div className="single-team-member">
        <img src={`/img/${imageUrl}`} alt="" />
        <div className="team-info">
          <h5>{name}</h5>
          <h6>{position}</h6>
        </div>
      </div>
    </div>
  )
};

export default Author;