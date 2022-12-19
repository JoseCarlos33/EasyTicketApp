import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from 'src/screens/Home';
import Test from 'src/screens/Test';
const { Navigator, Screen } = createNativeStackNavigator();
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import { theme } from '@utils/theme';
import EventsList from 'src/screens/EventsList';
import EventDetail from 'src/screens/EventDetail';
import Cart from 'src/screens/Cart';
import EmptyCart from 'src/screens/EmptyCart';

Icon.loadFont()
IconMaterial.loadFont()

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
          // tabBarBadge: teste,
          tabBarIcon: ({ color, focused}) => focused ? 
            (<Icon name="ios-home" color={color} size={26} /> ) : (
            <IconMaterial name="home-filled" color={color} size={27} />)
          ,
        }}
      />
      <Tab.Screen
        name="Explore"
        component={EventsList}
        initialParams={{ isSearchInputFocused: false }}
        options={{
          tabBarLabel: 'Explore',
          // tabBarColor: '#d02860',
          tabBarIcon: ({ color }) => (
            <IconMaterial name="explore" color={color} size={27} />
          ),
        }}
      />
      <Tab.Screen
        name="Carrinho"
        component={Cart}
        options={{
          tabBarLabel: 'Carrinho',
          // tabBarColor: '#1f65ff',
          tabBarIcon: ({ color, focused }) => focused ? (
            <IconMaterial name="shopping-cart" color={color} size={27} />
          ) : (
            <IconMaterial name="add-shopping-cart" color={color} size={27} />
          )
        }}
      />
      <Tab.Screen
        name="Favoritos"
        component={Test}
        options={{
          tabBarLabel: 'Favoritos',
          // tabBarColor: '#1f65ff',
          tabBarIcon: ({ color, focused }) => focused ? (
            <IconMaterial name="favorite" color={color} size={27} />
          ) : (
            <IconMaterial name="favorite-border" color={color} size={27} />
          )
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Test}
        options={{
          tabBarLabel: 'Perfil',
          // tabBarColor: '#694fad',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
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
        name="TabScreens"
        component={TapRoutes}
        options={{ headerShown: false }}
      />
      <Screen
        name="EventDetail"
        component={EventDetail}
        initialParams={{ eventId: null }}
      />
    </Navigator>
  )
}