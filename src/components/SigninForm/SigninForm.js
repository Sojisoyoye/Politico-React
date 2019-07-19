import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as authActions from '../../actions/authActions/authActions';

import './SigninForm.css';
import ErrorDisplay from '../ErrorDisplay/ErrorDisplay';

class SigninForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    };

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });  
    }

    onSubmit = (event) => {
        event.preventDefault();
        const { signinUser } = this.props;
        const userData = {
            email: this.state.email,
            password: this.state.password
        }

        signinUser(userData); 
    }

    removeError = () => {
        const {
            auth: { loginErrors },
            clearLoginErrors
        } = this.props;
        if (loginErrors.length) clearLoginErrors();
    }

    render() {
        const {
            auth: { isAdmin, loginErrors }
        } = this.props;

        return (
            <Fragment>
                <div className="app_signup_signup_sheet_media_container">
                    <div className="app_signup_signup_sheet_content_container">
                        <h1 className="app_signup_signup_sheet_info_message">
                        Sign in to your account.
                        </h1>
                <div className="SigninTabContainer">
                 <div className="SigninTabContainer__form">
                <form
                    className="app_signup_signup_sheet_signup_form"
                    onSubmit={this.onSubmit}
                >{loginErrors.length ? <ErrorDisplay errors={loginErrors} /> : null}
                    <div className="app_signup_text_input_outer">
                        <label>
                            <div className="app_signup_text_input_label">
                                <span>Email</span>
                            </div>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="app_signin_text_input_input"
                                onChange={this.onChange}
                                onFocus={this.removeError}
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
                                className="app_signin_text_input_input"
                                onChange={this.onChange}
                                onFocus={this.removeError}
                                required
                            />
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="sign_in_button"
                        id="sign_up_button"
                    >
                                        Sign In
                    </button>
                                    <div className="app_signin_forgot_password">
                                    <a href="password.html">Forgot Password?</a>
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                </Fragment>
        )
    }
};

SigninForm.propTypes = {
    signinUser: PropTypes.func.isRequired,
    auth: PropTypes.shape({
        isAdmin: PropTypes.bool,
        loginErrors: PropTypes.array
    }).isRequired,
    clearLoginErrors: PropTypes.func.isRequired
}

const mapStateToProp = state => ({
    auth: state.auth
})

const mapActionsToProp = { signinUser: authActions.signinUser, clearLoginErrors: authActions.clearLoginErrors };

export default connect(
    mapStateToProp,
   mapActionsToProp
)(SigninForm);
  