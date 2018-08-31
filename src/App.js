import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { AppRoutes, AuthRoutes, DashBoard } from "./routes";
import { AuthRoute, AdminRoute } from "./components/Auth";
import { NotFound } from "./pages/NotFound";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path={`/auth`} component={AuthRoutes} />
        <AdminRoute path={`/d`} component={DashBoard} />
        <AuthRoute path="/" component={AppRoutes} />
        <Route path="*" component={NotFound} />
      </Switch>
    );
  }
}

export default App;
