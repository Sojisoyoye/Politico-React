import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import './SideNav.css';

const SideNav = props => {
    const sideNavList = {
        userNav: [
            { navText: 'My votes', navLink: '/' },
            { navText: 'Vote', navLink: '/' },
            { navText: 'All political party', navLink: '/' },
            { navText: 'All government offices', navLink: '/' },
            { navText: 'Edit profile', navLink: '/' }
    ],
    adminNav: [
        { navText: 'Admin Section', navLink: '/' },
        { navText: 'Political parties', navLink: '/' },
        { navText: 'Government offices', navLink: '/' },
        { navText: 'Register user', navLink: '/' },
        { navText: 'Candidates', navLink: '/' }
]
    };

    const {
        auth: { isAdmin }
    } = props;

    const navMenu =
       isAdmin === 'false'
       ? sideNavList.userNav.map((nav, index) => {
           return (
               <li key={index}>
                   <NavLink to={nav.navLink.slice(1)} activeClassName="selected">
                   {nav.navText}
                   </NavLink>
               </li>
           );
       })
       : sideNavList.adminNav.map((nav, index) => {
           return (
               <li key={index}>
               <NavLink to={nav.navLink.slice(1)} activeClassName="selected">
               {nav.navText}
               </NavLink>
               </li>
           );
       });

       return (
           <aside className="aside">
               <nav className="aside__nav admin">
                   <ul>{navMenu}</ul>
               </nav>
           </aside>
       )
};
 
SideNav.propTypes = {
    auth: PropTypes.shape({
        isAdmin: PropTypes.string,
    }).isRequired,
}


 const mapStateToProp = state => ({
    auth: state.auth
 })

export default connect(mapStateToProp)(SideNav);
