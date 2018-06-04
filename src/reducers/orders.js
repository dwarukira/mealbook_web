import {
	FETCH_ORDERS_BEGIN,
	FETCH_ORDERS_SUCCESS,
	FETCH_ORDERS_FAILURE
} from "../actions/order";

const initalState = {
	loading:false,
	orders:[],
	errors:null
}

export const orders = (state=initalState, action) => {
	switch(action.type){
		case  FETCH_ORDERS_BEGIN:
			return {...state , loading: true, errors: null}
		case FETCH_ORDERS_SUCCESS:
			return {...state, loading:false, orders:action.payload.orders.orders}
		case FETCH_ORDERS_FAILURE:
			return {...state , loading:false, errors:action.payload}
		default:
			return state
	}

}

