import React,{ useState, useEffect} from 'react'
import { View, Text, PermissionsAndroid, Button, StyleSheet, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { RNCamera } from 'react-native-camera'
import Camera from './Camera'


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
  const takePicture = async function(camera) {
    const options = { quality: 0.5, base64: true };
    const data = await camera.takePictureAsync(options);
    //  eslint-disable-next-line
    console.log(data.uri);
  };
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
    }).then((res)=> res.json())
    .then((data)=> console.log(data))
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
  const getAllusers = ()=>{
    fetch(`https://teleprintersoftwares.com/plasticcycleapi/api/get`, {
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
  const transferCoin = (receiverid, amount)=>{
    fetch(`https://teleprintersoftwares.com/plasticcycleapi/api/transfer/${receiverid}/${amount}/${token}`,{
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
  const requestCoins = ()=>{
    fetch(`https://teleprintersoftwares.com/plasticcycleapi/api/coin/50`,{
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
        {/* <View>
          <Text>update</Text>
          <Button title="update user" onPress={updateUser('location', 'lagos')}/>
        </View> */}
        <View>
          <Text>GET</Text>
          <Button title="GET ALL users" onPress={getAllusers}/>
        </View>
        {/* <View>
          <Text>transfer</Text>
          <Button title="Transer" onPress={transferCoin(1, 5)}/>
        </View> */}
        <View>
          <Text>Request coins</Text>
          <Button title="Request Coins" onPress={requestCoins}/>
        </View>
        <RNCamera
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        >
          {({ camera, status, recordAudioPermissionStatus }) => {
            if (status !== 'READY') return <Camera />;
            return (
              <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => takePicture(camera)} style={styles.capture}>
                  <Text style={{ fontSize: 14 }}> SNAP </Text>
                </TouchableOpacity>
              </View>
            );
          }}
        </RNCamera>
      </>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});
export default Services;