import React from 'react';
import { Link } from 'react-router';

const Logo = () => {
  return (
      <div>
        <div className="logo-wrapper">
          <Link to={"/"}>
            로고
          </Link>
        </div>
      </div>
  );
};

export default Logo;