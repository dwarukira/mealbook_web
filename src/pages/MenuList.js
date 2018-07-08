import React, { Component } from 'react'

import { connect } from 'react-redux'
import { API } from "../api"
import { MENULIST_URI } from '../constants';
import { MenuItem } from '../components/MenuItem';

import { addCart, remove, getMenu } from "../actions"

import styles from "./css/menulist.css"
import { Cart } from '../components/Cart';

class MenuList extends Component {
  
  state = {
    meals:null
  }

  addCart = (meal, quanity) => {
    this.props.dispatch(addCart(meal, quanity))
  }

  remove = (meal) => {
    this.props.dispatch(remove(meal))
  }
  componentDidMount(){
    this.props.dispatch(getMenu());
  }

  render() {
    console.log(this.props.menu.menu.menu_items);
    
    if(this.props.menu.loading){
      return (<div> Loading... </div>)
    }

    const data = this.props.menu.menu.menu_items ? this.props.menu.menu.menu_items : [] 
    const menu =  data.map(meal => (
      <MenuItem meal={meal} addCart={this.addCart} key={meal.id} remove={this.remove}/>
    ))
    return (
    <div className={`columns ${styles.columns}`}>
          <h4>Meals</h4>
          <div className={styles.menu}>
            {menu}
          </div>
        </div>


    )
  }
}


const mapStateToProps = (state) => ({
  cart:state.cart,
  menu:state.menu
})


export default connect(mapStateToProps)(MenuList)
