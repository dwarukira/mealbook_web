import React from "react"
import { Route, Redirect } from "react-router-dom"
import { API } from "../api";

export const AuthRoute = ({ component: Component, ...rest })  => {
    let service = new API()

    return (
        <Route {...rest} render={props => (
            service.loggedIn()
                ? <Component {...props} />
                : <Redirect to={{ pathname: '/auth/login', state: { from: props.location } }} />
        )} />
    )
}


export const AdminRoute = ({ component: Component, ...rest })  => {
    let service = new API()

    return (
        <Route {...rest} render={props => (
            service.isAdmin()
                ? <Component {...props} />
                : <Redirect to={{ pathname: '/auth/login', state: { from: props.location } }} />
        )} />
    )
}


