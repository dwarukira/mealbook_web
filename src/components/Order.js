import React, { Component } from 'react'

export class Order extends Component {
  render() {
    let id = 101;
    console.log(this.props.order);
    
    const meals = this.props.order.orders.map(meal => { 
      id++;     
      return(
        <div className="" key={id}>
          <h2>{meal.meal? meal.meal.name : ''}</h2>
        </div>
      )})

    return (
      <div>
        {meals}
      </div>
    )
  }
}

export default Order
