import React from "react"


export const MenuItem = (props) => {
    const { meal } = props.meal
    function addcart(){
		props.addCart(meal, 1)
    }

    return (
        <div className="column is-2 is-mobile">
            <div className="card">
                <div className="card-image">
                    <figure className="image is-2by1">
                        <img src={meal.photo} alt={meal.name} />
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
                    <a onClick={addcart} className="card-footer-item">Add to cart</a>
                </footer>
            </div>
            </div>
        </div>
    )
}
