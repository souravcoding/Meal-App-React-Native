export const toggleFav=(id)=>{
    return {
        type:"TOGGLE_FAV",
        mealId:id
    }
}

export const filterMeal=(filterdata)=>{
    return {
        type:"FILTER_MEAL",
        filters:filterdata
    }
}