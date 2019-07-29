import React, { Component } from 'react';
import officeIcon from '../../assets/img/icons8-office-80.png';
import resumeIcon from '../../assets/img/icons8-resume-80.png';
import groupIcon from '../../assets/img/icons8-user-groups-480.png';
import './InfoDisplay.css';

export class InfoDisplay extends Component {
    render() {
        return (
            <div className="main">
            <section className="summary">
          <div className="summary__card">
            <div className="details">
              <p className="header1">All Political Parties</p>
              <h2 className="value">91</h2>
            </div>
            <div className="icon green">
            <img src={groupIcon} alt="group-icon" /></div>
          </div>
          <div className="summary__card">
            <div className="details">
              <p className="header1">Total Offices Voted</p>
              <h2 className="value">0</h2>
            </div>
            <div className="icon white">
            <img src={officeIcon} alt="office-icon" /></div>
          </div>
          <div className="summary__card">
            <div className="details">
              <p className="header1">Total Candidates Candidates</p>
              <h2 className="value">0</h2>
            </div>
            <div className="icon green">
            <img src={resumeIcon} alt="candidate-icon" /></div>
          </div>
        </section>

        <section className="political">
        <div className="summary">
          <div className="admin-political">
            <div className="political__meta">
              <h3 className="header1">My Vote History</h3>
            </div>
            <div className="table-wrapper no-flow">
              <table className="political__table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Office Name</th>
                    <th>Candidate</th>
                    <th>Political Party</th>
                  </tr>
                </thead>
                <tbody>
                    
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

            </div>
        )
    }
}