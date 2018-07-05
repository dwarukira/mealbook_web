import React, { Component } from 'react'

import style from "./css/order.css"

export class Order extends Component {
  render() {
    console.log(this.props.order);
    
    let id = 101;  
    const meals = this.props.order.orders.map(meal => { 
      id++;
      return(    
          meal.meal ? <tr key={id}>
              <th scope="row">{meal.meal.id}</th>
              <td>{meal.meal.name}</td>
              <td>{meal.quantity}</td>
              <td><span className="badge badge-primary">ksh {meal.meal.price}</span></td>
          </tr>: <tr key={id}><td>N/A</td></tr>
      ) })
  
    return (
      <div className={`col-lg-6 `+ style.card}>
        <div className="card">  
        <div className="card-title">
          <h4 className={style.title}> Order {this.props.order.id} </h4>
          <div className={style.time}> 
            <p> Date {new Date(this.props.order.posted_on).toLocaleDateString() }</p>
            <p> Time {new Date(this.props.order.posted_on).toLocaleTimeString() }</p>
          </div>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover ">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Meal Name</th>
                  <th>Quantiy</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody className="">  
                {meals}
              </tbody>       
            </table>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default Order
