import { 
    FETCH_MENU_BEGIN, 
    FETCH_MENU_SUCCESS, 
    FETCH_MENU_FAILURE,
    REMOVE_CART } from "./types";
import { API } from "../api";
import { MENULIST_URI } from "../constants";

export const addCart = (meal, quanity) => {
    return {
        payload:{meal:meal, quanity:quanity},
        type:'ADD_CART'
    }
}

export const getMenuBegin = () => ({
	type:FETCH_MENU_BEGIN
})


export const getMenuSuccess = (menu) =>({
    type:FETCH_MENU_SUCCESS,
	payload:{menu}
})

export const getMenuError = (error) => ({
	type:FETCH_MENU_FAILURE,
	payload: { error }
})


export const getMenu = () => {
    return dispatch =>  {
        dispatch(getMenuBegin());
        let service = new API()
        return service.api(MENULIST_URI).then(data => {
            dispatch(getMenuSuccess(data));
        }).catch(err => {
            dispatch(getMenuError(err));           
        })
     }
}

export const remove = (meal) => {
    return {
        type:REMOVE_CART,
        payload: {meal}
    }
}
