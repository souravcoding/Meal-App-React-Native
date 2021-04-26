import React, { useState } from 'react'
import {Text,View,StyleSheet,TextInput,Button,FlatList,Modal} from 'react-native'
import MealNavigator from './navigator/MealNavigator'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import { enableScreens } from 'react-native-screens'
import { Provider } from 'react-redux'
import { store } from './Store/Store'


enableScreens()

const fetchFont=()=>{
  console.log("fetching fonts");
  return Font.loadAsync({
    'sans-open':require('./assets/Fonts/OpenSans-Regular.ttf'),
    'sans-bold':require('./assets/Fonts/OpenSans-Bold.ttf')
    
  })
}

export default function App(){

  
 
  const [isloading,setisloading]=useState(true)

  if(isloading){
    console.log('loading');
    return <AppLoading startAsync={fetchFont} onError={(e)=>{console.log(e)}} onFinish={()=>setisloading(false)} /> 
  }
  return (
    <Provider store={store}>
    <View style={styles.main}>
    <MealNavigator/>
   </View> 
   </Provider>
  )
}

const styles=StyleSheet.create({
  main:{
    flex:1,
    
  }
})