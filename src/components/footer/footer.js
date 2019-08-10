import React from 'react';

import Logo from '../logo';
import NavigationListContainer from '../../containers/navigation-list-container';
import { ContactsFooter } from '../contacts';

const Footer = () => {
  return (
    <footer className="footer-area">
      {/* Main Footer Area */}
      <div className="main-footer-area">
        <div className="container">
          <div className="row">
            {/* Footer Widget Area */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="footer-widget-area mt-80">
                {/* Footer Logo */}
                <Logo
                  classMod={'footer-logo'} />
                {/* List */}
                <ContactsFooter />
              </div>
            </div>
            <NavigationListContainer />
          </div>
        </div>
      </div>
      {/* Bottom Footer Area */}
      <div className="bottom-footer-area">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12">
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer;