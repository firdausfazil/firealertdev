/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Started from './screens/Started';
import Login from './screens/Login';
import Register from './screens/Register';
import Dashboard from './screens/Dashboard';


const Stack = createStackNavigator();

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
        <Stack.Screen name='Dashboard' component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
    
    
  );
}


export default App;
