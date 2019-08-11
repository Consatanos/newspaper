import React from 'react';
import HeroAdd from './hero-add';
import { HeroContainer } from '../../containers/hero-container';

const Hero = () => {
  return (
    <div className="hero-area">
      <div className="container">
        <div className="row align-items-center">
          <HeroContainer />
          {/* Hero Add */}
          <HeroAdd />
        </div>
      </div>
    </div>
  )
};

export default Hero;