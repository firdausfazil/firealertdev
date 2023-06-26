import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BottonNavigationBar from './BottonNavigationBar'

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <Text>MainScreen</Text>
      <BottonNavigationBar />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})