import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signoutUser } from '../../actions/authActions/authActions';
import './GeneralHeader.css';

const GeneralHeader = () => {
    const signOut = () => {
        signoutUser();
    }
    
    return (
        <div className="header">
        <Link className="header__link" to="/">
          <h1 className="header__logo">Politico</h1>
        </Link>
        <section>
          <ul className="menu">
          <li>
            <a onClick={signOut} className="menu__item" href="/">
              sign out
            </a>
            </li>
          </ul>
        </section>
      </div> 
    );
} 

export default connect(null, { signoutUser })(GeneralHeader);
