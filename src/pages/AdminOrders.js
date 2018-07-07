import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getUserOrders , changeOrder, getOrders } from "../actions/order"
import { Order } from '../components/Order';
import { API } from '../api';
import { ORDER_FULLFILL_URI } from '../constants';



class AdminOrders extends Component {

  componentDidMount(){
    this.props.dispatch(getOrders())
  }

  fullfill = (id) => {
      alert("HI")
      let service = new API()
      service.api(`${ORDER_FULLFILL_URI}/${id}`,{
          method:"PUT",
          body:JSON.stringify({
              "fullfill":true
          })
      }).then(data=>{
        this.props.dispatch(getOrders())
      }).catch(err=>{
          alert(err)
      })
  }

  change = (order) => {
    this.props.dispatch(changeOrder)
  }

  render() {
    const orders = this.props.orders.orders.map(order => (
      <Order order={order}  key={order.id} onChange={this.change} admin={true} fullfill={this.fullfill}/>
    ))
    if(orders.length === 0 && !this.props.orders.loading){
      return (
        <div className="content">
          <h3> No orders in the system. </h3>
        </div>
      )
    }
    return (
      <div className="row">
        {orders}   
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  orders : state.all_orders
})


export default connect(mapStateToProps)(AdminOrders)
