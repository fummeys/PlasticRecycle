import React from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
// import { home } from '../styles'

const Settings = () => {
    const Naving = useNavigation()
    const logout = ()=>{
        AsyncStorage.setItem('isLogged', 'false')
        Naving.navigate('Login')
    }
    return (
        <View>
            <Text>this is settings</Text>
            <Button title="Log out" onPress={logout}/>
        </View>
    )
}

export default Settings
