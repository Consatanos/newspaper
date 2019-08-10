import React from 'react';

const SectionHeader = (props) => {
  const { title } = props;

  return (
    <div className="section-heading">
      <h6>{title}</h6>
    </div>
  )
};

export default SectionHeader;