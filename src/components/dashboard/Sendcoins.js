import React, { useState, useEffect } from 'react'
import { View, Text, Button, 
    TouchableOpacity, TextInput, 
    SafeAreaView, KeyboardAvoidingView,
     Platform, Dimensions, Alert} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { sendcoinStyles } from '../styles'


const Sendcoins = () => {
    const [token, setToken] = useState('')
    const [amount, setAmount] = useState('')
    const [receiverid, setReceiverid] = useState('')
    const offset = Platform.OS === 'ios' ? 20 : 0
    const naving = useNavigation()
    const gotoDasboard = ()=>{
        naving.navigate('Dashboard')
    }
    const updateAmount = (amt)=>{
        setAmount(amt)
    }
    const updateReceiver = (Rid)=>{
        setReceiverid(Rid)
    }
    const sendIt = ()=>{
        fetch(`https://teleprintersoftwares.com/plasticcycleapi/api/transfer/${receiverid}/${amount}/${token}`,{
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${token}`
        }
        }).then((res)=> res.json())
        .then((data)=>{
        // console.log(data)
        if (data.user == "") {
            Alert.alert(
                'transfer status', 
                `${data.transactionstatus}`,
                [
                    {
                        text: 'retry',
                        style: 'cancel',
                    },{
                        text: 'done',
                        onPress: ()=> naving.navigate('D_Home')
                    }
                ]
            )            
        } else {
            // AsyncStorage.setItem('user', JSON.stringify(data.user))
            Alert.alert(
                'transfer status', 
                `you have sent ${amount} to ${data.user.name}`,
                [
                    {
                        text: 'retry',
                        style: 'cancel',
                    },{
                        text: 'done',
                        onPress: ()=> naving.navigate('D_Home')
                    }
                ]
            )
        }
        }).catch((err)=>{
            Alert.alert(
                'transfer status', 
                `your transfer was unsuccessful`,
                // `${err}`,
                [
                    {
                        text:'retry',
                        style: 'cancel'
                    },{
                        text: 'exit',
                        onPress: ()=> naving.navigate('D_Home'),
                        style: 'default'
                    }
                ]
            )
        })
    }

    useEffect(() => {
        AsyncStorage.getItem('token')
        .then((res)=>{
            setToken(res)
        })
    }, [])

    return (
        <SafeAreaView>
            <View style={ sendcoinStyles.main }>
                {/* <View style={ sendcoinStyles.backDiv}>
                    <TouchableOpacity onPress={gotoDasboard}>
                        <MaterialCommunityIcons 
                            name='keyboard-backspace'
                            size={20}
                            color='#1aa3ff'
                        />
                    </TouchableOpacity>
                    <Text>Go back</Text>
                </View> */}
                <KeyboardAvoidingView
                    behavior='padding'
                    keyboardVerticalOffset={offset}
                >
                    <View style={sendcoinStyles.transferForm}>
                        <Text style={sendcoinStyles.BigText}>Transfer Coins</Text>
                        <View style={sendcoinStyles.forminput}>
                            <Text style={sendcoinStyles.normalText}>Enter Receiver</Text>
                            <TextInput 
                                placeholder='Receiver Id'
                                style={sendcoinStyles.formtext}
                                keyboardType={'number-pad'}
                                onChangeText={updateReceiver}
                            />
                        </View>
                        <View style={sendcoinStyles.forminput}>
                            <Text style={sendcoinStyles.normalText}>Amount</Text>
                            <TextInput 
                                placeholder='Amount'
                                style={sendcoinStyles.formtext}
                                keyboardType={'number-pad'}
                                onChangeText={updateAmount}
                            />
                        </View>
                        <View style={{width: Dimensions.get('screen').width * 0.5, alignSelf: 'center', paddingTop: 10 }}>
                            <Button 
                                title="send coin"
                                color='green'
                                onPress={sendIt}
                            />
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </View>
        </SafeAreaView>
    )
}

export default Sendcoins;
