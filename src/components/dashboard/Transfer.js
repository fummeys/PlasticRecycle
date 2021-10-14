import React,{ useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, Alert, Dimensions} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { transferStyle } from '../styles'

const Transfer = ()=>{
    const [data, setdata] = useState([])
    const [token, settoken] = useState(null)
    
    useEffect(() => {
        if (data.length < 1) {
            AsyncStorage.getItem('token', (err, dat)=>{
                settoken(dat)
                fetch('https://teleprintersoftwares.com/plasticcycleapi/api/outtransfers',{
                    method: 'POST',
                    headers: {
                        'Content-Type' : 'application/json',
                        'Authorization' : `Bearer ${token}`
                    }
                }).then((res)=> res.json())
                .then((trans)=>{
                    setdata(trans.transactions)
                }).catch((err)=> console.log('error occured'))
            })   
        }
    }, [token])
    const comingSoon = ()=>{
        Alert.alert('Coming Soon', 'This feature is still under construction')
    }
    const showme = ()=>{
        console.log(data[0])
        console.log(token)
    }
    const naving = useNavigation()
    const gototransfer = ()=>{
        naving.navigate('Sendcoins')
    }
    return(
        <View style={transferStyle.main}>
            <View style={transferStyle.heading}>
                <Text style={transferStyle.head_text}>Transfers</Text>
                <Image source={require('../img/rDEOVtE7vOs.png')} style={transferStyle.profilePix}/>
            </View>
            <View style={transferStyle.upper}>
                <TouchableOpacity style={transferStyle.upper_card} onPress={gototransfer}>
                    <MaterialCommunityIcons
                        name='credit-card-multiple-outline'
                        size={50}
                        color='#3B433D'
                    />
                    <Text style={transferStyle.upper_card_text}>to other user</Text>
                </TouchableOpacity>
                <TouchableOpacity style={transferStyle.upper_card} onPress={showme}>
                    <View style={{flexDirection: 'row', alignItems:'center'}}>
                        <MaterialCommunityIcons
                            name='bank-transfer-out'
                            size={35}
                            color='#38B8D4'
                        />
                        <MaterialCommunityIcons
                            name='cellphone-arrow-down'
                            size={25}
                            color='#38B8D4'
                        />
                    </View>
                    <Text style={transferStyle.upper_card_text}>Withdrawal</Text>
                </TouchableOpacity>
                <TouchableOpacity style={transferStyle.upper_card} onPress={comingSoon}>
                    <View style={{flexDirection: 'row', alignItems:'center'}}>
                        <MaterialCommunityIcons
                            name='account-arrow-right'
                            size={35}
                            color='#AF5D58'
                        />
                        <MaterialCommunityIcons
                            name='bank-plus'
                            size={25}
                            color='#AF5D58'
                        />
                    </View>
                    <Text style={transferStyle.upper_card_text}>send to Bank</Text>
                </TouchableOpacity>
                <TouchableOpacity style={transferStyle.upper_card} onPress={comingSoon}>
                    <View style={{flexDirection: 'row', alignItems:'center'}}>
                        <MaterialCommunityIcons
                            name='bank-transfer-out'
                            size={35}
                            color='#231B7A'
                        />
                        <MaterialCommunityIcons
                            name='account-plus-outline'
                            size={25}
                            color='#231B7A'
                        />
                    </View>
                    <Text style={transferStyle.upper_card_text}>recieve from Bank</Text>
                </TouchableOpacity>
            </View>
            <Text style={transferStyle.history_text}>Transfer History</Text>
            <View style={{height: Dimensions.get('screen').height * 0.55}}>
                <ScrollView style={transferStyle.lower}>
                    {data.map((value, index) =>{
                        return(
                            <View key={index} style={transferStyle.hisCard}>
                                <TouchableOpacity style={transferStyle.prodCard} onPress={comingSoon}>
                                    <View style={{width: '80%'}}>
                                        <Text style={transferStyle.trans_title}>{value.description}</Text>
                                        <Text style={{paddingLeft: 15}}>{value.created_at}</Text>
                                    </View>
                                    <View style={{width: '15%' }}>
                                        <Text style={{color: 'red'}}>
                                            <MaterialCommunityIcons 
                                                name="currency-ngn"
                                                size={15}
                                                color='red'
                                            />
                                            {value.coinissued}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={{
                                    justifyContent:'center',
                                    backgroundColor: '#FFFEFE',
                                    borderTopRightRadius: 50,
                                    borderBottomRightRadius: 50,
                                    width: '15%',
                                    alignItems: 'center',
                                    height: 65,
                                    marginTop:10
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

export default Transfer;