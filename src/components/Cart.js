import React from "react"


export const Cart = (props) => {
    console.log(props.cart)
    const items = props.cart.map(item=>(
        <div key={item.meal.id}>
            <p>{item.meal.name} - {item.quanity}</p>
        </div>
    ))

    return(
        <div>
            {items}
        </div>
    )
}
