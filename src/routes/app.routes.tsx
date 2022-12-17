import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from '../screens/Home';
import Test from '@screens/Test';
const { Navigator, Screen } = createNativeStackNavigator();
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { theme } from '@utils/theme';
Icon.loadFont()

const Tab = createMaterialBottomTabNavigator();
const teste = 5;

export function TapRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      shifting={true}
      labeled={true}
      activeColor={theme.color.white}

    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          // tabBarColor: '#009387',
          tabBarBadge: teste,
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Test}
        options={{
          tabBarLabel: 'Updates',
          // tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-notifications" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Home}
        options={{
          tabBarLabel: 'Profile',
          // tabBarColor: '#694fad',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Test}
        options={{
          tabBarLabel: 'Explore',
          // tabBarColor: '#d02860',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-aperture" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

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
        name="Home1"
        component={TapRoutes}
        options={{ headerShown: false }}
      />
      <Screen
        name="Home2"
        component={Home}
      />
    </Navigator>
  )
}
