import {MEALS} from '../Data/Dummy_data'

initialState={
    meal:MEALS,
    filterMeal:MEALS,
    favMeal:[]
}

export const reducer=(state=initialState,action)=>{
    switch (action.type) {
        case "TOGGLE_FAV":
            const existingIndex=state.favMeal.findIndex((meal)=>meal.id===action.mealId)
            if(existingIndex>=0){
                const updatedFav=[...state.favMeal]
                updatedFav.splice(existingIndex,1)
                return {...state,favMeal:updatedFav}

            }else{
                    const meal=state.meal.find((meal)=>meal.id===action.mealId)
                    return {...state,favMeal:state.favMeal.concat(meal)}
            }
            
        case "FILTER_MEAL":
            const filterdata=action.filters
            const updatedMeals=state.meal.filter(meal=>{
                if(filterdata.lactos && !meal.isLactosFree){
                    return false
                } if(filterdata.vegan && !meal.isVegan){
                    return false
                } if(filterdata.gluten && !meal.isGlutenFree){
                    return false
                } if(filterdata.vegeterian && !meal.isVegetarian){
                    return false
                }
                return true })
            return {...state,filterMeal:updatedMeals }
                
            
    
        default:
            return state

    }
    
}