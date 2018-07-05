import React, { Component } from 'react'

export default class DashBoard extends Component {
  render() {
    return (
      <div className="">
        <div className="">

          
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
