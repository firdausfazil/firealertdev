import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { container } from '../constant'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function Profile({navigation}) {
    const statusbarheight = container.statusBarHeight;
  return (
    <SafeAreaView style={styles.container} edges={['right', 'left', 'top']}>
        
        {/* Header Back Button & Edit */}
        <View style={styles.header}>
            <TouchableOpacity 
                onPress={() => navigation.navigate('BTAccount')}
                style={{flex:7}}
            >
                <AntDesign name='left' style={{color:'grey', fontSize:30}} />
            </TouchableOpacity>
            
            <TouchableOpacity style={{flex:1}}>
                <Text style={{fontSize:20}}>Edit</Text>
            </TouchableOpacity>
        </View>
        

        <View style={styles.picture}>

        </View>
        

    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems:'center'
    },
    header:{
        width:container.width*0.95,
        //height:container.height*0.03,
        alignItems:'center',
        flexDirection:'row',
        marginBottom:20
    },
    picture:{
        width:container.width*0.95,
        height:container.height*0.2,
        backgroundColor:'green'
    }
})