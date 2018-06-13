import React from "react"
import { Link } from "react-router-dom";

import styles from "./css/nav.css";

const Nav = (props) => (
		<nav className={styles.nav}>
			<div className={styles.linkitem}>
				<Link to="/"  className={styles.link}>Menu</Link>
			</div>
			<div className={styles.linkitem}>
				<Link to="/d"  className={styles.link}>Meals</Link>
			</div>

			<div className={styles.linkitem}>
				<Link to="/orders" className={styles.link}>Orders</Link>
			</div>
			
		</nav>
)


export default Nav;
