import React, { Component } from 'react';
import BrandLogo from '../../components/base/BrandLogo';
import Menu from '../../components/base/Menu';

class Header extends Component{
    render() {
      return (
              <div className="header">
                <Menu />
                <BrandLogo />
              </div>
      );
    }
}

export default Header;