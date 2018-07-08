import React from "react"
import {connect} from "react-redux"
import { addOrders } from "../actions/order"

class Cart extends React.Component{

    checkout = () => {
        this.props.dispatch(addOrders(this.props.cart))
    }

    render(){
        const items = this.props.cart.map(item=>(
            <div key={item.meal.id}>
                <p>{item.meal.name} - {item.quanity}</p>
            </div>
        ))
        
        return(
            <React.Fragment>
                <button className="btn btn-primary" onClick={this.checkout}>Check out<span>{items.length}</span></button>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    cart:state.cart
})

export default connect(mapStateToProps) (Cart)
