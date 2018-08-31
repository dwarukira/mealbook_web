import React, { Component } from "react";
import { connect } from "react-redux";

import { getUserOrders, changeOrder } from "../actions/order";
import { Order } from "../components/Order";

class Orders extends Component {
  componentDidMount() {
    this.props.dispatch(getUserOrders());
  }

  change = order => {
    this.props.dispatch(changeOrder);
  };

  render() {
    const orders = this.props.orders.orders.map(order => (
      <Order order={order} key={order.id} onChange={this.change} />
    ));
    if (orders.length === 0 && !this.props.orders.loading) {
      return (
        <div className="content">
          <h3> You don't have any orders yet. </h3>
        </div>
      );
    }
    return <div className="row">{orders}</div>;
  }
}

const mapStateToProps = state => ({
  orders: state.orders
});

export default connect(mapStateToProps)(Orders);
