import { API } from "../api";
import { ORDER_USERS_URI } from "../constants";

export const FETCH_ORDERS_BEGIN   = 'FETCH_ORDERS_BEGIN';
export const FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS';
export const FETCH_ORDERS_FAILURE = 'FETCH_ORDERS_FAILURE';


export const getOrdersBegin = () => ({
	type:FETCH_ORDERS_BEGIN
})

export const getOrdersSuccess = (orders) => ({
	type:FETCH_ORDERS_SUCCESS,
	payload:{orders}
})

export const getOrdersError = (error) => ({
	type:FETCH_ORDERS_FAILURE,
	payload: { error }
})


export const getUserOrders = () =>{
    return dispatch => {
        dispatch(getOrdersBegin());
        let service = new API()
        return service.api(ORDER_USERS_URI).then(data => {
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
