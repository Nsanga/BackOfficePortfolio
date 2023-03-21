import React, { useState, useEffect } from 'react';
import { Router, Route, Switch, Redirect } from "react-router-dom";

import AuthLayout from "layouts/Auth/Auth.js";
import AdminLayout from "layouts/Admin/Admin.js";
import { history } from './helpers/history';
import isAuth from 'helpers/isAuth';
import { setAuthToken } from 'views/components/setAuthToken';


  setAuthToken(localStorage.getItem("token"));

function App() {


  return (
    <Router history={history}>
        {isAuth() ? (
            <Switch>
                <Route exact path="/admin/dashboard" render={(props) => <AdminLayout {...props} />} />
                <Route exact path="/admin/accueil" render={(props) => <AdminLayout {...props} />} />
                <Route exact path="/admin/realisation" render={(props) => <AdminLayout {...props} />} />
                <Route exact path="/admin/cv" render={(props) => <AdminLayout {...props} />} />
        
                <Redirect from = "*" to="/admin/dashboard" />
        
    </Switch>
        ) : (
            <Switch>
                <Route exact path="/auth/login" render={(props) => <AuthLayout {...props} />} />
                <Redirect to="/auth/login" />
    </Switch>
        )}
    
</Router>
  );
}

export default App;
