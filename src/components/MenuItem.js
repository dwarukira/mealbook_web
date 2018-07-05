import React from "react"
import "./css/menu.css"


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
        <div className="column is-2 is-mobile">
            <div className="card">
                <div className="">
                    <figure className="image" >
                        {/* <img src={meal.photo} alt={meal.name}/> */}
                    </figure>
                </div>
            <div className="card-content">
                <div className="media">
                <div className="media-content">
                    <p className="title is-4">{meal.name}</p>
                    <p className="subtitle is-6">{meal.price}</p>
                </div>
                </div>
                <footer className="card-footer">
                    <button onClick={addcart} className="card-footer-item">Add to cart</button>
                    <button onClick={remove} className="">Remove</button>
                </footer>
            </div>
            </div>
        </div>
    )
}
