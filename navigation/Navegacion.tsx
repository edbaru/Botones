import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OtroCubo from '../screens/OtroCubo';
import HomeScreen from '../screens/HomeScreen';

export type RootStackParamList = {
  HomeScreen: undefined;
  OtroCubo: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="OtroCubo" component={OtroCubo} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
