import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity, Alert} from 'react-native'
import { useNavigation} from '@react-navigation/native'
import { login } from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Login = ()=>{
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [passimg, setpassimg] = useState(require('./img/hide.png'))
    const [showpass, setshowpass] = useState(true)
    const naving = useNavigation()
    
    useEffect(()=>{
        AsyncStorage.getItem('email')
        .then((res)=>{
            // console.log(res)
            if (email == '') {
                setemail(res)
            }
        })
        AsyncStorage.getItem('password')
        .then((res)=>{
            // console.log(res)
            if (password == '') {
                setpassword(res)                
            }
        })
    },[email, password])

    const inputemail = (email)=>{
        setemail(email)
        // console.log(email)
    }
    const inputpassword = (pass)=>{
        setpassword(pass)
        // console.log(pass)
    }
    const switchPassword = (data)=>{
        if (data == false) {
            setshowpass(true)
            setpassimg(require('./img/hide.png'))
            // console.log(data)
        } else {
            setshowpass(false)
            setpassimg(require('./img/show.png'))
            // console.log(data)
        }
    }
    const subMitlogin = ()=>{
        fetch('https://teleprintersoftwares.com/plasticcycleapi/api/login',{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        }).then((res)=> res.json())
        .then((data)=>{
            if (data.token) {
                AsyncStorage.setItem('isLogged', 'true')
                AsyncStorage.setItem('email', email)
                AsyncStorage.setItem('password', password)
                AsyncStorage.setItem('user', JSON.stringify(data.user))
                AsyncStorage.setItem('token', data.token)
                naving.navigate('Dashboard')
            } else {
                Alert.alert('error', data.message[0])                
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    const gotoReg = ()=>{
        naving.navigate('Register')
    }

    return(
        <SafeAreaView>
            <View style={login.main}>
                <Text style={login.heading}>Sign in to your Acount</Text>
                <Image source={require('./img/Capture.png')} style={ login.frontImg } />
                <View style={login.loginForm}>
                    <TextInput 
                        placeholder="Email Adress"
                        style={login.formtext}
                        onChangeText={inputemail}
                        autoCompleteType="email"
                        defaultValue={email}
                    />
                    <Image source={require('./img/iconmail.png')} style={login.mailIcon} />
                    <TextInput 
                        placeholder="Password"
                        style={login.formtext}
                        onChangeText={inputpassword}
                        autoCompleteType="password"
                        defaultValue={password}
                        secureTextEntry={showpass}
                    />
                    <TouchableOpacity style={login.clickicon} onPress={()=> switchPassword(showpass)}>
                        <Image source={passimg} style={login.passicon}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={login.forgot}>Forgot Password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={login.loginBotton} onPress={subMitlogin}>
                        <Text style={{color: '#FFFDFD', textAlign: 'center', fontSize: 20, fontWeight: '700'}}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
                <View style={login.foottext}>
                    <Text>Don’t have an account?</Text>
                    <TouchableOpacity onPress={gotoReg}><Text style={{color: '#0C3B81'}}> Sign Up</Text></TouchableOpacity>
                </View>
                </View>
        </SafeAreaView>
    )
}


export default Login;