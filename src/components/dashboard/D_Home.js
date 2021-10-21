import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity,
     ScrollView, Dimensions, Alert} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { home } from '../styles'
import AsyncStorage from '@react-native-async-storage/async-storage'


const D_Home = ()=>{
    const [user, setuser] = useState('')
    const [data, setdata] = useState([])
    const [token, settoken] = useState(null)
    const naving = useNavigation()

    useEffect(()=>{
        AsyncStorage.getItem('user')
        .then((res)=>{
            let a = JSON.parse(res)
            setuser(a)
            // console.log('set user')
        })
        if (data.length < 1) {
            AsyncStorage.getItem('token', (err, dat)=>{
                settoken(dat)
                fetch('https://teleprintersoftwares.com/plasticcycleapi/api/intransfers',{
                    method: 'POST',
                    headers: {
                        'Content-Type' : 'application/json',
                        'Authorization' : `Bearer ${token}`
                    }
                }).then((res)=> res.json())
                .then((trans)=>{
                    setdata(trans.transactions)
                    // console.log(trans.transactions[0])
                }).catch((err)=> {
                    console.log("error geting intransfer")

                })
            })   
        }
    },[user])

    const showme = ()=>{
        console.log(data[0])
        // console.log(token)
    }

    const gotoCamera = ()=>{
        naving.navigate('Camera')
    }
    
    const comingSoon = ()=>{
        Alert.alert('Coming Soon', 'This feature is still under construction')
    }
    
    return(
        <View style={home.main}>
            <View style={home.heading}>
                <Text style={home.head_text}>Welcome, {user.name}</Text>
                <Image source={require('../img/rDEOVtE7vOs.png')} style={home.profilePix}/>
            </View>
            <View style={home.upper}>
                <Text style={home.card_text}>Balance:  
                    <MaterialCommunityIcons 
                        name="currency-ngn"
                        size={20}
                        color="#076733"
                    />
                    {user.coins}
                </Text>
                <TouchableOpacity style={home.card} onPress={gotoCamera}>
                    <MaterialCommunityIcons 
                        name="image-filter-center-focus-strong-outline"
                        size={80}
                        color="#808080"
                    />
                    <Text style={home.card_text}>Take a photo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={home.card} onPress={comingSoon}>
                    <MaterialCommunityIcons 
                        name="forum-outline"
                        size={80}
                        color="#808080"
                    />
                    <Text style={home.card_text}>Chat with Other users</Text>
                </TouchableOpacity>
            </View>
            <Text style={home.head_text}>Recycle history</Text>
            <View style={{height: Dimensions.get('screen').height * 0.51}}>
                <ScrollView style={home.lower}>
                    {data.map((value, index) =>{
                        return(
                            <View key={index} style={home.hisCard}>
                                <TouchableOpacity style={home.prodCard} onPress={comingSoon}>
                                    <Image
                                        source={{uri:`${value.imageurl}`}} 
                                        style={home.prodPix}
                                    />
                                    <View style={home.prod_view}>
                                        <Text style={{color: "green", fontWeight: '700'}}>{ value.description}</Text>
                                        <Text style={{color:"red"}}>amount earned:
                                        <MaterialCommunityIcons 
                                            name="currency-ngn"
                                            size={15}
                                            color='red'
                                        />{value.coinissued}</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={{
                                    justifyContent:'center',
                                    backgroundColor: '#FFFEFE',
                                    borderTopRightRadius: 50,
                                    borderBottomRightRadius: 50,
                                    width: Dimensions.get('screen').width * 0.15,
                                    alignItems: 'center',
                                    height: 65,
                                    marginTop: 5
                                    }}
                                    onPress={comingSoon}
                                    >
                                    <MaterialCommunityIcons 
                                        name="trash-can"
                                        size={35}
                                        color="red"
                                    />
                                </TouchableOpacity>
                            </View>
                        )
                    })}
                </ScrollView>
            </View>
        </View>
    )
}

export default D_Home;