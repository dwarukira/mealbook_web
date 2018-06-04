import React from "react"
import { Link } from "react-router-dom";

const Nav = (props) => (
		<nav className="navbar is-transparent">
		  <div className="navbar-brand">
		    <a className="navbar-item" href="https://bulma.io">
		     <h1> Meals </h1>
		    </a>
		    <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
		      <span></span>
		      <span></span>
		      <span></span>
		    </div>
		  </div>

		  <div id="navbarExampleTransparentExample" className="navbar-menu">
		    <div className="navbar-start">
					<Link className="navbar-item" to="/">
					 	Menu
		      </Link>

					 <Link className="navbar-item" to="/orders">
					 	Orders
		      </Link>
		    </div>

		    <div className="navbar-end">
		      <div className="navbar-item">
		      		<div className="navbar-item has-dropdown is-hoverable">
		        <a className="navbar-link" href="/documentation/overview/start/">
		          Docs
		        </a>

		        <div className="navbar-dropdown is-boxed">
		          <a className="navbar-item" href="/documentation/overview/start/">
		            Overview
		          </a>
		          <a className="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
		            Modifiers
		          </a>
		          <a className="navbar-item" href="https://bulma.io/documentation/columns/basics/">
		            Columns
		          </a>
		          <a className="navbar-item" href="https://bulma.io/documentation/layout/container/">
		            Layout
		          </a>
		          <a className="navbar-item" href="https://bulma.io/documentation/form/general/">
		            Form
		          </a>
		          <hr className="navbar-divider"/>
		          <a className="navbar-item" href="https://bulma.io/documentation/elements/box/">
		            Elements
		          </a>
		          <a className="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
		            Components
		          </a>
		        </div>

		      </div>
		      </div>
		    </div>
		  </div>
		</nav>
)


export default Nav;
