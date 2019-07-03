import React from 'react';
import bgimg from '../../assets/img/kaitlyn-baker-422999-unsplash.jpg';
import './Main.css';

const Main = () => (
    <>
        <div id="overlay">
        <div id="text">
          <h1 className="overlay-text">
            Politico - An Online Voting App for both Politicians and Citizens
          </h1>
          <p>Building trust through transparency</p>
        </div>
      </div>
      <img src={bgimg} alt="Nature" className="responsive" />
    </>
);

export default Main;