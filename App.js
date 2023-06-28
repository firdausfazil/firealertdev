/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Started from './screens/Started';
import Login from './screens/Login';
import Register from './screens/Register';
import Dashboard from './screens/Dashboard';
import Account from './screens/Account';
import Activity from './screens/Activity';
import Profile from './screens/Profile';


const Stack = createStackNavigator();
const BottomStack = createBottomTabNavigator();



const BottomTabMenu = () => {
  return (
      <BottomStack.Navigator
          screenOptions={({route}) => ({
              headerShown:false
              
          })}
      >
          <BottomStack.Screen name='BTHome' component={Dashboard} />
          <BottomStack.Screen name='BTActivity' component={Activity} />
          <BottomStack.Screen name='BTAccount' component={Account} />
      </BottomStack.Navigator>
  );
}



const App = () => {

  return (

    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Start'
        screenOptions={{
          headerShown:false
        }}
      >
        <Stack.Screen name='Start' component={Started} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name='Dashboard' component={BottomTabMenu} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
    
    
  );
}


export default App;
