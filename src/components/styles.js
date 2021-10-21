import { StyleSheet, Dimensions } from 'react-native'

const welcome = StyleSheet.create({
    main:{
        backgroundColor: '#FFFFFF',
        height: '100%',
        borderRadius: 40,
    },
    heading: {
        color: '#2E2D2D',
        position: 'relative',
        top: 50,
        textAlign: 'center',
        height: 36,
        width: '100%',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 24,
    },
    heading2: {
        position: 'relative',
        top: 60,
        textAlign: 'center',
        height: 22,
        width: '100%',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 18
    },
    backImg: {
        position: 'absolute',
        top: Dimensions.get('screen').height * 0.17,
        width: Dimensions.get('screen').width * 0.8,
        height: Dimensions.get('screen').height * 0.4,
        alignSelf: 'center'
    },
    frontImg: {
        position: 'absolute',
        top: Dimensions.get('screen').height * 0.21,
        // left: Dimensions.get('screen').height * 0.03,
        width: Dimensions.get('screen').width * 0.8,
        height: Dimensions.get('screen').height * 0.32,
        alignSelf: 'center'
    },
    getStarted: {
        backgroundColor: '#215F2F',
        height: 58,
        width: '50%',
        borderRadius: 10,
        position: 'absolute',
        bottom: Dimensions.get("screen").height * 0.15,
        justifyContent: 'center',
        alignSelf: 'center'
    }
})

