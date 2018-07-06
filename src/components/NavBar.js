import React from "react"
import { Link } from "react-router-dom";

import styles from "./css/nav.css";

export const Nav = (props) => (
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


export const AdminNav = (props) => (
	<nav className="navbar navbar-expand-sm fixed-top">
		<div className="container">
			<Link className="navbar-brand" to="">MealBook</Link>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
				aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="nav navbar-nav mr-auto"></ul>
				<ul className="navbar-nav">
						<li className="nav-item">
							<Link className="nav-link" to="/">Home</Link>
						</li>
						<li className="nav-item">
							<Link to={`/d/add`} className="nav-link"> Add </Link>
						</li>
					
				</ul>
			</div>
		</div>
</nav>
)


