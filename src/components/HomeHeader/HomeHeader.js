import React from 'react';
import { Link } from 'react-router-dom';
import './HomeHeader.css';

const Header = () => {
    return (
        <div className="header">
        <a className="header__link" href="index.html">
          <h1 className="header__logo">Politico</h1>
        </a>
        <section className="menu__section">
          <ul className="menu">
            <Link className="menu__item" to="/">
              sign up
            </Link>
            <Link className="menu__item" to="/">
              sign in
            </Link>
          </ul>
        </section>
      </div> 
    );
}

export default Header;