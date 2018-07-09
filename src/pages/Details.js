import React, {Component} from "react"
import { API } from "../api";
import { DASH_BOARD } from "../constants";


class Details extends Component{
    state = {
        total_orders:0,
        total_price:0,
        total_meals:0,
        orders:[]
    }
    componentWillMount(){
        let service = new API()
        service.api(DASH_BOARD).then(data=>{
            this.setState({total_orders:data.total_orders, total_price:data.total_price, total_meals:data.total_meals, orders:data.orders})
        })
    }

    render(){
        return (
            <div className="row">
                <div className="col-md-4">
    
                        <div className="card p-30">
                            <div className="media">
                                <div className="media-left meida media-middle">
                                    <span><i className="fa fa-usd f-s-40 color-primary"></i></span>
                                </div>
                                <div className="media-body media-text-right">
                                    <h2>{this.state.total_price}</h2>
                                    <p class="m-b-0">Total Revenue Today</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">

                        <div className="card p-30">
                        <div className="media">
                            <div className="media-left meida media-middle">
                                <span><i className="fa fa-usd f-s-40 color-primary"></i></span>
                            </div>
                            <div className="media-body media-text-right">
                                <h2>{this.state.total_orders}</h2>
                                <p class="m-b-0">Total Orders Today</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card p-30">
                        <div className="media">
                            <div className="media-left meida media-middle">
                                <span><i className="fa fa-usd f-s-40 color-primary"></i></span>
                            </div>
                            <div className="media-body media-text-right">
                                <h2>{this.state.total_meals}</h2>
                                <p class="m-b-0">Total Meals Today</p>
                            </div>
                        </div>
                </div>
                </div>
            </div>
        )
    }
}


export default Details;