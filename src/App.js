import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom"
import { AppRoutes , AuthRoutes, DashBoard} from "./routes"
import { AuthRoute } from './components/Auth';

class App extends Component {
  render() {
    return (
      <Switch>
          <Route path={`/auth`} component={AuthRoutes}/>
          <AuthRoute path={`/d`}  component={DashBoard}/>
          <AuthRoute path="/"  component={AppRoutes}/>      
      </Switch>
    );
  }
}

export default App;
