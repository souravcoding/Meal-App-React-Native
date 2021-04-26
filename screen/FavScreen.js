import React from 'react'
import { View, Text,StyleSheet,FlatList} from 'react-native'
import MealItems from '../MealItems'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeader from '../CustomHeader'
import { useSelector } from 'react-redux'

const FavScreen = (props) => {

    const itemList=useSelector(state=>state.favMeal)

    if(itemList.length===0 || !itemList){
        return (
            <View style={styles.fav}>
                <Text style={styles.fav_text}>
                    No fav meals found. start adding some!
                </Text>
            </View>
        )
    }

    const renderMeals=(item)=>{
        return <MealItems onSelect={()=>{
            props.navigation.navigate({routeName:'Meals_Details',params:{
                id:item.item.id
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
    },
    fav:{
        flex:1,
        justifyContent:'center',
        alignItems:"center"
    },
    fav_text:{
        fontFamily:'sans-bold',
        fontSize:30,
        textAlign:'center'
    }
})

FavScreen.navigationOptions=(navigator)=>{
    return {headerLeft:()=>(
        
        <HeaderButtons HeaderButtonComponent={CustomHeader}>
        <Item title="menu" iconName='ios-menu' onPress={
            ()=>{navigator.navigation.toggleDrawer()}} />
        </HeaderButtons>
    )}
}

export default FavScreen
