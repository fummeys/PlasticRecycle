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
        width: Dimensions.get('screen').width * 0.7,
        height: Dimensions.get('screen').height * 0.3,
        alignSelf: 'center'
    },
    loginForm: {
        width: Dimensions.get('screen').width * 0.8,
        position: 'absolute',
        top: Dimensions.get('screen').height * 0.4,
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
        position: 'absolute',
        top: Dimensions.get('screen').height * 0.87,
        alignSelf: 'center',
        flexDirection: 'row'
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
        position: 'absolute',
        top: Dimensions.get('screen').height * 0.9,
        alignSelf: 'center',
        flexDirection: 'row'
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
        height: '80%',
    }
})

const home = StyleSheet.create({
    main: {
        height: "100%",
        marginHorizontal: 15,
        marginTop: 10,
        backgroundColor: "#F5F3F3"
    },
    heading: {
        borderRadius: 20,
        borderColor: "black",
        // borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: "10%"
    },
    head_text:{
        color:"black",
        justifyContent: 'center',
        textAlignVertical: 'center',
        left: 30,
        fontSize: 24,
        fontWeight: '700'
    },
    profilePix: {
        width: 70,
        height: 70,
    },
    upper: {
        marginBottom: 20,
        justifyContent: 'center',
        borderWidth:1
    },
    lower: {
        backgroundColor: "#F5F3F3"
    },
    card: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: "#FFFEFE",
        borderRadius: 30,
        borderWidth:1
    },
    card_text: {
        color: "#076733",
        // borderWidth: 2,
        fontSize: 20,
        fontWeight: '400',
        textAlignVertical: 'center',
        marginRight: Dimensions.get('screen').width * 0.3,
    }
})
module.exports = {welcome, login, signup, dashboard, home};