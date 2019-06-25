import React from 'react';
import './homePage.css';
import bgimg from '../../assets/img/kaitlyn-baker-422999-unsplash.jpg';

const HomePage = () => {
   return (
   <section> 
    <div className="header">
        <a className="header__link" href="index.html">
            <h1 className="header__logo">Politico</h1>
        </a>
        <section className="menu__section">
            <ul className="menu">
                <li><a className="menu__item" href="signup.html">sign up</a></li>
                <li><a className="menu__item" href="signin.html">sign in</a></li>
            </ul>
        </section>
    </div>
    <div id="overlay">
        <div id="text">
            <h1 className="overlay-text">Politico - An Online Voting App for both Politicians and Citizens</h1>
            <p>Building trust through transparency</p>
        </div>
    </div>
    <img src={bgimg} alt="Nature" className="responsive" />
    <div className="copyright_footer">
        <div className="copyright_footer--content">
            © Copyright 2019&nbsp;<a href="">Politico</a>. All Rights Reserved.&nbsp;<a href="">
                Privacy Policy</a>&nbsp;•&nbsp;<a href="">Terms of Use</a>
        </div>
    </div>
    </section>
  )
}

export default HomePage;  