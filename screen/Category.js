import React from 'react'
import {Text,View,StyleSheet,Button,FlatList,TouchableNativeFeedback, TouchableOpacity, Touchable} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeader from '../CustomHeader'
import { CATEGORIES } from '../Data/Dummy_data'

function Category(props) {

    const renderItems=(items)=>{
        return   <View style={{flex:1}}>
        <TouchableNativeFeedback  onPress={()=>{
            props.navigation.navigate({routeName:'Category_Meals',
            params:{
                id:items.item.id
            }})
        }}>
        <View style={{...styles.gridItems,backgroundColor:items.item.color}}>
            <Text style={styles.title}>{items.item.title}</Text>
        </View>
        </TouchableNativeFeedback>
        </View>
    }
   
    return (
        <View style={styles.screen}>
            <FlatList data={CATEGORIES} numColumns={2} renderItem={renderItems}/>
           
        </View>
    )
}

const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        // alignItems:'center'
    },
    gridItems:{
        flex:1,
        height:150,
        margin:15,
        alignItems:"flex-end",
        justifyContent:'flex-end',
        borderRadius:20,
        padding:15,
        shadowColor:'black',
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity:0.25,
        shadowRadius:10,
        elevation:10,
        

    },
    title:{
        fontFamily:'sans-bold',
        fontSize:18,
        textAlign:'right'
    }
})

Category.navigationOptions=(navigator)=>{
   return { headerTitle:"Food Factory~",
    headerStyle:{
        backgroundColor:'purple'
    },
    headerTintColor:'white',
    headerLeft:()=>(
        
        <HeaderButtons HeaderButtonComponent={CustomHeader}>
        <Item title="menu" iconName='ios-menu' onPress={
            ()=>{navigator.navigation.toggleDrawer()}} />
        </HeaderButtons>
    )
   }
}

export default Category
