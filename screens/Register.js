import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native'
import React from 'react'
import { container } from '../constant'
import FastImage from 'react-native-fast-image'

export default function Register({navigation}) {
  return (
    <SafeAreaView style={styles.container}>

    <View style={styles.box}>   

        <View style={styles.titleSection}>
            <Text style={styles.title}>Sign up.</Text>
            <Text>Enter your details to create new account.</Text>
        </View>


        {/* Input Section */}
        <View style={styles.inputSection}>
                <View style={styles.inputBox}>
                    <TextInput 
                        placeholder='Username'
                    />
                </View>
                <View style={styles.inputBox}>
                    <TextInput 
                        placeholder='Email'
                    />
                </View>
                <View style={styles.inputBox}>
                <TextInput 
                        placeholder='Password'
                    />
                </View>
                <View style={styles.inputBox}>
                <TextInput 
                        placeholder='Phone Number'
                    />
                </View>
            </View>


            {/* Button Section */}
            <View style={styles.loginSection}>
                {/* Login Button */}
                <TouchableOpacity
                    onPress={() => navigation.navigate('Dashboard')}
                    style={styles.loginButton}
                >
                    <View >
                        <Text style={styles.text}>Sign Up</Text>
                    </View>
                </TouchableOpacity>

                <View style={{flexDirection:'row'}}>
                    <Text style={{marginTop:30}}>
                        Already have an account?
                    </Text>
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('Login')}
                        style={{marginTop:30, marginLeft:3}}
                    >
                        <Text style={{color:'blue'}}>Log In</Text>
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
})