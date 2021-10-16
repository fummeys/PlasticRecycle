import 'react-native-gesture-handler';
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './components/login'
import Dashboard from './components/dashboard'
import Welcome from './components/welcome'
import Register from './components/Register'
import Sendcoins from './components/dashboard/Sendcoins'
import Init from './components/Init'
import Camera from './components/dashboard/Camera';
import Preview from './components/dashboard/Preview';

const StackNav = createStackNavigator()


const Root = ()=>{
    const [initialrote, setinitialrote] = useState('Init')

    return(
        <NavigationContainer>
            <StackNav.Navigator initialRouteName={initialrote}>
                <StackNav.Screen name="Init" component={ Init} options={{headerShown: false}}/>
                <StackNav.Screen name="Dashboard" component={ Dashboard } options={{headerShown: false}} />
                <StackNav.Screen name="Login" component={ Login } options={{headerShown: false}} />
                <StackNav.Screen name="Welcome" component={Welcome} options={{headerShown: false}}/>
                <StackNav.Screen name="Register" component={ Register } options={{headerShown: false}} />
                <StackNav.Screen name="Sendcoins" component={ Sendcoins } options={{headerShown: false}} />
                <StackNav.Screen name="Camera" component={ Camera } options={{headerShown: false}}/>
                <StackNav.Screen name="Preview" component={ Preview } options={{headerShown: false}} />
            </StackNav.Navigator>
        </NavigationContainer>
    )
}



export default Root;