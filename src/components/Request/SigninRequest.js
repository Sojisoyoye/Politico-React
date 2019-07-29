import React from 'react';
import { Link } from 'react-router-dom';
import './SigninRequest.css';

const SigninRequest = () => (
    <div className="app_signup_sheet_signin">
                  Already have an account?
                  <Link
                    to="/signin"
                    className="app_signup_signup_sheet_signin_link"
                  >
                    Sign In
                  </Link>
                </div>
)

export default SigninRequest;
