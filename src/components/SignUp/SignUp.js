import React, { Component } from 'react';
import './SignUp.css';

class SignUp extends Component {
  render() {
    return (
      <div>
        <div className="app_signup_layout">
          <div className="app_signup_layout_content">
            <div className="app_signup_header_container">
              <div className="app_signup_header_outside">
                <a>
                  <div className="app_signup_header_logo">
                    <h1>Politico</h1>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
