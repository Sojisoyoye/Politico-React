import React, { Fragment } from 'react';
import FormHeader from '../../components/FormHeader/FormHeader';
import SignupForm from '../../components/SignupForm/SignupForm';
import SigninRequest from '../../components/Request/SigninRequest'
import Footer from '../../components/Footer/Footer';

const SignupPage = () => (
    <Fragment>
        <div className="app_signup_layout">
            <div className="app_signup_layout_content">
                <FormHeader />
                <SignupForm />
                <SigninRequest />
                <Footer />
            </div>
        </div>
  </Fragment>
);

export default SignupPage;