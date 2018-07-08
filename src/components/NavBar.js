import React ,{Component} from "react"
import { Link } from "react-router-dom";

import styles from "./css/nav.css";
import { connect } from "react-redux";
import  Cart  from "./Cart";
import { API } from "../api";

class  Nav  extends Component{
	
	render(){
		const service = new API()
		return(
			<nav className={styles.nav}>
				{ (this.props.cart) ? (<Cart className={styles.link} />) : ""}
				<div className={styles.linkitem}>
					<Link to="/"  className={styles.link}>Menu</Link>
				</div>
				

				<div className={styles.linkitem}>
					<Link to="/orders" className={styles.link}>Orders</Link>
				</div>

				{service.isAdmin() ? (<div className={styles.linkitem}>
											<Link to="/d" className={styles.link}>Admin</Link>
										</div>):""}
			</nav>
		)
	}

}

const mapStateToProps = (state) => ({
	cart:state.cart
})

export default connect(mapStateToProps)(Nav)
