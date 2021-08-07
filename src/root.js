import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './components/login'
import Dashboard from './components/dashboard'
import Welcome from './components/welcome'
import Register from './components/Register'



const StackNav = createStackNavigator()

const Root = ()=>{
    return(
        <NavigationContainer>
            <StackNav.Navigator initialRouteName="Welcome">
                <StackNav.Screen name="Welcome" component={Welcome} options={{headerShown: false}}/>
                <StackNav.Screen name="Login" component={ Login } options={{headerShown: false}}/>
                <StackNav.Screen name="Dashboard" component={ Dashboard } options={{headerShown: false}}/>
                <StackNav.Screen name="Register" component={ Register } options={{headerShown: false}}/>
            </StackNav.Navigator>
        </NavigationContainer>
    )
}



export default Root;