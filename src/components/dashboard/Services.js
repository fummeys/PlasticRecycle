import React,{ useState, useEffect} from 'react'
import { View, Text, PermissionsAndroid, Button} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const readfile = ()=>{
    const permm = PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
            title: "Cool Photo App Camera Permission",
            message:
              "App needs access to your camera",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK"
          }
    )
    if (permm === PermissionsAndroid.RESULTS.GRANTED) {
        console.log(PermissionsAndroid.RESULTS)
        // console.log(permm)
      } else {
        console.log(PermissionsAndroid.RESULTS)
        // console.log(permm)
      }
}


const Services = ()=>{
  const [token, settoken] = useState('')
  const [user, setuser] = useState('')
  useEffect(() => {
    AsyncStorage.getItem('token', (err, data)=>{
      settoken(data)
    })
    AsyncStorage.getItem('user', (err, data)=>{
      let userObj = JSON.parse(data)
      setuser(userObj)
    })
  }, [])
  // console.log(typeof(user))
  
  // let client = JSON.parse(user)
  const Richer = ()=>{
    fetch(`https://teleprintersoftwares.com/plasticcycleapi/api/richer/${user.id}/${user.coins}`, {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${token}`
      }
    }).then((res)=> res.json())
    .then((data)=>{
      console.log(data)
    }).catch((err)=>{
      console.log(err)
    })
  }
  const Reward = ()=>{
    fetch(`https://teleprintersoftwares.com/plasticcycleapi/api/reward`,{
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${token}`
      }
    }).then((res)=> console.log(res))
    .catch((err)=>{
      console.log(err)
    })
  }
  const outTransfers = ()=>{
    fetch('https://teleprintersoftwares.com/plasticcycleapi/api/outtransfers',{
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${token}`
      }
    }).then((res)=> res.json())
    .then((data)=>{
      console.log(data)
    }).catch((err)=> console.log(err))
  }
  const inTransfers = ()=>{
    fetch('https://teleprintersoftwares.com/plasticcycleapi/api/intransfers',{
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${token}`
      }
    }).then((res)=> res.json())
    .then((data)=>{
      console.log(data)
    }).catch((err)=> console.log(err))
  }
  const updateUser = (key, value)=>{
    fetch(`https://teleprintersoftwares.com/plasticcycleapi/api/update/${key}/${value}`,{
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${token}`
      }
    }).then((res)=> res.json())
    .then((data)=>{
      console.log(data)
    }).catch((err)=> {
      console.log(err)
    })
  }

    return(
      <>
        <View>
            <Text>this is services</Text>
            <Button title="read file" onPress={readfile}/>
        </View>
        <View>
          <Text>Richer</Text>
          <Button title="Richer" onPress={Richer}/>
        </View>
        <View>
          <Text>Reward</Text>
          <Button title="Reward" onPress={Reward}/>
        </View>
        <View>
          <Text>outtransfers</Text>
          <Button title="outtransfers" onPress={outTransfers}/>
        </View>
        <View>
          <Text>intransfers</Text>
          <Button title="intransfers" onPress={inTransfers}/>
        </View>
        <View>
          <Text>update</Text>
          <Button title="update user" onPress={updateUser('location', 'lagos')}/>
        </View>
      </>
    )
}

export default Services;