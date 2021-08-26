import React from 'react'
import { View, Text, TouchableOpacity,
     SafeAreaView} from 'react-native'
import { welcome} from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import { SvgXml } from 'react-native-svg'
import { Ellipse1, wallet } from './img/Images'

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
                    <View style={welcome.backImg}>
                        <SvgXml width="100%" height="100%" xml={Ellipse1}/>
                    </View>
                    <View style={welcome.frontImg}>
                        <SvgXml width="100%" height="100%" xml={wallet}/>
                    </View>
                </View>
                <TouchableOpacity style={welcome.getStarted} onPress={gotoLogin}>
                    <Text style={{color:'white', fontSize:20, textAlign: 'center'}}>GET STARTED</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}


export default Welcome;
