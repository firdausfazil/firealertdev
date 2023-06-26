import { SafeAreaView, StyleSheet, Text, View,Dimensions, TouchableOpacity, StatusBar } from 'react-native'
import React, { useState} from 'react'
import FastImage from 'react-native-fast-image';
import { container, API_HELPER } from '../constant';
import { TextInput } from 'react-native-gesture-handler';


export default function Login({navigation}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = async () => {
        let pangil_api = await API_HELPER('access/login', {username:email, password:password});
        console.log(pangil_api);
    }

  return (
    <SafeAreaView style={styles.container}>
        <StatusBar
            backgroundColor='#F8F6F6'
            barStyle='dark-content'
        />

        <View style={styles.box}>

            {/* Header Section */}
            {/* <View style={styles.headerSection}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Start')}
                >
                    <FastImage
                        source={require('../assets/back.png')}
                        style={{
                            width: container.width * 0.05,
                            height: container.width * 0.05,
                            marginTop:15
                        }}
                    />
                </TouchableOpacity>
            </View> */}


            {/* Title Section */}
            <View style={styles.titleSection}>
                <Text style={styles.title}>Welcome Back.</Text>
                <Text>Log in to your account</Text>
            </View>

            {/* Input Section */}
            <View style={styles.inputSection}>
                <View style={styles.inputBox}>
                    <TextInput 
                        placeholder='Email'
                        defaultValue={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                </View>
                <View style={styles.inputBox}>
                <TextInput 
                        placeholder='password'
                        defaultValue={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry = {false}
                    />
                </View>

                <TouchableOpacity
                    style={{
                        marginTop:10
                    }}
                >
                    <Text style={{fontWeight:'bold'}}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>


            

            
            {/* Button Section */}
            <View style={styles.loginSection}>
                {/* Login Button */}
                <TouchableOpacity
                    //onPress={() => navigation.navigate('Dashboard')}
                    onPress={login}
                    style={styles.loginButton}
                >
                    <View >
                        <Text style={styles.text}>Log In</Text>
                    </View>
                </TouchableOpacity>

                {/* Google Button */}
                <TouchableOpacity
                    //onPress={() => navigation.navigate('Dashboard')}
                    style={styles.googleButton}
                >
                    <View style={{flexDirection:'row'}}> 
                        <FastImage
                            source={require('../assets/googleLogo.png')}
                            style={{
                                width: container.width * 0.05,
                                height: container.width * 0.05,
                                marginRight:10
                            }}
                        />
                        <Text style={styles.text}>Login with Google</Text>
                    </View>
                </TouchableOpacity>

                <View style={{flexDirection:'row'}}>
                    <Text style={{marginTop:30}}>
                        Does not have an account?
                    </Text>
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('Register')}
                        style={{marginTop:30, marginLeft:3}}
                    >
                        <Text style={{color:'blue'}}>Register here</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
            

        </View>
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box:{
        width: '90%',
        height: '100%', 
        //backgroundColor: 'red',
        paddingLeft:5,
        paddingRight:5
    },
    headerSection:{
        height:container.height*0.03,
        justifyContent: 'center',
        width:'100%',
        //backgroundColor:'blue'
    },
    titleSection:{
        height:container.height*0.1,
        width:'100%',
        //backgroundColor:'yellow',
        marginTop:20
    },
    title:{
        fontSize:30,
        fontWeight:'bold',
        marginBottom:5
    },
    inputSection:{
        width:'100%',
        //backgroundColor:'yellow',
        marginTop:5
    },
    inputBox:{
        width:'100%',
        //backgroundColor:'white',
        height:50,
        borderColor:'#DAD8D8',
        borderWidth:1,
        borderRadius:10,
        marginBottom:13,
        justifyContent:'center',
        paddingLeft:20
        // paddingTop:10,
        // paddingBottom:5,
        // paddingLeft:10,
        // paddingRight:10
    },
    loginSection:{
        //backgroundColor:'green',
        position:'absolute',
        bottom: 50,
        width:'104%',
        justifyContent:'center',
        alignItems:'center',
    },
    loginButton:{
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        width:container.width*0.87,
        height: 55,
        borderRadius:30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
        elevation: 0.1,
    },
    googleButton:{
        marginTop:15,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        width:container.width*0.87,
        height: 55,
        borderRadius:30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
        elevation: 0.1, //android
    },
})