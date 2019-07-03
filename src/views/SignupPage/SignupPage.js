import React, { Fragment } from 'react';
import FormHeader from '../../components/FormHeader/FormHeader';
import Form from '../../components/Form/Form';
import SigninRequest from '../../components/Request/SigninRequest'
import Footer from '../../components/Footer/Footer';
// import './SignupPage.css';

const SignupPage = () => (
    <Fragment>
        <div className="app_signup_layout">
            <div className="app_signup_layout_content">
                <FormHeader />
                <Form />
                <SigninRequest />
                <Footer />
            </div>
        </div>
  </Fragment>
);

export default SignupPage;