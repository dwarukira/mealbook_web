import React, { Component } from 'react'
import { AdminNav } from "../components/NavBar"

export default class DashBoard extends Component {
  render() {
    return (
      <div className="">
        <div className="">
         <AdminNav />          
        </div>
        <div className="">

        </div>
        <div className="container">
         {this.props.children}
         </div>
      </div>
    )
  }
}
