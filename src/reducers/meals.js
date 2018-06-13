import {
	FETCH_MEALS_BEGIN,
	FETCH_MEALS_SUCCESS,
	FETCH_MEALS_FAILURE
} from "../actions/types";

const initalState = {
	loading:false,
	meals:[],
	errors:null
}

export const meals = (state=initalState, action) => {
	switch(action.type){
		case  FETCH_MEALS_BEGIN:
			return {...state , loading: true, errors: null}
		case FETCH_MEALS_SUCCESS:
			return {...state, loading:false, meals:action.payload.meals.meals}
		case FETCH_MEALS_FAILURE:
			return {...state , loading:false, errors:action.payload}
		default:
			return state
	}

}

