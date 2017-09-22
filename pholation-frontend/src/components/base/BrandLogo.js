import React from 'react';
import { Link } from 'react-router';

const Logo = () => {
  return (
      <div>
        <div className="logo-wrapper">
          <Link to={"/"}>
            PHOLATION
          </Link>
        </div>
      </div>
  );
};

export default Logo;