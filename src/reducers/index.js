import { combineReducers } from 'redux';

import { orders, all_orders } from "./orders"
import { meals , meal, addmeal} from "./meals";
import { 
    FETCH_MENU_BEGIN, 
    FETCH_MENU_FAILURE, 
    FETCH_MENU_SUCCESS, 
    REMOVE_CART} 
    from "../actions/types";

const cart = (state = [] , action) =>{
    switch(action.type){
        case 'ADD_CART':
            const checkItem = state.filter(item => item.meal.id === action.payload.meal.id)[0]
            if(checkItem){
                const item_index = state.indexOf(checkItem)
                state[item_index].quanity = state[item_index].quanity +  action.payload.quanity
                return [...state]
            }
            return [...state , {meal:action.payload.meal, quanity:action.payload.quanity}]
        
        case REMOVE_CART:
            const item = state.filter(item => item.meal.id === action.payload.meal.id)[0]
            if(item){
                const newstate = state.filter(i => i !== item)
                return newstate
            }

            return state
        default:
            return state
    }
} 

const initialState = {
    loading:false,
    menu:[],
    error:{}
}
const menu = (state = initialState, action) => {
    switch(action.type){
        case  FETCH_MENU_BEGIN:
            return {...state, loading:true}
        case FETCH_MENU_SUCCESS:
            return {...state, menu:action.payload.menu, loading:false}
        case FETCH_MENU_FAILURE:
            return {...state, error:action.payload.error,  loading:false}
        default:
            return state
    }
}
export default combineReducers({
    cart,
    orders,
    all_orders,
    meals,
    menu,
    meal,
    addmeal
})
