import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity,
     TextInput, Alert, ActivityIndicator } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/core'
import { prevStyles, login } from '../styles'


const Preview = ({route}) => {
    const [giverid, setgiver] = useState(null)
    const [Loading, setLoading] = useState('none')
    const Naving = useNavigation()
    const gotocamera = ()=>{
        Naving.navigate('Camera')
    }
    const updateid = (data)=>{
        setgiver(data)
    }

    const submitPix =()=>{
        setLoading('flex')
        AsyncStorage.multiGet(['user','token'],(err, dat)=>{
            let mydat = JSON.parse(dat[0][1])
            let token = dat[1][1]
            fetch('https://teleprintersoftwares.com/plasticcycleapi/api/reward',{
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                    'Authorization' : `Bearer ${token}`
                },
                body: JSON.stringify({
                    'photo': `${route.params.img.base64}`,
                    'receiverid': `${mydat.id}`,
                    'giverid': `${giverid}`
                })
            }).then(res => res.json())
            .then((data)=>{
                // console.log(data)
                AsyncStorage.setItem('user', JSON.stringify(data.user))
                Alert.alert(
                    'Recycle status', 
                    data.transactionstatus,
                    [
                        {
                            text: 'Retry',
                            style:'cancel'
                        },{
                            text: 'Done',
                            style: 'default',
                            onPress: ()=> Naving.navigate('D_Home')
                        }
                    ]
                )
                setLoading('none')
            })
            .catch(err => {
                // console.log(err)
                setLoading('none')
            })
        })
    }
    return (
        <View style={prevStyles.main}>
            <View style={prevStyles.prevForm}>
                <Image source={{uri: `data:image/png;base64,${route.params.img.base64}`}} style={prevStyles.imgprev}/>
                <TextInput 
                    placeholder='Giver ID'
                    style={login.formtext}
                    keyboardType='number-pad'
                    onChangeText={updateid}
                />
            </View>
            <View style={prevStyles.prevformBottondiv}>
                <TouchableOpacity onPress={gotocamera} style={prevStyles.prevfromBotton}>
                    <MaterialCommunityIcons 
                        name='camera-retake'
                        size={40}
                        color='red'
                    />
                    <Text style={{color: 'black'}}>Retake</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={submitPix} style={prevStyles.prevfromBotton}>
                <MaterialCommunityIcons 
                        name='cloud-upload'
                        size={40}
                        color='green'
                    />
                    <Text style={{color: 'black'}}>Submit</Text>
                </TouchableOpacity>
            </View>
            <View style={{
                display: Loading, 
                paddingTop: 10, 
                height: 50,
                justifyContent: 'center',
                alignSelf: 'center'
                }}
                >
                <ActivityIndicator color='#00ff00' size='large'/>
                <Text>uploading...</Text>
            </View>
        </View>
    )
}

export default Preview
