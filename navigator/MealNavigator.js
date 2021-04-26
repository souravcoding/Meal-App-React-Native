import React from 'react'
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Category from "../screen/Category";
import CategoryMeals from "../screen/CategoryMeals";
import FavScreen from "../screen/FavScreen";
import MealDetails from "../screen/MealDetails";
import {Ionicons} from "@expo/vector-icons"
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Filter from '../screen/Filter';


const MealNavigator=createStackNavigator({
    Category:Category,
    Category_Meals:CategoryMeals,
    Meals_Details:MealDetails
},{
    defaultNavigationOptions:{
        headerTintColor:'white',
        headerStyle:{
            backgroundColor:'purple'
        }
        
    }
})

const FavStack=createStackNavigator({
    favorite:FavScreen,
    Meals_Details:MealDetails
},{
    defaultNavigationOptions:{
        headerTintColor:'white',
        headerStyle:{
            backgroundColor:'purple'
        }
        
    }
})

const tabNavigator=createBottomTabNavigator({
    Meals:{screen:MealNavigator,
    navigationOptions:{
        tabBarIcon:(tabInfo)=>{
            return <Ionicons  name="ios-restaurant" size={25}  color={tabInfo.tintColor} />
        }
    }},
    Fav:{screen:FavStack,
        navigationOptions:{
            tabBarLabel:'Favorites!',
            tabBarIcon:(tabInfo)=>{
            return <Ionicons  name="ios-star" size={25}  color={tabInfo.tintColor} />
        }}}
        
},{
    tabBarOptions:{
        activeTintColor:'white',
        inactiveTintColor:'purple',
        activeBackgroundColor:'purple',
        labelStyle:{
            fontFamily:'sans-bold'
        }
    }
})

const filterNavigator=createStackNavigator({
    Filters:Filter
},{
    defaultNavigationOptions:{
        headerTintColor:'white',
        headerStyle:{
            backgroundColor:'purple'
        }}
})

const mainNavigator=createDrawerNavigator({
    Meals:tabNavigator,
    Filters:filterNavigator
},{
    contentOptions:{
        activeTintColor:'purple',
        lableStyle:{
            fontFamily:'sans-bold'
        }
    }
})


export default createAppContainer(mainNavigator)