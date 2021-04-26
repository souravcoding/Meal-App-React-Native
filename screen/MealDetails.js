import React, { useCallback, useEffect } from 'react'
import {Text,View,ScrollView, StyleSheet,Button,FlatList} from 'react-native'
import { log } from 'react-native-reanimated'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeader from '../CustomHeader'
import MealItems from '../MealItems'
import { MEALS } from '../Data/Dummy_data'
import RenderItem from '../RenderItem'
import { useSelector,useDispatch} from 'react-redux'
import { toggleFav } from '../Store/Action'
function MealDetails(props) {

    const mealdetail=useSelector(state=>state.meal)

    const itemID=props.navigation.getParam('id')

    const itemList=mealdetail.filter((item)=>{
        return item.id===itemID
    })

    const dispatch=useDispatch()

    const handleFav=useCallback(()=>{
        dispatch(toggleFav(itemID))
    },[itemID])



    const renderMeals=(item)=>{
        return <MealItems style={styles.items}  onSelect={()=>{
            props.navigation.navigate({routeName:'Meals_Details',params:{
                id:item.item.id
            }})
        }} title={item.item.title} img={item.item.imageUrl} time={item.item.duration} 
            complex={item.item.complexity} afford={item.item.affordability}
        />
    }

    useEffect(()=>{
        props.navigation.setParams({fav:handleFav})
    },handleFav)




    return ( <ScrollView > 
        <View style={styles.screen}>
                
        <FlatList style={styles.item} data={itemList} renderItem={renderMeals} />
        <Text style={styles.title}>INGRIDIENTS</Text>
        <View style={styles.contain}>
        {itemList.map((item)=>{
            
            return <RenderItem item={item.ingredients} />
        })}
        </View>
        <Text style={styles.title}>RECEPIE</Text>
        <View style={styles.contain}>
        {itemList.map((item)=>{
            
            return <RenderItem item={item.steps} />
        })}
        </View>
    
    </View>
    </ScrollView>
    )
}

const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    item:{
        width:'100%'
    },
    items:{
        marginVertical:0,
        borderRadius:0
    },
    title:{
        marginVertical:10,
        textAlign:"center",
        fontFamily:'sans-bold',
        fontSize:22
        
    },
    contain:{
        width:'100%'
    }
})

MealDetails.navigationOptions=(navigator)=>{
        const itemID=navigator.navigation.getParam('id')
        const mealsTitle=navigator.navigation.getParam('mealsTitle')
        const toggle_fav=navigator.navigation.getParam('fav')
        const isfav=navigator.navigation.getParam('isItFav')
        console.log(isfav)
        return {
            headerTitle:mealsTitle,
            headerRight:()=>{
                
              return   <HeaderButtons HeaderButtonComponent={CustomHeader}>
                <Item title="fav" iconName={isfav ? "ios-star" : "ios-star-outline"} 
                onPress={toggle_fav} />
                </HeaderButtons>
            }
        }
}

export default MealDetails
