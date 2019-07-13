import React from 'react';
import { Link } from 'react-router-dom';

 const GeneralHeader = () => {
    return (
        <div className="header">
        <Link className="header__link" to="/">
          <h1 className="header__logo">Politico</h1>
        </Link>
        <section>
          <ul className="menu">
            <li><Link className="menu__item" to="/">
              sign out
            </Link></li>
          </ul>
        </section>
      </div> 
    );
}

 export default GeneralHeader;