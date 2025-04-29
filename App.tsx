import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/Navegacion';
import { ItemsProvider } from './context/contexto';

export default function App() {
  return (
    <ItemsProvider>
      <NavigationContainer>
        <StackNavigator/>
      </NavigationContainer>
    </ItemsProvider>
  );
}
