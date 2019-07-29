import React from 'react';
import { Link } from 'react-router-dom';
import './SignupRequest.css';

const SignupRequest = () => (
    <div className="app_signup_sheet_signin">
                  Don't have an account?
                  <Link
                    to="/signup"
                    className="app_signup_signup_sheet_signin_link"
                  >
                    Sign Up
                  </Link>
                </div>
)

export default SignupRequest;