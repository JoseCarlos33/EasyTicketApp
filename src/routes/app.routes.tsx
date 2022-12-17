import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from '../screens/Home';
const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        navigationBarHidden: true,
        autoHideHomeIndicator: true,
        headerShown: false
      }}
    >
      <Screen
        name="Home"
        component={Home}
      />
    </Navigator>
  )
}
