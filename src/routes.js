import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/SignUp';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/register" component={SignUp} />
        </Switch>
    </BrowserRouter>
);

export default Routes;