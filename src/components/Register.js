import React, {useState} from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, TextInput, Image } from 'react-native'
import { useNavigation} from '@react-navigation/native'
import { signup, login } from './styles'


const Register = ()=>{
    const [fname, setfname] = useState('')
    const [lname, setlname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [r_pass, setr_pass] = useState('')
    const [message, setmessage] = useState('')
    const [passimg, setpassimg] = useState(require('./img/hide.png'))
    const [r_passimg, setr_passimg] = useState(require('./img/hide.png'))
    const [messStyle, setmessStyle] = useState()
    const [showpass, setshowpass] = useState(true)
    const [r_showpass, setr_showpass] = useState(true)
    const naving = useNavigation()

    
    const inputemail = (email)=>{
        setemail(email)
        // console.log(email)
    }
    const inputfname = (name)=>{
        setfname(name)
    }
    const inputlname = (name)=>{
        setlname(name)
    }
    const inputpassword = (pass)=>{
        setpassword(pass)
        // console.log(pass)
    }
    const inputr_pass = (pass)=>{
        setr_pass(pass)
        setmessage('')
    }
    
    const switchPassword = (data)=>{
        if (data == false) {
            setshowpass(true)
            setpassimg(require('./img/hide.png'))
        } else {
            setshowpass(false)
            setpassimg(require('./img/show.png'))
        }
    }
    const r_switchPassword = (data)=>{
        if (data == false) {
            setr_showpass(true)
            setr_passimg(require('./img/hide.png'))
            // console.log(data)
        } else {
            setr_showpass(false)
            setr_passimg(require('./img/show.png'))
            // console.log(data)
        }
    }
    const subMitlogin = ()=>{
        if (password == r_pass) {
            setmessStyle(signup.mess_g)
            fetch('https://teleprintersoftwares.com/plasticcycleapi/register', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                mode: 'no-cors',
                body: {
                    'email': email,
                    'password': password
                }
            }).then((res)=> res.json())
            .then((data)=> console.log(data))
            .catch((error)=> console.log(error))
            // gotologin()
        } else {
            setmessStyle(signup.mess_r)
            setmessage('password missmatch')
        }
    }
    const gotologin = ()=>{
        naving.navigate('Login')
    }
    return(
        <SafeAreaView>
            <View style={signup.main}>
                <Text style={signup.heading}>Create an Account</Text>
                <Image source={require('./img/undraw_Dev_focus_re_6iwt.png')} style={ signup.frontImg } />
                <View style={signup.loginForm}>
                <View style={{position: 'relative'}}><Text style={messStyle}>{message}</Text></View>
                    <TextInput 
                        placeholder="First name"
                        style={signup.formtext}
                        onChangeText={inputfname}
                        autoCompleteType="name"
                    />
                    <TextInput 
                        placeholder="Last name"
                        style={signup.formtext}
                        onChangeText={inputlname}
                        autoCompleteType="name"
                    />
                    <TextInput 
                        placeholder="Email Adress"
                        style={signup.formtext}
                        onChangeText={inputemail}
                        autoCompleteType="email"
                    />
                    <TextInput 
                        placeholder="Password"
                        style={signup.formpass}
                        onChangeText={inputpassword}
                        autoCompleteType="password"
                        secureTextEntry={showpass}
                    />
                    <TouchableOpacity style={signup.clickicon} onPress={()=> switchPassword(showpass)}>
                        <Image source={passimg} style={signup.passicon}/>
                    </TouchableOpacity>
                    <TextInput 
                        placeholder="Re-type Password"
                        style={signup.formpass}
                        onChangeText={inputr_pass}
                        autoCompleteType="password"
                        secureTextEntry={r_showpass}
                    />
                    <TouchableOpacity style={signup.clickicon} onPress={()=> r_switchPassword(r_showpass)}>
                        <Image source={r_passimg} style={signup.passicon}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={signup.loginBotton} onPress={subMitlogin}>
                        <Text style={{color: '#FFFDFD', textAlign: 'center', fontSize: 20, fontWeight: '700'}}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
                <View style={login.foottext}>
                    <Text>Already have an account? </Text>
                    <TouchableOpacity onPress={gotologin}><Text style={{color: '#0C3B81'}}>Sign in</Text></TouchableOpacity>
                </View>
                </View>
        </SafeAreaView>
    )
}


export default Register;