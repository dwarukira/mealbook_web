import { API } from "../api";
import { ORDER_USERS_URI, ORDER_URI } from "../constants";

export const FETCH_ORDERS_BEGIN   = 'FETCH_ORDERS_BEGIN';
export const FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS';
export const FETCH_ORDERS_FAILURE = 'FETCH_ORDERS_FAILURE';
export const FETCH_USER_ORDERS_BEGIN   = 'FETCH_USER_ORDERS_BEGIN';
export const FETCH_USER_ORDERS_SUCCESS = 'FETCH_USER_ORDERS_SUCCESS';
export const FETCH_USER_ORDERS_FAILURE = 'FETCH_USER_ORDERS_FAILURE';


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
