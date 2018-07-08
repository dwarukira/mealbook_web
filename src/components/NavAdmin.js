import React from "react"
import { Link } from "react-router-dom";

import styles from "./css/nav.css";


export const AdminNav = (props) => (
	<nav className={styles.nav}>
			<div className={styles.linkitem}>
				<Link to="/"  className={styles.link}>Menu</Link>
			</div>
			<div className={styles.linkitem}>
				<Link to="/d"  className={styles.link}>Meals</Link>
			</div>

			<div className={styles.linkitem}>
				<Link to="/d/orders" className={styles.link}>Orders</Link>
			</div>

            <div className={styles.linkitem}>
				<Link to="/d/dashboard" className={styles.link}>Dashboard</Link>
			</div>
		</nav>
)

