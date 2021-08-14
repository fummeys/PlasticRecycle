import React from 'react'
import { View, Text, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import { color } from 'react-native-reanimated'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { transferStyle } from '../styles'

const Transfer = ()=>{
    let element = [
        {
            title: "BROWN WALTER",
            date: "Mon, 23 June 2021",
            amount: 3200,
            type: "Debit",
            color: "red"
        },
        {
            title: "BROWN WALTER",
            date: "Mon, 23 June 2021",
            amount: 3200,
            type: "Debit",
            color: "red"
        },
        {
            title: "BROWN WALTER",
            date: "Mon, 23 June 2021",
            amount: 3200,
            type: "Debit",
            color: "red"
        },
        {
            title: "BROWN WALTER",
            date: "Mon, 23 June 2021",
            amount: 3200,
            type: "Debit",
            color: "red"
        },
        {
            title: "BROWN WALTER",
            date: "Mon, 23 June 2021",
            amount: 3200,
            type: "credit",
            color: "green"
        },
        {
            title: "BROWN WALTER",
            date: "Mon, 23 June 2021",
            amount: 3200,
            type: "credit",
            color: "green"
        },
        {
            title: "BROWN WALTER",
            date: "Mon, 23 June 2021",
            amount: 3200,
            type: "Debit",
            color: "red"
        },
        {
            title: "BROWN WALTER",
            date: "Mon, 23 June 2021",
            amount: 3200,
            type: "credit",
            color: "green"
        },
        {
            title: "BROWN WALTER",
            date: "Mon, 23 June 2021",
            amount: 3200,
            type: "credit",
            color: "green"
        },
    ]
    return(
        <View style={transferStyle.main}>
            <View style={transferStyle.heading}>
                <Text style={transferStyle.head_text}>Transfers</Text>
                <Image source={require('../img/rDEOVtE7vOs.png')} style={transferStyle.profilePix}/>
            </View>
            <View style={transferStyle.upper}>
                <TouchableOpacity style={transferStyle.upper_card}>
                    <MaterialCommunityIcons
                        name='credit-card-multiple-outline'
                        size={50}
                        color='#3B433D'
                    />
                    <Text style={transferStyle.upper_card_text}>to other user</Text>
                </TouchableOpacity>
                <TouchableOpacity style={transferStyle.upper_card}>
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
                <TouchableOpacity style={transferStyle.upper_card}>
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
                <TouchableOpacity style={transferStyle.upper_card}>
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
            <View style={transferStyle.lower}>
                <Text style={transferStyle.history_text}>Transfer History</Text>
                <ScrollView>
                    {element.map((value, index) =>{
                        return(
                            <View key={index} style={transferStyle.hisCard}>
                                <TouchableOpacity style={transferStyle.prodCard} >
                                    <View style={transferStyle.transfer_name}>
                                        <Text style={transferStyle.trans_title}>{value.title}</Text>
                                        <Text>{value.date}</Text>
                                    </View>
                                    <View style={transferStyle.transfer_det}>
                                        <Text style={{color: value.color}}>
                                            <MaterialCommunityIcons 
                                                name="currency-ngn"
                                                size={15}
                                                color={value.color}
                                            />
                                            {value.amount}
                                        </Text>
                                        <Text>{value.type}</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={{
                                    justifyContent:'center',
                                    backgroundColor: '#FFFEFE',
                                    borderTopRightRadius: 50,
                                    borderBottomRightRadius: 50,
                                    width: '15%',
                                    alignItems: 'center',
                                    height: 80,
                                    marginTop:10
                                    }}>
                                    <MaterialCommunityIcons 
                                        name="trash-can"
                                        size={40}
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