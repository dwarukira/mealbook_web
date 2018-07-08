import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom"
import { AppRoutes , AuthRoutes, DashBoard} from "./routes"
import { AuthRoute, AdminRoute } from './components/Auth';

class App extends Component {
  render() {
    return (
      <Switch>
          <Route path={`/auth`} component={AuthRoutes}/>
          <AdminRoute path={`/d`}  component={DashBoard}/>
          <AuthRoute path="/" component={AppRoutes}/>      
      </Switch>
    );
  }
}

export default App;
