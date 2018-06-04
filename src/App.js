import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom"
import { AppRoutes , AuthRoutes} from "./routes"

class App extends Component {
  render() {
    return (
      <Switch>
          <Route path={`/auth`} component={AuthRoutes}/>
          <Route path="/"  component={AppRoutes}/>
      </Switch>
    );
  }
}

export default App;
