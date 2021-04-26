import React from 'react'
import { View, Text} from 'react-native'
import { HeaderButton } from 'react-navigation-header-buttons'
import {Ionicons} from "@expo/vector-icons"
const CustomHeader = (props) => {
    return (
        
        <HeaderButton {...props} IconComponent={Ionicons}  iconSize={22} 
            color='white'
        />
    )
}

export default CustomHeader
