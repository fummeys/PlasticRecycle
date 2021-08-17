import React from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
// import { home } from '../styles'

const Settings = () => {
    const Naving = useNavigation()
    const logout = ()=>{
        console.log('ok')
        AsyncStorage.setItem('isLogged', 'false')
        Naving.navigate('Login')
    }
    return (
        <View style={{justifyContent: 'center', borderColor: "red", borderWidth: 3, height: 500}}>
            <Text>this is settings</Text>
            <Button title="Log out" onPress={logout}/>
        </View>
    )
}

export default Settings
