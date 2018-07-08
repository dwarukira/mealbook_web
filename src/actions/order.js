import { API } from "../api";
import { ORDER_USERS_URI, ORDER_URI } from "../constants";

export const FETCH_ORDERS_BEGIN   = 'FETCH_ORDERS_BEGIN';
export const FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS';
export const FETCH_ORDERS_FAILURE = 'FETCH_ORDERS_FAILURE';
export const FETCH_USER_ORDERS_BEGIN   = 'FETCH_USER_ORDERS_BEGIN';
export const FETCH_USER_ORDERS_SUCCESS = 'FETCH_USER_ORDERS_SUCCESS';
export const FETCH_USER_ORDERS_FAILURE = 'FETCH_USER_ORDERS_FAILURE';
export const ADD_ORDERS_BEGIN   = 'ADD_ORDERS_BEGIN';
export const ADD_ORDERS_SUCCESS = 'ADD_ORDERS_SUCCESS';
export const ADD_ORDERS_FAILURE = 'ADD_ORDERS_FAILURE';


export const getOrdersBegin = () => ({
	type:FETCH_ORDERS_BEGIN
})

export const getOrdersSuccess = (orders) => ({
	type:FETCH_ORDERS_SUCCESS,
	payload:{orders}
})

export const getOrdersError = (error) => ({
	type:FETCH_USER_ORDERS_FAILURE,
	payload: { error }
})

export const addOrdersBegin = () => ({
	type:ADD_ORDERS_BEGIN
})

export const addOrdersSuccess = (orders) => ({
	type:ADD_ORDERS_SUCCESS,
	payload:{orders}
})

export const addOrdersError = (error) => ({
	type:ADD_ORDERS_FAILURE,
	payload: { error }
})

export const getUserOrdersBegin = () => ({
	type:FETCH_ORDERS_BEGIN
})

export const getUserOrdersSuccess = (orders) => ({
	type:FETCH_USER_ORDERS_SUCCESS,
	payload:{orders}
})

export const getUserOrdersError = (error) => ({
	type:FETCH_USER_ORDERS_FAILURE,
	payload: { error }
})


export const getUserOrders = () =>{
    return dispatch => {
        dispatch(getUserOrdersBegin());
        let service = new API()
        return service.api(ORDER_USERS_URI).then(data => {
            dispatch(getUserOrdersSuccess(data))
            return data
        }).catch(error => {
            dispatch(getUserOrdersError(error))
        })
    }
}

export const getOrders = () =>{
    return dispatch => {
        dispatch(getOrdersBegin());
        let service = new API()
        return service.api(ORDER_URI).then(data => {
            dispatch(getOrdersSuccess(data))
            return data
        }).catch(error => {
            dispatch(getOrdersError(error))
        })
    }
}

export const changeOrder = (order) => {
    return {
        payload:order,
        type:'CHANGE_ORDER'
    }
}


export const addOrders = (orders) =>{
    return dispatch => {
        dispatch(addOrdersBegin());
        let service = new API()
        const post_orders = orders.map(data=>(
            {
                meal_id:data.meal.id,
                quantity:data.quanity
            }
        ))
        return service.api(ORDER_URI,{
            body:JSON.stringify({
                "orders":post_orders
            }),
            method:"POST"
        }).then(data => {
            dispatch(addOrdersSuccess(data))
            return data
        }).catch(error => {
            error.response.json().then(data=>{
                console.log(data);
                
            })
            
            dispatch(addOrdersError(error))
            return error
        })
    }
}
