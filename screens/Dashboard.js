import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Dashboard() {
  return (
    <SafeAreaView style={styles.container}>
        <Text>Dashboard</Text>
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})