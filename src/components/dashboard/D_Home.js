import React from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { home } from '../styles'

const D_Home = ()=>{
    
    return(
        <View style={home.main}>
            <View style={home.heading}>
                <Text style={home.head_text}>Welcome, CHLOE</Text>
                <Image source={require('../img/rDEOVtE7vOs.png')} style={home.profilePix}/>
            </View>
            <Text style={home.card_text}>Balance: 
                <MaterialCommunityIcons 
                    name="currency-ngn"
                    size={20}
                    color="#076733"
                />10
            </Text>
            <View style={home.upper}>
                <TouchableOpacity style={home.card}>
                    <MaterialCommunityIcons 
                        name="image-filter-center-focus-strong-outline"
                        size={80}
                        color="#808080"
                    />
                    <Text style={home.card_text}>Take a photo</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={home.lower}>
                <Text>lower</Text>
            </ScrollView>
        </View>
    )
}

export default D_Home;