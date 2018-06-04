import React, { Component } from 'react'

import { connect } from 'react-redux'
import { API } from "../api"
import { MENULIST_URI } from '../constants';
import { MenuItem } from '../components/MenuItem';

import { addCart } from "../actions"

import styles from "./css/menulist.css"

class MenuList extends Component {
  
  state = {
    meals:null
  }

  addCart = (meal, quanity) => {
    this.props.dispatch(addCart(meal, quanity))
  }

  componentDidMount(){
    let api = new API()
    api.api(MENULIST_URI).then(data => {
      this.setState({meals:data}) 
    }).catch(err=>{
      console.log(err);
    })
  }

  render() {
    const menu_items = this.state.meals ? this.state.meals.menu_items : []
    const menu =  menu_items.map(meal => (
      <MenuItem meal={meal} addCart={this.addCart} key={meal.id}/>
    ))
    return (
    <div className={`columns ${styles.columns}`}>
        {menu}
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  cart:state.cart
})


export default connect(mapStateToProps)(MenuList)
