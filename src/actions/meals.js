import { 
    FETCH_MEALS_BEGIN, 
    FETCH_MEALS_SUCCESS, 
    FETCH_MEALS_FAILURE,
    FETCH_MEAL_BEGIN, 
    FETCH_MEAL_SUCCESS, 
    FETCH_MEAL_FAILURE, 
    ADD_MEAL_BEGIN,
    ADD_MEAL_FAILURE,
    ADD_MEAL_SUCCESS,
    DELETE_MEAL_BEGIN,
    DELETE_MEAL_FAILURE,
    DELETE_MEAL_SUCCESS
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

export const deleteMealBegin = () => ({
	type:DELETE_MEAL_BEGIN
})

export const deleteMealSuccess = (meals) => ({
	type:DELETE_MEAL_SUCCESS,
	payload:{meals}
})

export const deleteMealError = (error) => ({
	type:DELETE_MEAL_FAILURE,
	payload: { error }
})

export const deleteMeal = (meal) => {
    return dispatch => {
        dispatch(deleteMealBegin())
        let service = new API()
        return service.api(`${MEAL_URI}/${meal.id}`,{
            method:'DELETE'
        }).then(data=>{
            dispatch(deleteMealSuccess(data))
            // dispatch(getMeals())
            return data
        }).catch(err=>{
            dispatch(deleteMealError())
        })
    }   
}

export const addMealBegin = () => ({
	type:ADD_MEAL_BEGIN
})

export const addMealSuccess = (meals) => ({
	type:ADD_MEAL_SUCCESS,
	payload:{meals}
})

export const addMealError = (error) => ({
	type:ADD_MEAL_FAILURE,
	payload: { error }
})


export const addMeal = (meal) => {
    return dispatch => {
        dispatch(addMealBegin());
        let service = new API()
        return service.api(MEALLIST_URI,{
            body:JSON.stringify(meal),
            method:'POST'
        }).then(data=>{
            dispatch(addMealSuccess(data))
            return data
        }).catch(err => {
            dispatch(addMealError(err))
            return err
        })
    }
}
