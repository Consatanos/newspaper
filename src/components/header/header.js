import React from 'react';

import Logo from '../logo';
import Login from '../login';
import Search from '../search';

const Header = () => {
  return (
    <header className="header-area">
      {/* Top Header Area */}
      <div className="top-header-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="top-header-content d-flex align-items-center justify-content-between">
                {/* Logo */}
                <Logo
                  classMod={'logo'} />
                {/* Login Search Area */}
                <div className="login-search-area d-flex align-items-center">
                  {/* Login */}
                  <Login />
                  {/* Search Form */}
                  <Search />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
};

export default Header;