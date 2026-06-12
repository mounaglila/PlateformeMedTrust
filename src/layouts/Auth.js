import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Login from "views/auth/Login.js";
import Register from "views/auth/Register.js";
import Forget from "views/auth/Forget.js";

export default function Auth() {
  return (
    <Switch>
      <Route path="/auth/login" exact component={Login} />
      <Route path="/auth/register" exact component={Register} />
      <Route path="/auth/forget" exact component={Forget} />
      <Redirect from="/auth/Forget" to="/auth/forget" />
      <Redirect from="/auth/Login" to="/auth/login" />
      <Redirect from="/auth" to="/auth/login" />
    </Switch>
  );
}
