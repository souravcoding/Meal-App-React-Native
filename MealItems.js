import React from 'react'
import { View, Text,TouchableOpacity,StyleSheet,ImageBackground} from 'react-native'

const MealItems = (props) => {
    return (
        <View style={{...styles.item,...props.style}}>
            <TouchableOpacity onPress={props.onSelect}>
            <View>
                <View style={styles.img_container}>
                <ImageBackground style={styles.img}  source={{uri:props.img}} >
                <Text   style={styles.title}>{props.title}</Text>
                </ImageBackground>
                 
                    
                </View>
                <View style={styles.text_container}>
                    <Text style={styles.text}>{props.time}m</Text>
                    <Text style={styles.text}>{props.complex.toUpperCase()}</Text>
                    <Text style={styles.text}>{props.afford.toUpperCase()}</Text>
                </View>
            </View>    
               
            </TouchableOpacity>
        </View>
    )
}

const styles=StyleSheet.create({
    item:{
        height:200,
        width:'100%',
        backgroundColor:'lightgrey',
        marginVertical:10,
        borderRadius:10,
        overflow:'hidden'

    },
    img_container:{
        height:'85%',
        overflow:'hidden'
    },
    text_container:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        
        height:'15%'
    },
    img:{
        width:'100%',
        height:'100%',
        justifyContent:"flex-end"
    },
    text:{
        fontSize:16,
        fontFamily:'sans-bold'
    },
    title:{
        backgroundColor:"rgba(0,0,0,0.5)",
        fontSize:20,
        fontFamily:'sans-bold',
        color:'white',
        textAlign:'center'
    }
})

export default MealItems
