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


const Stack = createStackNavigator();
const BottomStack = createBottomTabNavigator();

const App = () => {

    const BottomTabMenu = () => {
        return (
            <BottomStack.Navigator
                screenOptions={() => ({
                    headerShown:false
                    
                })}
            >
                <BottomStack.Screen name='BTHome' component={Dashboard} />
                <BottomStack.Screen name='BTActivity' component={Activity} />
                <BottomStack.Screen name='BTAccount' component={Account} />
            </BottomStack.Navigator>
        );
    }

  
  

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
      </Stack.Navigator>
    </NavigationContainer>
    
    
  );
}


export default App;
