import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as authActions from '../../actions/authActions/authActions';

import './SignupForm.css';
import ErrorDisplay from '../ErrorDisplay/ErrorDisplay';

class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            othername: '',
            email: '',
            password: '',
            phonenumber: '',
            passporturl: '' 
        }
    };

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });  
    }

    onSubmit = (event) => {
        event.preventDefault();
        const { signupUser } = this.props
        const form = document.querySelector('form');
        const formData = new FormData(form);
    
        signupUser(formData); 
    }

    render() {
        const {
            auth: { isAuthenticated, isAdmin, signupErrors }
        } = this.props;
        
        if (isAuthenticated) {
            if (isAdmin === 'false') {
                return <Redirect to="/dashboard" />;
            }
            return <Redirect to="/adminpage" />;
        }

        return (
            <Fragment>
                <div className="app_signup_signup_sheet_media_container">
                    <div className="app_signup_signup_sheet_content_container">
                        <h1 className="app_signup_signup_sheet_info_message">
                            Get started—Sign up for a Politico account!
                        </h1>
                <div className="SignupTabContainer">
                 <div className="SignupTabContainer__form">
                <form
                    className="app_signup_signup_sheet_signup_form"
                    onSubmit={this.onSubmit}
                >{signupErrors.length ? <ErrorDisplay errors={signupErrors} /> : null}
                    <div className="app_signup_text_input_outer">
                        <label>
                            <div className="app_signup_text_input_label">
                                <span>First Name</span>
                            </div>
                            <input
                                type="text"
                                id="firstname"
                                name="firstname"
                                className="app_signup_text_input_input"
                                onChange={this.onChange}
                                required
                            />
                        </label>
                    </div>
                    <div className="app_signup_text_input_outer">
                        <label>
                            <div className="app_signup_text_input_label">
                                <span>Last Name</span>
                            </div>
                            <input
                                type="text"
                                id="lastname"
                                name="lastname"
                                className="app_signup_text_input_input"
                                onChange={this.onChange}
                                required
                            />
                        </label>
                    </div>
                    <div className="app_signup_text_input_outer">
                        <label>
                            <div className="app_signup_text_input_label">
                                <span>Other Name</span>
                            </div>
                            <input
                                type="text"
                                id="othername"
                                name="othername"
                                className="app_signup_text_input_input"
                                onChange={this.onChange}
                            />
                        </label>
                    </div>
                    <div className="app_signup_text_input_outer">
                        <label>
                            <div className="app_signup_text_input_label">
                                <span>Email</span>
                            </div>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="app_signup_text_input_input"
                                onChange={this.onChange}
                                required
                            />
                        </label>
                    </div>
                    <div className="app_signup_text_input_outer">
                        <label>
                            <div className="app_signup_text_input_label">
                                <span>Password</span>
                            </div>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="app_signup_text_input_input"
                                onChange={this.onChange}
                                required
                            />
                        </label>
                    </div>
                    <div className="app_signup_text_input_outer">
                        <label>
                            <div className="app_signup_text_input_label">
                                <span>Phone Number</span>
                            </div>
                            <input
                                type="number"
                                id="phonenumber"
                                name="phonenumber"
                                className="app_signup_text_input_input"
                                onChange={this.onChange}
                                required
                            />
                        </label>
                    </div>
                    <div className="app_signup_text_input_outer">
                        <label>
                            <div className="app_signup_text_input_label">
                                <span>Passport Url</span>
                            </div>
                            <input
                                type="file"
                                id="passport"
                                name="passporturl"
                                className="app_signup_text_input_input"
                                onChange={this.onChange}
                                required
                            />
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="signup_signup_button"
                        id="sign_up_button"
                    >
                                        Sign Up
                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                </Fragment>
        )
    }
};

const mapStateToProp = state => ({
    auth: state.auth
})

SignupForm.propTypes = {
    signupUser: PropTypes.func.isRequired,
    auth: PropTypes.shape({
        isAdmin: PropTypes.string,
        isAuthenticated: PropTypes.bool,
        signupErrors: PropTypes.array
    }).isRequired,
};
  
const mapActionsToProp = { signupUser: authActions.signupUser };

export default connect(
    mapStateToProp,
    mapActionsToProp
  )(SignupForm);
