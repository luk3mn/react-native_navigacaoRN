/* 
  Documentaçao do navigation no react 
  https://reactnavigation.org/docs/getting-started 

  Dependencias
  - Installation (Sempre é instalado):
  > npm install @react-navigation/native

  - Installing dependencies into a bare React Native project:
  > expo install react-native-screens react-native-safe-area-context

  - Installing the native stack navigator library:
  > npm install @react-navigation/native-stack
*/

import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Importa o NavigationContainer
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/Home'
import Sobre from './src/pages/Sobre'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
          name="Home" 
          component={Home}
          options={{
            title: 'Bem-vindo',
            headerStyle: {
              backgroundColor: '#121212'
            },
            headerTintColor: '#FFF'
          }} 
        />
        <Stack.Screen name="Sobre" component={Sobre} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}