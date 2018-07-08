import React ,{Component} from "react"
import { Link } from "react-router-dom";

import styles from "./css/nav.css";
import { connect } from "react-redux";
import  Cart  from "./Cart";

class  Nav  extends Component{
	
	render(){
		return(
			<nav className={styles.nav}>
				{ (this.props.cart) ? (<Cart className={styles.link} />) : ""}
				<div className={styles.linkitem}>
					<Link to="/"  className={styles.link}>Menu</Link>
				</div>
				

				<div className={styles.linkitem}>
					<Link to="/orders" className={styles.link}>Orders</Link>
				</div>
			</nav>
		)
	}

}

const mapStateToProps = (state) => ({
	cart:state.cart
})

export default connect(mapStateToProps)(Nav)
