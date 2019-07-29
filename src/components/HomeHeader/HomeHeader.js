import React from 'react';
import { Link } from 'react-router-dom';
import './HomeHeader.css';

const Header = () => {
    return (
        <div className="header">
        <Link className="header__link" to="/">
          <h1 className="header__logo">Politico</h1>
        </Link>
        <section>
          <ul className="menu">
            <li><Link className="menu__item" to="/signup">
              sign up
            </Link></li>
            <li><Link className="menu__item" to="/signin">
              sign in
            </Link></li>
          </ul>
        </section>
      </div> 
    );
}

export default Header;