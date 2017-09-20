import React, { Component } from 'react';
import BrandLogo from 'components/base/BrandLogo';
import Menu from 'components/base/Menu';

class Header extends Component{
    render() {
      const { onClick } = this.props;
      return (
              <div className="header">
                <Menu onClick={onClick}/>
                <BrandLogo />
              </div>
      );
    }
}

export default Header;