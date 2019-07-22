import React, { Component } from 'react';
import officeIcon from '../../assets/img/icons8-office-80.png';
import resumeIcon from '../../assets/img/icons8-resume-80.png';
import groupIcon from '../../assets/img/icons8-user-groups-480.png'
import './AdminInfoDisplay.css';

 export class AdminInfoDisplay extends Component {
    render() {
        return (
        <div className="main">
        <section className="summary">
          <div className="summary__card">
            <div className="details">
              <p className="header">Total Political Parties</p>
              <h2 className="value">91</h2>
            </div>
            <div className="icon green">
            <img src={groupIcon} alt="group-icon" /></div>
          </div>
          <div className="summary__card">
            <div className="details">
              <p className="header">Total Government Offices</p>
              <h2 className="value">8,593</h2>
            </div>
            <div className="icon white">
            <img src={officeIcon} alt="office-icon" /></div>
          </div>
          <div className="summary__card">
            <div className="details">
              <p className="header">Total Candidates</p>
              <h2 className="value">37,593</h2>
            </div>
            <div className="icon green">
            <img src={resumeIcon} alt="candidate-icon" /></div>
          </div>
        </section>

        <section className="political">
        <div className="summary">
          <div className="admin-political">
            <div className="political__meta">
              <h3>Recently Added Political Party</h3>
            </div>
            <div className="table-wrapper no-flow">
              <table className="political__table">
                <thead>
                  <tr>
                    <th>Party ID</th>
                    <th>Party Name</th>
                    <th>HQ Address</th>
                    <th>Logo</th>
                    <th>Party Acroymn</th>
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