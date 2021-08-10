import React from 'react'
import { View, Text, Image } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { transferStyle } from '../styles'

const Transfer = ()=>{
    return(
        <View style={transferStyle.main}>
            <View style={transferStyle.heading}>
                <Text style={transferStyle.head_text}>Transfers</Text>
                <Image source={require('../img/rDEOVtE7vOs.png')} style={transferStyle.profilePix}/>
            </View>
        </View>
    )
}

export default Transfer;