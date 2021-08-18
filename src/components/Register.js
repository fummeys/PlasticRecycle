import React, {useState} from 'react';
import { View, Text, SafeAreaView, 
    TouchableOpacity, TextInput, Image, 
    Alert, Platform, KeyboardAvoidingView} from 'react-native'
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
    const offset = Platform.OS === 'ios' ? 40 : 0

    
    const inputemail = (email)=>{
        setemail(email)
    }
    const inputfname = (name)=>{
        setfname(name)
    }
    const inputlname = (name)=>{
        setlname(name)
    }
    const inputpassword = (pass)=>{
        setpassword(pass)
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
        } else {
            setr_showpass(false)
            setr_passimg(require('./img/show.png'))
        }
    }
    const subMitlogin = ()=>{
        if(fname == "" || lname == "" || email == "" || r_pass == ""){
            setmessStyle(signup.mess_r)
            setmessage('All fields must be filled')
        }else if (password == r_pass) {
            setmessStyle(signup.mess_g)
            fetch('https://teleprintersoftwares.com/plasticcycleapi/api/register', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                mode: 'no-cors',
                body: JSON.stringify({
                    name: fname +' '+ lname,
                    email: email,
                    password: password,
                })
            }).then((res)=> res.json())
            .then((data)=> {
                console.log(data)
                if (data.token) {
                    naving.navigate('Init')
                } else {
                    Alert.alert('Error', 'An error occured')
                }
            })
            .catch((error)=> {
                Alert.alert('Error', 'An error occured')
            })
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
            <KeyboardAvoidingView
                behavior='position'
                keyboardVerticalOffset={offset}>
                <View style={signup.main}>
                    <Text style={signup.heading}>Create an Account</Text>
                    <Image source={require('./img/undraw_Dev_focus_re_6iwt.png')} style={ signup.frontImg } />
                    <View style={signup.loginForm}>
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
                        
                    <View style={{position: 'relative'}}><Text style={messStyle}>{message}</Text></View>
                        <TouchableOpacity style={signup.loginBotton} onPress={subMitlogin}>
                            <Text style={{color: '#FFFDFD', textAlign: 'center', fontSize: 20, fontWeight: '700'}}>SIGN UP</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={login.foottext}>
                        <Text>Already have an account? </Text>
                        <TouchableOpacity onPress={gotologin}><Text style={{color: '#0C3B81'}}>Sign in</Text></TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}


export default Register;