import React, { Fragment } from 'react';
import FormHeader from '../../components/FormHeader/FormHeader';
import SigninForm from '../../components/SigninForm/SigninForm';
import SignupRequest from '../../components/Request/SignupRequest/SignupRequest';
import Footer from '../../components/Footer/Footer';

const SigninPage = () => (
    <Fragment>
        <FormHeader />
        <SigninForm />
        <SignupRequest />
        <Footer />
  </Fragment>
);

export default SigninPage;
