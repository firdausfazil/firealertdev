import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainScreen from '../components/MainScreen'
import BottonNavigationBar from '../components/BottonNavigationBar'

export default function Dashboard() {
  return (
    <SafeAreaView style={styles.container}>
        <Text>Dashboard</Text>
        {/* <BottonNavigationBar /> */}
        {/* <MainScreen /> */}
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})