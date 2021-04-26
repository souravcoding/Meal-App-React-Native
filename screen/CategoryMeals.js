import React from 'react'
import {Text,View,StyleSheet,FlatList} from 'react-native'
import { useSelector } from 'react-redux'
import { CATEGORIES} from '../Data/Dummy_data'
import MealItems from '../MealItems'

function CategoryMeals(props) {
    const favMeals=useSelector(state=>state.favMeal)
    const categorymeal=useSelector(state=>state.filterMeal)
   
    const itemID=props.navigation.getParam('id')

    const itemList=categorymeal.filter((item)=>{
        return item.categoryIds.indexOf(itemID)>=0
    })

    

    const renderMeals=(item)=>{
        const isFav=favMeals.some((meal)=>meal.id===item.item.id)
        
        return <MealItems onSelect={()=>{
            props.navigation.navigate({routeName:'Meals_Details',params:{
                id:item.item.id,
                mealsTitle:item.item.title,
                isItFav:isFav
            }})
        }} title={item.item.title} img={item.item.imageUrl} time={item.item.duration} 
            complex={item.item.complexity} afford={item.item.affordability}
        />
    }
    
    return (
        <View style={styles.screen}>          
            <FlatList style={styles.items} data={itemList} renderItem={renderMeals} />
        </View>
    )
}

const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    items:{
        width:'90%'
    }
})

CategoryMeals.navigationOptions=(navigator)=>{
    const itemID=navigator.navigation.getParam('id')
  
    const item=CATEGORIES.find((item)=>item.id===itemID)

    return {
        headerTitle:item.title
    }
  
}

export default CategoryMeals
