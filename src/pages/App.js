import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Nav from "../components/NavBar"

export class App extends Component {
  static propTypes = {

  }

  render() {
    return (
      <React.Fragment>
      		<Nav />
          <div className="container">
            {this.props.children}
          </div>
      </React.Fragment>
    )
  }
}


App.propTypes = {
    classNamees: PropTypes.object
}

export default App
