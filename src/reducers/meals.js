import {
	FETCH_MEALS_BEGIN,
	FETCH_MEALS_SUCCESS,
	FETCH_MEALS_FAILURE,
	FETCH_MEAL_BEGIN,
	FETCH_MEAL_SUCCESS,
	FETCH_MEAL_FAILURE
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

export const meal = (state={
	loading:false,
	meal:{},
	errors:null
}, action) => {
	switch(action.type){
		case  FETCH_MEAL_BEGIN:
			return {...state , loading: true, errors: null}
		case FETCH_MEAL_SUCCESS:
			console.log(action.payload);
			
			return {...state, loading:false, meal:action.payload.meal}
		case FETCH_MEAL_FAILURE:
			return {...state , loading:false, errors:action.payload}
		default:
			return state
	}

}

