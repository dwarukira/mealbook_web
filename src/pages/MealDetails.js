import React, { Component } from "react"
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { API } from "../api";
import { MEAL_URI } from "../constants";
import style from "./css/mealdetails.css";
import { deleteMeal } from "../actions/meals";

class MealDetails extends Component{
    state ={
        meal:this.props.meal ? this.props.meal: null,
        loading:false,
        error:null
    }
    componentWillMount(){
        if(!this.state.meal){
            console.log(this.state);
            
            this.setState({loading:true})
            const meal_id = this.props.match.params.id
            let service =  new API()
            service.api(MEAL_URI+"/"+meal_id).then(res => {
                this.setState({meal:res, loading:false})
            }).catch(err => {
                this.setState({error:err, loading:false})
            })
        }
    }

    handleDelete = () => {
        this.props.dispatch(deleteMeal(this.state.meal))
    }

    render(){
        if(this.state.loading){
            return (
                <p>Loading ...</p>                
            )
        }

        if(this.state.error){
            return (
                <p>{this.state.error.response.status}</p>
            )
        }
        
        return (
            <React.Fragment>
            <div className="card">
                <div className="row">
                    <div className={`col-md-6 ${style.item_photo}`}>
                        <img src={this.state.meal.photo} className={style.img_thumbnail} alt=""/>
                    </div>

                    <div className="col-md-6">
                        <div className={style.buttons}>
                            <Link to={`/d/meal/edit/`+this.state.meal.id} className="btn btn-primary">Edit</Link>
                            <button className="btn btn-danger" data-toggle="modal" data-target="#remove">Remove</button>

                        </div>
                        <table className="table table-hover table-bordered">
                            <thead>
                                <tr>
                                    <th>
                                        #
                                    </th>
                                    <th>
                                        Details
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                
                                    <td>
                                        Name
                                    </td>
                                    <td>
                                        {this.state.meal.name}
                                    </td>
                                </tr>
                                <tr className="active">
                                    
                                    <td>
                                        Price
                                    </td>
                                    <td>
                                        {this.state.meal.price}
                                    </td>
                                </tr>
                                <tr className="success">
                                    
                                    <td>
                                        Date
                                    </td>
                                    <td>
                                        {new Date(this.state.meal.posted_on).toLocaleDateString()}
                                    </td>
                                </tr>
                                <tr className="warning">
                                
                                    <td>
                                        Added by
                                    </td>
                                    <td>
                                        {this.state.meal.caterer.username}
                                    </td>
                                </tr>
                                <tr className="danger">
                                    <td>
                                        Orders
                                    </td>
                                    <td>

                                    </td>
                                </tr>
                            </tbody>
                        </table> 
                    </div>
                </div>
            </div>

            <div class="modal fade" id="remove" tabIndex="-1" role="dialog" aria-labelledby="#remove" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Are you sure you want to delete {this.state.meal.name}?.</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    Removing this meal my have side effects. Are you sure you want to continue.
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-danger" onClick={this.handleDelete}>Save changes</button>
                </div>
                </div>
            </div>
            </div>
            </React.Fragment>
        );
    }
}


const mapStateToProps = (state, props) => {
    if(props.match.params.id){
        return {
            meal:state.meals.meals.find(item=>item.id === props.match.params.id)
        }
    } 
    return { meal:null }
}

export default connect(mapStateToProps) (MealDetails);