import React from 'react';
import background from './background.gif';

const FooterAdd = () => {
  return (
    <div className="footer-add-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer-add">
              <a href="#">
                <img src={background} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default FooterAdd;