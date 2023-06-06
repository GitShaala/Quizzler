/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/home/HomeScreen'
import QuizScreen from './src/screens/quiz/QuizScreen'
import ResultScreen from './src/screens/result/ResultScreen'

import React from 'react';

const Stack = createNativeStackNavigator()

function App(){
  return (
     <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='home' component={HomeScreen} options ={{headerShown : false}} />
         <Stack.Screen name='quiz' component={QuizScreen} options ={{headerShown : false}}/>
         <Stack.Screen name='result' component={ResultScreen} options ={{headerShown : false}}/>
      </Stack.Navigator>
     </NavigationContainer>
  );
}
export default App;
