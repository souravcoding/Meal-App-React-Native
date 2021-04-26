import React, { useCallback, useEffect, useState } from 'react'
import { View, Text,StyleSheet,Switch} from 'react-native'
import { log } from 'react-native-reanimated'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useDispatch } from 'react-redux'
import CustomHeader from '../CustomHeader'
import { filterMeal } from '../Store/Action'


const Filter = (props) => {
    const dispatch=useDispatch()
    const [gluten,setGluten]=useState(false)
    const [lactos,setLactos]=useState(false)
    const [vegan,setVegan]=useState(false)
    const [vegeterian,setVegeterian]=useState(false)

const saveFilters=useCallback(()=>{
    const filterData={
        gluten,
        lactos,
        vegan,
        vegeterian
    }
    dispatch(filterMeal(filterData))
},[gluten,lactos,vegeterian,vegan])

useEffect(()=>{
    props.navigation.setParams({filter:saveFilters})
},[saveFilters])

    return (
        <View style={styles.screen}>
            <Text  style={styles.title}>Available Filters / Restrictions</Text>
            
                <View style={styles.container}>
                    <Text style={styles.filter}>Gluten-Free</Text>
                    <Switch trackColor={{true:'#CBC3E3',false:'grey'}} 
                    thumbColor={'purple'}
                    value={gluten} onValueChange={()=>setGluten(!gluten)} />
                </View>
                <View style={styles.container}>
                    <Text style={styles.filter}>Lactos-Free</Text>
                    <Switch trackColor={{true:'#CBC3E3',false:'grey'}} 
                    thumbColor={'purple'}
                    value={lactos} onValueChange={()=>setLactos(!lactos)} />
                </View>
                <View style={styles.container}>
                    <Text style={styles.filter}>Vegeterian</Text>
                    <Switch trackColor={{true:'#CBC3E3',false:'grey'}} 
                    thumbColor={'purple'}
                    value={vegeterian} onValueChange={()=>setVegeterian(!vegeterian)} />
                </View>
                <View style={styles.container}>
                    <Text style={styles.filter}>Vegan</Text>
                    <Switch trackColor={{true:'#CBC3E3',false:'grey'}} 
                    thumbColor={'purple'}value={vegan} onValueChange={()=>setVegan(!vegan)} />
                </View>
                
               
               
            
        </View>
    )
}

Filter.navigationOptions=(navigator)=>{

    const filters=navigator.navigation.getParam('filter')

    return {
        headerLeft:()=>(
        
            <HeaderButtons HeaderButtonComponent={CustomHeader}>
            <Item title="menu" iconName='ios-menu' onPress={
                ()=>{navigator.navigation.toggleDrawer()}} />
            </HeaderButtons>
        ),
        headerRight:()=>(
            <HeaderButtons HeaderButtonComponent={CustomHeader}>
            <Item title="save" iconName='ios-save' onPress={filters} />
            </HeaderButtons>
        )
    }
}

const styles=StyleSheet.create({
    screen:{
        flex:1,
        alignItems:'center'
    },
    title:{
        fontSize:20,
        marginVertical:15,
        fontFamily:'sans-bold',
        textAlign:'center'
    },
    container:{
        width:'80%',
        justifyContent:'space-between',
        flexDirection:'row',
        marginVertical:8
    },
    filter:{
        fontSize:18,
        fontFamily:'sans-open'
    }
})

export default Filter
