import React from 'react';

const Fact = (props) => {
  const { counter, title, text } = props;

  return (
    <div className="col-12 col-sm-6 col-lg-3">
      <div className="single-cool-fact d-flex align-items-center">
        <h3><span className="counter">{counter}</span></h3>
        <div className="cf-text">
          <h6>{title}</h6>
          <span>{text}</span>
        </div>
      </div>
    </div>
  )
};

export default Fact;