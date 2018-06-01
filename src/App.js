import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom"
import { AppRoutes , AuthRoutes} from "./routes"

class App extends Component {
  render() {
    return (
      <Switch>
          <Route path="/" exact component={AppRoutes}/>
          <Route path={`/auth`} component={AuthRoutes}/>
      </Switch>
    );
  }
}

export default App;
