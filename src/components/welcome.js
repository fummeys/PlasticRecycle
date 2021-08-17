import React from 'react'
import { View, Text, TouchableOpacity,
     SafeAreaView, Image} from 'react-native'
import { welcome } from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'

const Welcome = ()=>{
    const Naving = useNavigation()
    const gotoLogin = ()=>{
        AsyncStorage.setItem('iswelcomed', 'true')
        Naving.navigate('Login')
    }
    return(
        <SafeAreaView>
            <View style={ welcome.main }>
                <Text style={ welcome.heading}>Welcome to PlastiCYCLE</Text>
                <Text style={ welcome.heading2}>One app for all</Text>
                <View>
                    <Image source={require('./img/Ellipse1.png')} style={welcome.backImg}/>
                    <Image source={require('./img/undraw_wallet_aym5.png')} style={welcome.frontImg}/>
                </View>
                <TouchableOpacity style={welcome.getStarted} onPress={gotoLogin}>
                    <Text style={{color:'white', fontSize:20, textAlign: 'center'}}>GET STARTED</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}


export default Welcome;
