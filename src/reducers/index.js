import { combineReducers } from 'redux';

import { orders } from "./orders"

const cart = (state = [] , action) =>{
    switch(action.type){
        case 'ADD_CART':
            const checkItem = state.filter(item => item.meal.id === action.payload.meal.id)[0]
            if(checkItem){
                const item_index = state.indexOf(checkItem)
                state[item_index].quanity = state[item_index].quanity +  action.payload.quanity
                return state
            }
            return [...state , {meal:action.payload.meal, quanity:action.payload.quanity}]


        default:
            return state
    }
} 

export default combineReducers({
    cart,
    orders
})
