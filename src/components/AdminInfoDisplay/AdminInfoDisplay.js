import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getParties }from '../../actions/partyActions/partyActions';
import officeIcon from '../../assets/img/icons8-office-80.png';
import resumeIcon from '../../assets/img/icons8-resume-80.png';
import groupIcon from '../../assets/img/icons8-user-groups-480.png';
import './AdminInfoDisplay.css';

class AdminInfoDisplay extends Component {
  componentDidMount() {
    this.props.getParties();
  } 

  render() {
    const { parties } = this.props.party;

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
              <h2 className="value">93</h2>
            </div>
            <div className="icon white">
            <img src={officeIcon} alt="office-icon" /></div>
          </div>
          <div className="summary__card">
            <div className="details">
              <p className="header">Total Candidates</p>
              <h2 className="value">593</h2>
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
                  </tr>
                </thead>
                <tbody>
                        {parties.map((party, index) => {
                          return (
                          <tr key={index}>
                            <td>{party.id}</td>
                            <td>{party.name}</td>
                            <td>{party.hqaddress}</td>
                            <td><img src={party.logourl} alt={party.name} /></td>
                        </tr>
                  )
                })}
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

const mapStateToProp = ({ party }) => ({
  party: party,
})

export default connect(mapStateToProp, { getParties })(AdminInfoDisplay);