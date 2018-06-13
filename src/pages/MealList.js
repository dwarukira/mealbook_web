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
      <div className={styles}> 
        <Link to={`/d/add`}> Add </Link>
        {meallist}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  meals:state.meals
})


export default connect(mapStateToProps)(MealList)
