import React from "react"
import style from "./css/menu.css"


export class MenuItem extends React.Component{

    state = {
        quantiy:1,
        close:true
    }


    addcart = () => {
        const { meal } = this.props.meal        
        this.props.addCart(meal, this.state.quantiy)
    }

   remove = () => {
        const { meal } = this.props.meal
        this.props.remove(meal)
    }

    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
        console.log(this.state);
        
    }

    render(){
        const { meal } = this.props.meal
        return (
            <React.Fragment>
            <div className={`card `+ style.image}>
                <img className="card-img-top" src={meal.photo} alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{meal.name}</h5>
                    <p className="card-text">KSH {meal.price}</p>
                    <div>
                        <button className="btn btn-primary" data-toggle="modal" data-target={`#${meal.id}`}>Add to cart</button>
                        {/* <button onClick={remove} className="btn btn-primary">Remove</button> */}
                    </div>
                </div>
            </div>
            
            <div className="modal fade" id={meal.id} tabIndex="-1" role="dialog" aria-labelledby={`#${meal.id}`} aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id={`#${meal.id}`}>How many {meal.name} do you want?.</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <input type="number" value={this.state.quantiy} onChange={this.handleChange} name="quantiy"/>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" onClick={this.addcart} data-dismiss="modal">Add </button>
                </div>
                </div>
            </div>
            </div>

            </React.Fragment>
        )
    }
}
