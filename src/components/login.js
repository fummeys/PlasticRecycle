import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity} from 'react-native'
import { useNavigation} from '@react-navigation/native'
import { login } from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Login = ()=>{
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [passimg, setpassimg] = useState(require('./img/hide.png'))
    const [showpass, setshowpass] = useState(true)
    const naving = useNavigation()
    

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
        AsyncStorage.setItem('isLogged', 'true')
        naving.navigate('Dashboard')
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
                    />
                    <Image source={require('./img/iconmail.png')} style={login.mailIcon} />
                    <TextInput 
                        placeholder="Password"
                        style={login.formtext}
                        onChangeText={inputpassword}
                        autoCompleteType="password"
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