const login = StyleSheet.create({
    main:{
        backgroundColor: '#FFFFFF',
        height: Dimensions.get('screen').height,
        justifyContent: 'flex-start',
        paddingTop: Dimensions.get('screen').height * 0.1
    },
    heading: {
        color: '#2E2D2D',
        textAlign: 'center',
        height: 36,
        width: '100%',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 24,
    },
    frontImg: {
        width: Dimensions.get('screen').width * 0.7,
        height: Dimensions.get('screen').height * 0.3,
        alignSelf: 'center'
    },
    loginForm: {
        width: Dimensions.get('screen').width * 0.8,
        // position: 'absolute',
        // top: Dimensions.get('screen').height * 0.4,
        alignSelf: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    formtext:{
        backgroundColor: "#e1eaea",
        padding: 10,
        marginTop: 15,
        fontSize: 16,
        borderRadius: 10,
    },
    mailIcon:{
        width: 30,
        height: 30,
        position: 'relative',
        top: -40,
        right: 15,
        alignSelf: 'flex-end'
    },
    passicon:{
        width: 35,
        height: 35,
        alignSelf: 'flex-end'
    },
    clickicon:{
        width: 30,
        height: 30,
        position: 'relative',
        top: -40,
        right: 15,
        alignSelf: 'flex-end'
    },
    forgot: {
        color: '#0C3B81',
        paddingBottom: 10
    },
    loginBotton: {
        backgroundColor: '#215F2F',
        height: 50,
        justifyContent: 'center',
        borderRadius: 10,
        marginBottom: 30
    },
    foottext:{
        flexDirection: 'row',
    },
    footView: {
        alignSelf: 'center',
        height: 70,
        justifyContent: 'flex-end'
    }
})

const signup = StyleSheet.create({
    main:{
        backgroundColor: '#FFFFFF',
        height: '100%',
        borderRadius: 40,
    },
    heading: {
        color: '#2E2D2D',
        position: 'relative',
        top: 50,
        textAlign: 'center',
        height: 36,
        width: '100%',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 24,
    },
    frontImg: {
        position: 'absolute',
        top: Dimensions.get('screen').height * 0.1,
        width: Dimensions.get('screen').width * 0.565,
        height: Dimensions.get('screen').height * 0.26,
        alignSelf: 'center'
    },
    loginForm: {
        width: Dimensions.get('screen').width * 0.8,
        position: 'absolute',
        top: Dimensions.get('screen').height * 0.35,
        alignSelf: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    formtext:{
        backgroundColor: "#e1eaea",
        padding: 10,
        marginTop: 15,
        fontSize: 16,
        borderRadius: 10,
    },
    formpass:{
        backgroundColor: "#e1eaea",
        padding: 10,
        marginTop: 15,
        fontSize: 16,
        borderRadius: 10,
        marginBottom: -30
    },
    passicon:{
        width: 35,
        height: 35,
        alignSelf: 'flex-end',
    },
    clickicon:{
        width: 30,
        height: 30,
        position: 'relative',
        top: -10,
        right: 15,
        alignSelf: 'flex-end'
    },
    loginBotton: {
        backgroundColor: '#215F2F',
        height: 50,
        justifyContent: 'center',
        borderRadius: 10,
        marginBottom: 30,
        marginTop: 30
    },
    foottext:{
        flexDirection: 'row',
    },
    footView: {
        position: 'absolute',
        top: Dimensions.get('screen').height * 0.86,
        alignSelf: 'center',
    },
    mess_g:{
        color: 'green'
    },
    mess_r: {
        color: 'red'
    }
})

const dashboard = StyleSheet.create({
    main: {
        height: Dimensions.get('screen').height * 0.5,
    }
})

const home = StyleSheet.create({
    main: {
        height: Dimensions.get('screen').height,
        marginHorizontal: 15,
        marginTop: 10,
        backgroundColor: "#F5F3F3"
    },
    heading: {
        borderRadius: 20,
        borderColor: "black",
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: Dimensions.get('screen').height * 0.08,
    },
    head_text:{
        color:"black",
        justifyContent: 'center',
        textAlignVertical: 'center',
        fontSize: 24,
        fontWeight: '700',
    },
    profilePix: {
        width: 70,
        height: 70,
    },
    prodPix: {
        width: 70,
        height: 70,
        alignSelf:'center',
        borderRadius: 50
    },
    upper: {
        marginBottom: 20,
        justifyContent: 'center',
        height: Dimensions.get('screen').height * 0.2,
    },
    lower: {
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        width: Dimensions.get('screen').width * 0.95,
        marginTop: 5,
    },
    card: {
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: "#FFFEFE",
        borderRadius: 20,
    },
    prodCard: {
        margin: 5,
        flexDirection: 'row',
        backgroundColor: "#FFFEFE",
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        height: 65,
        width: Dimensions.get('screen').width * 0.7
    },
    card_text: {
        color: "#076733",
        fontSize: 20,
        fontWeight: '400',
        textAlignVertical: 'center',
        marginRight: Dimensions.get('screen').width * 0.4,
    },
    prod_view: {
        justifyContent: 'center',
        marginLeft: 20,
        width: '70%'
    },
    hisCard: {
        flexDirection: 'row',
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        marginBottom: 5
    }
})

const transferStyle = StyleSheet.create({
    main: {
        height: Dimensions.get('screen').height,
        marginHorizontal: 15,
        marginTop: 5,
        backgroundColor: "#F5F3F3"
    },
    heading: {
        borderRadius: 20,
        borderColor: "black",
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: Dimensions.get('screen').height * 0.08
    },
    head_text:{
        color:"black",
        justifyContent: 'center',
        textAlignVertical: 'center',
        left: 30,
        fontSize: 36,
        fontWeight: '700'
    },
    profilePix: {
        width: 70,
        height: 70,
        alignSelf: 'center'
    },
    upper: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: Dimensions.get('screen').height * 0.2,
    },
    lower: {
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    upper_card: {
        backgroundColor: '#FFFEFE',
        width: Dimensions.get('screen').width * 0.4,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        height: Dimensions.get('screen').height * 0.08,
    },
    upper_card_text: {
        color: '#076733'
    },
    history_text:{
        color:"black",
        justifyContent: 'center',
        textAlignVertical: 'center',
        left: 30,
        fontSize: 24,
        fontWeight: '700'
    },
    hisCard: {
        flexDirection: 'row',
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
    },
    prodCard: {
        margin: 10,
        flexDirection: 'row',
        backgroundColor: "#FFFEFE",
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        height: 65,
        width: '75%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    transfer_name:{
        left: 30,
        width: '70%'
    },
    transfer_det:{
        right: 10
    },
    trans_title: {
        fontSize: 16,
        fontWeight: '700',
        paddingLeft: 10
    },
})

const sendcoinStyles = StyleSheet.create({
    main: {
        height: "100%",
        marginHorizontal: 15,
        marginTop: 10,
        backgroundColor: "#F5F3F3"
    },
    backDiv: {
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10
    },
    transferForm: {
        height: Dimensions.get('screen').height * 0.5,
        width: Dimensions.get('screen').width * 0.9,
        alignSelf: 'center',
        paddingTop: Dimensions.get('screen').height * 0.05,
    },
    formtext:{
        backgroundColor: "#e1eaea",
        padding: 10,
        marginTop: 5,
        fontSize: 16,
        borderRadius: 10,
    },
    forminput: {
        padding: 10
    },
    BigText: {
        fontSize: 25,
        fontWeight: '700',
        paddingBottom: 50
    },
    normalText: {
        fontSize: 20,
        fontWeight: '700'
    }
})

const cameraScreen = StyleSheet.create({
    main: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black'
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 50,
        padding: 5,
        alignSelf: 'center',
        margin: 20,
    },
})

const prevStyles = StyleSheet.create({
    main:{
      width: Dimensions.get('screen').width * 0.9,
      height: Dimensions.get('screen').height * 0.8,
      alignSelf: 'center',
      paddingTop: Dimensions.get('screen').height * 0.05,
    //   borderWidth: 1,
      marginTop: 20
    },
    imgprev:{
        width: Dimensions.get('screen').width * 0.5,
        height: Dimensions.get('screen').height * 0.3,
        alignSelf: 'center'
    },
    prevForm:{
        // borderWidth: 1,
        width: Dimensions.get('screen').width * 0.7,
        alignSelf: 'center'
    },
    prevformBottondiv:{
        flex: 1,
        flexDirection: 'row',
        height: 80,
        width: Dimensions.get('screen').width * 0.5,
        paddingTop: 50,
        justifyContent: 'space-between',
        alignSelf: 'center'
    },
    prevfromBotton:{
        // borderWidth: 2,
        height: 60,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#cccccc'
    }
})

const settingsStyle = StyleSheet.create({
    main: {
        backgroundColor: '#FFFFFF',
        height: '100%',
        paddingTop: 10
    },
    update:{
        height: Dimensions.get('screen').height * 0.5,
        width: Dimensions.get('screen').width * 0.8,
        justifyContent: 'center',
        alignSelf:'center',
    },
    profileImg:{
        width: 150,
        height: 150,
        alignSelf:'center',
    },
    textUPdate: {
        fontSize: 20,
        textAlign:'left',
        fontWeight: '700',
        paddingLeft: 10
    },
    Logout:{
        width: 48,
        borderWidth: 1,
        alignSelf: 'center',
        alignContent: 'center',
        borderRadius: 5,
        backgroundColor: '#ff0000'
    }
})

module.exports = {
    welcome, login, signup, dashboard, 
    home, transferStyle, sendcoinStyles, 
    cameraScreen, prevStyles, settingsStyle
};