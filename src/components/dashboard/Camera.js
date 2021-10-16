import React from 'react'
import { View, TouchableOpacity, BackHandler } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'
import { RNCamera } from 'react-native-camera'
import { cameraScreen } from '../styles'

const Camera = () => {
    const Naving = useNavigation()
    const takePicture = async function(camera) {
        const options = { quality: 0.5, base64: true, doNotSave: false};
        const data = await camera.takePictureAsync(options);
        Naving.navigate('Preview', {img: data})
      };
    BackHandler.addEventListener('hardwareBackPress', ()=>{
        Naving.navigate('Dashboard')
        return true
    })

    return (
        <View style={cameraScreen.main}>
            <RNCamera 
                style={cameraScreen.preview}
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
            {({camera})=>{
                return(
                <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={()=> takePicture(camera) } style={cameraScreen.capture}>
                        <MaterialCommunityIcons 
                            name='camera'
                            size={50}
                            color='#99ccff'
                        />
                    </TouchableOpacity>
                </View>
                )
            }}
            </RNCamera>
        </View>
    )
}

export default Camera
