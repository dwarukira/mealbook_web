import { 
    FETCH_MEALS_BEGIN, 
    FETCH_MEALS_SUCCESS, 
    FETCH_MEALS_FAILURE,
    FETCH_MEAL_BEGIN, 
    FETCH_MEAL_SUCCESS, 
    FETCH_MEAL_FAILURE 
} from "./types";
import { API } from "../api";
import { MEALLIST_URI, ADDMENU_URI, MEAL_URI } from "../constants";



export const getMealsBegin = () => ({
	type:FETCH_MEALS_BEGIN
})

export const getMealsSuccess = (meals) => ({
	type:FETCH_MEALS_SUCCESS,
	payload:{meals}
})

export const getMealsError = (error) => ({
	type:FETCH_MEALS_FAILURE,
	payload: { error }
})


export const getMealBegin = () => ({
	type:FETCH_MEAL_BEGIN
})

export const getMealSuccess = (meal) => ({
	type:FETCH_MEAL_SUCCESS,
	payload:{meal}
})

export const getMealError = (error) => ({
	type:FETCH_MEAL_FAILURE,
	payload: { error }
})

export const getMeals = () =>{
    return dispatch => {
        dispatch(getMealsBegin());
        let service = new API()
        return service.api(MEALLIST_URI).then(data => {
            dispatch(getMealsSuccess(data))
            return data
        }).catch(error => {
            dispatch(getMealsError(error))
        })
    }
}


export const getMeal = (meal_id) =>{
    return dispatch => {
        dispatch(getMealBegin());
        let service = new API()
        return service.api(MEAL_URI+"/"+meal_id).then(data => {
            dispatch(getMealSuccess(data))
            
            return data
        }).catch(error => {
            dispatch(getMealError(error))
        })
    }
}


export const addMenu = (meal) => {
    return dispatch => {
        let service = new API()
        const meals = {
            meals:[meal.id]
        }
        return service.api(ADDMENU_URI,{
            body:JSON.stringify(meals),
            method:'POST'
        }).then(data=>{
            // TODO: dispatch
            return data
        }).catch(err=>{
            alert(err)
        })
    }
}

export const deleteMeal = (meal) => {
    return dispatch => {
        let service = new API()
        return service.api(`${MEAL_URI}/${meal.id}`,{
            method:'DELETE'
        }).then(data=>{
            dispatch(getMeals())
            return data
        }).catch(err=>{
            
        })
    }   
}

export const addMeal = (meal) => {
    return dispatch => {
        let service = new API()
        return service.api(MEALLIST_URI,{
            body:JSON.stringify(meal),
            method:'POST'
        }).then(data=>{
            return data
        })
    }
}
