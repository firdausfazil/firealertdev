import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Dashboard from '../screens/Dashboard';
import Account from '../screens/Account';
import Activity from '../screens/Activity';

const Tab = createBottomTabNavigator();

export default function BottonNavigationBar() {
  return (
    <Tab.Navigator
        //initialRouteName='Dashboard'
        screenOptions={{
            tabBarHideOnKeyboard:true,
            headerShown:false
        }}
    >
        <Tab.Screen name='BTDashboard' component={Dashboard} />
        <Tab.Screen name='Activity' component={Activity} />
        <Tab.Screen name='Account' component={Account} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})
