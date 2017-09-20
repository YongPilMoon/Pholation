import React from 'react';
import {Link} from 'react-router';


const Menu = ({onClick}) => {
  return (
      <nav className="menu">
        <Link to={"/"}>
          <span  onClick={onClick} className="auth">회원가입</span>
        </Link>
        <Link to={"/"}>
          <span className="auth">로그인</span>
        </Link>
      </nav>
  );
};

export default Menu;