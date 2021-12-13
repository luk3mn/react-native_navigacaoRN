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

  - Tab navigation:
  > npm install @react-navigation/bottom-tabs
*/

import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Importa o NavigationContainer
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';
import Perfil from './src/pages/Perfil';
import Contato from './src/pages/Contato';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Home} />
      <Tab.Screen name="Perfil" component={Perfil} />
      <Tab.Screen name="Contato" component={Contato} 
        initialParams={{ nome: 'Renan', tel: '0000-0000', end: 'endereco_da_empresa'}}
      />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
          name="Home" 
          component={Tabs}
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