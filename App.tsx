/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen'
import QuizScreen from './screens/QuizScreen'
import ResultScreen from './screens/ResultScreen'

import React from 'react';

const Stack = createNativeStackNavigator()

function App(){
  return (
     <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='home' component={HomeScreen} options ={{headerShown : false}} />
         <Stack.Screen name='quiz' component={QuizScreen}/>
         <Stack.Screen name='result' component={ResultScreen}/>
      </Stack.Navigator>
     </NavigationContainer>
  );
}
export default App;
