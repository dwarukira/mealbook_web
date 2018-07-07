import React, { Component } from 'react'
import { AdminNav } from "../components/NavBar"

export default class DashBoard extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="">
         <AdminNav />          
        </div>
        <div className="">

        </div>
        <div className="container class">
         {this.props.children}
        </div>
      </React.Fragment>
    )
  }
}
