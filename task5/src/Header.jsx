import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/horizontal">Horizontal Shapes Line</Link>
          </li>
          <li>
            <Link to="/vertical">Vertical Shapes Line</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
