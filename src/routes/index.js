import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../views/HomePage/HomePage';
import SignupPage from '../views/SignupPage/SignupPage';
import SigninPage from '../views/SigninPage/SigninPage';

const Routes = () => (
  <>
        <BrowserRouter>
            <Switch>
            <Route exact path="/" component={HomePage} />
                <Route exact path="/signup" component={SignupPage} />
                <Route exact path="/signin" component={SigninPage} />
            </Switch>
    </BrowserRouter>
  </>
);

export default Routes;
