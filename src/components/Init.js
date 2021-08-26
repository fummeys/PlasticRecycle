import React, { useState, useEffect } from 'react'
import { View, Text, ActivityIndicator, Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'


const Init =({navigation})=>{
    const [welcomed, setwelcomed] = useState('null')
    const [isLogged, setisLogged] = useState('null')
    
    useEffect(() => {
        AsyncStorage.getItem('iswelcomed')
        .then((data)=>{
            if (data == 'true') {
                setwelcomed('true')
                AsyncStorage.getItem('isLogged')
                .then((data)=>{
                    if (data == 'true') {
                        setisLogged('true')
                    } else{
                        setisLogged('false')
                    }
                })
            } else {
                setwelcomed('false')
            }
        })
    }, [welcomed, isLogged])
    
    setTimeout(()=>{
        // console.log(welcomed, isLogged)
        goto()
    }, 1000)
    const goto = ()=>{ 
        if (isLogged == 'true') {
            navigation.navigate('Dashboard')
        } else if(welcomed == 'true' && isLogged != 'null'){
            navigation.navigate('Login')
        } else if(welcomed == 'false'){
            navigation.navigate('Welcome')
        }
    }
    return(
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: "#ffffff"}}>
            <Image source={require('./img/logo2.png')} style={{width: 200, height: 200, alignSelf:'center', borderRadius: 30}}/>
            <Text style={{textAlign: 'center', fontSize:30, color:"#215F2F", marginBottom:10, fontWeight: '700'}}>Plastic Recycle</Text>
            <ActivityIndicator size="large" color="#00ff00"/>
        </View>
    )
}

export default Init