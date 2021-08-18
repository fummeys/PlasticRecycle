import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { home } from '../styles'
import AsyncStorage from '@react-native-async-storage/async-storage'


const D_Home = ()=>{
    const [user, setuser] = useState('')
    let element = []
    for (let index = 0; index < 10; index++) {
        element.push(index)
    }
    // AsyncStorage.getAllKeys()
    // .then((res)=> {
    //     console.log(res)
    // })
    useEffect(()=>{
        AsyncStorage.getItem('user')
        .then((res)=>{
            let a = JSON.parse(res)
            // console.log(a)
            setuser(a)
        })
    },[])
    
    
    return(
        <View style={home.main}>
            <View style={home.heading}>
                <Text style={home.head_text}>Welcome, {user.name}</Text>
                <Image source={require('../img/rDEOVtE7vOs.png')} style={home.profilePix}/>
            </View>
            <Text style={home.card_text}>Balance:  
                <MaterialCommunityIcons 
                    name="currency-ngn"
                    size={20}
                    color="#076733"
                />
                {user.coins}
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
                <TouchableOpacity style={home.card}>
                    <MaterialCommunityIcons 
                        name="forum-outline"
                        size={80}
                        color="#808080"
                    />
                    <Text style={home.card_text}>Chat with Other users</Text>
                </TouchableOpacity>
            </View>
                <Text style={home.head_text}>Recycle history</Text>
            <ScrollView style={home.lower}>
                {element.map((value, index) =>{
                    return(
                        <View key={value} style={home.hisCard}>
                            <TouchableOpacity style={home.prodCard} >
                                <Image
                                    source={{uri:"https://thumbs.dreamstime.com/b/bottle-water-12522351.jpg"}} 
                                    style={home.prodPix}
                                />
                                <View style={home.prod_view}>
                                    <Text style={{color: "green", fontWeight: '700'}}>bottle Name:</Text>
                                    <Text style={{color:"red"}}>amount earned:</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                justifyContent:'center',
                                backgroundColor: '#cffce4',
                                borderTopRightRadius: 50,
                                borderBottomRightRadius: 50,
                                width: Dimensions.get('screen').width * 0.15,
                                alignItems: 'center',
                                height: 80,
                                marginTop:10
                                }}>
                                <MaterialCommunityIcons 
                                    name="trash-can"
                                    size={40}
                                    color="red"
                                />
                            </TouchableOpacity>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default D_Home;