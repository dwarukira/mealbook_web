import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import styles from "./css/meallist.css"
import { getMeals, addMenu, deleteMeal } from '../actions/meals';
import { Loader } from '../components/Loader';
import { Meal } from '../components/Meal';

class MealList extends Component {
  componentWillMount(){
    this.props.dispatch(getMeals())
  }
  
  addmenu = (meal) => {
    this.props.dispatch(addMenu(meal))
  }

  delete = (meal) => {
    this.props.dispatch(deleteMeal(meal))
  }
  render() {
    const {loading, meals } = this.props.meals
    if(loading){
      return (
        <Loader/>
      )
    }
    
    const meallist = meals.map(meal => (
      <Meal meal={meal} key={meal.id} addmenu={this.addmenu} delete={this.delete}/>
    ))

    return (
      <div className='grid'>
        <div className={`columns ${styles.columns}`}>
    
      <div className="card">
        <div className="card-title">
          <h4>Meals</h4>
        </div>
        <div className="card-body">
          <div className="table-responsive table-bordered table-striped">
              <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>by</th>
                        <th>Posted on</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                  {meallist}
                </tbody>
              </table>
          </div>
    </div>
    </div>
    </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  meals:state.meals
})


export default connect(mapStateToProps)(MealList)
