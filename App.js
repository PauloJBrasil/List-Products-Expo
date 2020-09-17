import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Screen from './src/pages/page_main';
import Screen_second from './src/pages/second_page';

const Root = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Root.Navigator 
      screenOptions={{
        headerStyle: {
          backgroundColor: '#DA552F'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
         fontWeight: 'bold',
        }
      }}>

        <Root.Screen 
          name="Screen1" 
          component={Screen} 
          options={{
            title: 'Main',
          }}
        />

        <Root.Screen 
          name="Screen2" 
          component={Screen_second}
          options={{
            title: 'Second',
          }}
        />

      </Root.Navigator>
      
    </NavigationContainer>
  );
}

