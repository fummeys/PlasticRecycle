import React from 'react'
import { BackHandler } from 'react-native'
// import { useNavigation} from '@react-navigation/native'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import D_Home from './dashboard/D_Home'
import Transfer from './dashboard/Transfer'
import Services from './dashboard/Services'
import Settings from './dashboard/Settings'
import { dashboard } from './styles'

const TabNav = createBottomTabNavigator()

const Dashboard = ()=>{
    BackHandler.addEventListener('hardwareBackPress', ()=>{
        return true
    })
    return(
        <TabNav.Navigator style={dashboard.main}
            initialRouteName="D_Home" 
            backBehavior={'initialRoute'}
            screenOptions={({ route }) =>({
                tabBarIcon: ({focused, color, size}) =>{
                    if (route.name === 'D_Home') {
                        return(
                            <MaterialCommunityIcons 
                                name="home"
                                size={size}
                                color={color}
                            />
                        )
                    } else if(route.name === 'Transfer') {
                        return(
                            <MaterialCommunityIcons 
                                name="bank-transfer"
                                size={size}
                                color={color}
                            />
                        )
                    } else if(route.name === 'Settings'){
                        return(
                            <MaterialCommunityIcons 
                                name="cog-outline"
                                size={size}
                                color={color}
                            />
                        )
                    }
                },
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <TabNav.Screen name="D_Home" 
                component={ D_Home}
                options = {{ title: 'Home'}}
            />
            <TabNav.Screen name="Transfer" component={ Transfer}/>
            <TabNav.Screen name="Settings" component={ Settings}/>
        </TabNav.Navigator>
    )
}


export default Dashboard;