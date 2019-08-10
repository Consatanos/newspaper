import React from 'react';
import logo from './logo.png';

const Logo = (props) => {
  const { classMod } = props;
  return (
    <div className={classMod}>
      <a href="/"><img src={logo} alt="" /></a>
    </div>
  )
};

export default Logo;