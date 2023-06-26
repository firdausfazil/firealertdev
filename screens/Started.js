import { StyleSheet, Text, View, Dimensions, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image';


const { width, height } = Dimensions.get('window');

export default function Started({navigation}) {
  return (
    <View style={styles.container}>
        <StatusBar
            backgroundColor='#F8F6F6'
            barStyle='dark-content'
        />

        <FastImage
            style={{ width: 250, height: 250 }}
            source={require('../assets/fire.png')}
        />

        <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={styles.startedButton}
        >
            <View >
                <Text style={styles.text}>Started Here</Text>
            </View>
        </TouchableOpacity>
        
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F8F6F6',
        justifyContent:'center',
        alignItems:'center',
        position:'relative'
    },

    startedButton:{
        backgroundColor:'white',
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
        bottom: 50,
        width:width*0.8,
        height: 55,
        borderRadius:30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
        elevation: 0.1, // for android only
    },

    text:{
        fontWeight:'bold',
        color:'black'
    }
})