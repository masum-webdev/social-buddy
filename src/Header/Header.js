import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-light bg-dark ">
      <a className="navbar-brand text-white" href="/home">
        <h4>Social Buddy</h4>
      </a>
    </nav>
  );
};

export default Header;