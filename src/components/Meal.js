import React from 'react'
import { Link } from "react-router-dom";
export const Meal = (props) => {
  function addToMenu(){
    props.addmenu(props.meal)
  }

  function deleteMeal(){
    props.delete(props.meal)
  }
 
  return (
    <div>
      {props.meal.name} - {props.meal.price} 
      <a onClick={addToMenu}>add</a> 
      <a onClick={deleteMeal}>Delete</a>
    </div>  
  )
} 
