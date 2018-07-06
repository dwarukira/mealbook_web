import React from "react"
import style from "./css/menu.css"


export const MenuItem = (props) => {
    const { meal } = props.meal
    console.log(meal);
    
    function addcart(){
		props.addCart(meal, 1)
    }

    function remove(){
        props.remove(meal)
    }
    return (
        <div className={`card `+ style.image}>
            <img className="card-img-top" src={meal.photo} alt=""/>
            <div className="card-body">
                <h5 className="card-title">{meal.name}</h5>
                <p className="card-text">KSH {meal.price}</p>
                <div>
                    <button onClick={addcart} className="btn btn-primary">Add to cart</button>
                    {/* <button onClick={remove} className="btn btn-primary">Remove</button> */}
                </div>
            </div>
        </div>
    )
}
