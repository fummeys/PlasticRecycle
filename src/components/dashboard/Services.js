import React from 'react'
import { View, Text, PermissionsAndroid, Button} from 'react-native'
import RNFS from 'react-native-fs'


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
        // console.log(PermissionsAndroid.RESULTS.GRANTED);
        console.log(permm)
      } else {
        // console.log(PermissionsAndroid.RESULTS.GRANTED);
        console.log(permm)
      }
}


const Services = ()=>{
    
    // RNFS.readDir('/storage/emulated/0/Download')
    // .then((locations) =>{
    //     console.log(locations[0].path)
    // })
    return(
        <View>
            <Text>this is services</Text>
            <Button title="read file" onPress={readfile}/>
        </View>
    )
}

export default Services;