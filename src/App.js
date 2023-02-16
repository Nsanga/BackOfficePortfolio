import React, { useState, useEffect } from 'react';
import { Router, Route, Switch, Redirect } from "react-router-dom";

import AuthLayout from "layouts/Auth/Auth.js";
import AdminLayout from "layouts/Admin/Admin.js";
import RouteGuard from "views/pages/component/RouteGuard";
import { history } from './helpers/history';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
//check user has JWT token

const token = localStorage.getItem("token");
 if (token) {
    setIsAuthenticated(token);
 }

  }, []);

  return (
    <Router history={history}>
    <Switch>
        <RouteGuard
            exact
            path="/admin/dashboard"
            component={AdminLayout}
        />
        <RouteGuard
               exact
               path="/auth/login"
               component={AuthLayout}
        />
        <Redirect to="/auth/login" />
    </Switch>
</Router>
  );
}

export default App;
