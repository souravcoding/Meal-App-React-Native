import React from 'react'
import { View, Text,StyleSheet} from 'react-native'

const RenderItem = (props) => {
    return (
        <View style={styles.container}>
           {props.item.map((items)=>{
               return <View style={styles.eachitem}>
                   <Text style={styles.text}>{items}</Text>
               </View>
           })}
        </View>
    )
}

const styles=StyleSheet.create({
    eachitem:{
        width:"80%",
        borderColor:'black',
        borderWidth:1,
        marginVertical:6,
        padding:5
    },
    container:{
        alignItems:'center',
        width:'100%'
    },
    text:{
        fontSize:18
    }
})

export default RenderItem
