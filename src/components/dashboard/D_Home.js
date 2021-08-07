import React from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView} from 'react-native'
import { Value } from 'react-native-reanimated'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { home } from '../styles'

const D_Home = ()=>{
       
    let element = []
    for (let index = 0; index < 10; index++) {
        element.push(index)
    }
    // console.log(element)
    
    
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
                <Text style={home.head_text}>Recycle history</Text>
                {element.map((value, index) =>{
                    return(
                        <TouchableOpacity style={home.prodCard} key={value}>
                            <Image
                                source={{uri:"https://thumbs.dreamstime.com/b/bottle-water-12522351.jpg"}} 
                                style={home.prodPix}
                            />
                            <Text>{index}</Text>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default D_Home;