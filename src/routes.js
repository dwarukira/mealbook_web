import React  from "react"
import { Route  } from "react-router-dom"
import { App } from "./pages/App";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

export const DashBoard = (props) => {
    const { match } = props
    console.log(match);
    
    return (
        <React.Fragment>

        </React.Fragment>
    )
}



export const AppRoutes = (props) => {
    // const { match } = props    
    return (
        <React.Fragment>
            <App>
                
            </App>
        </React.Fragment>
    )
}


export const AuthRoutes = (props) => {
    const { match } = props;
    return (
        <React.Fragment>
            <Route path={`${match.url}/login`} component={Login} />
            <Route path={`${match.url}/register`} component={Register} />
        </React.Fragment>
    )
}
