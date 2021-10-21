import React,{ useEffect, useState} from 'react'
import { View, Text, Button, TouchableOpacity, Image } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { settingsStyle } from '../styles'

const Settings = () => {
    const [user, setuser] = useState({})
    const [token, settoken] = useState({})
    const Naving = useNavigation()

    const logout = ()=>{
        AsyncStorage.setItem('isLogged', 'false')
        Naving.navigate('Login')
    }

    useEffect(()=>{
        AsyncStorage.getItem('user', (err, res)=>{
            let a = JSON.parse(res)
            setuser(a)
        })
        AsyncStorage.getItem('token',(err,res)=>{
            settoken(res)
        })
    },[])

    return (
        <View style={settingsStyle.main}>
            <View style={settingsStyle.update}>
                <Image source={require('../img/rDEOVtE7vOs.png')} style={settingsStyle.profileImg}/>
                <Text style={settingsStyle.textUPdate}>username: {user.name}</Text>
                <Text style={settingsStyle.textUPdate}>email: {user.email}</Text>
                <Text style={settingsStyle.textUPdate}>location: {user.location}</Text>
                <Text style={settingsStyle.textUPdate}>
                    coins: 
                    <MaterialCommunityIcons 
                        name="currency-ngn"
                        size={20}
                        color="#076733"
                    />
                    {user.coins}
                </Text>
            </View>
            <View>
                <TouchableOpacity style={settingsStyle.Logout} onPress={logout}>
                    <MaterialCommunityIcons 
                        name="logout-variant"
                        size={40}
                        color="white"
                    />
                    <Text style={{ fontWeight: '700', color: 'white'}}>Logout</Text>  
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Settings
