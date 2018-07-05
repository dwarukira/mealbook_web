import React from 'react'
import { Link } from "react-router-dom";
import style from "./css/meal.css"

export const Meal = (props) => {
  function addToMenu(){
    props.addmenu(props.meal)
  }

  function deleteMeal(){
    props.delete(props.meal)
  }
  const meal = props.meal
  console.log(meal);
  
  return (
    <tr>
      <th scope="row" > 
      <div className="round-img">
        <a href=""><img src={props.meal.photo} alt=""/></a>
      </div>

      </th>
      <td>{meal.name}</td>
      <td>{meal.price}</td>    
      <td className="color-primary">{meal.caterer.username}</td>
      <td>{new Date(meal.posted_on).toLocaleDateString() }</td>
      <td><button className="btn" onClick={addToMenu}>Add</button></td>
       
  </tr>
  )
}
