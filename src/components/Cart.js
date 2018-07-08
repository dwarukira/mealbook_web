import React from "react"


export const Cart = (props) => {
    const items = props.cart.map(item=>(
        <div key={item.meal.id}>
            <p>{item.meal.name} - {item.quanity}</p>
        </div>
    ))
    
    return(
        <React.Fragment>
            <button className="btn btn-primary">Check out<span>{items.length}</span></button>
        </React.Fragment>
    )
}
